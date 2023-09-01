from flask import Flask, redirect, url_for, render_template, jsonify, request
import tensorflow as tf
import pandas as pd
import json
from tensorflow import keras
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

json_data = {'Pclass': {'0':2}, 'Sex': {'0':'female'}, 'Age': {'0':22}, 'SibSp': {'0':1}, 'Parch': {'0':3}}
df = pd.DataFrame(json_data)
print(df.head)
le = LabelEncoder()
scaler = StandardScaler()
df['Sex'] = le.fit_transform(df['Sex'])  # Label encoding
#df_scaled = scaler.transform(df)
print(df.head)
data_tensor = tf.convert_to_tensor(df, dtype=tf.float32)
model = tf.keras.models.load_model("titanic_model_5.keras")
predictions = model.predict(data_tensor)
print(predictions)
predictions = str(predictions)
print(predictions)
