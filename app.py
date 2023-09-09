from flask import Flask, redirect, url_for, render_template, jsonify, request
import tensorflow as tf
import pandas as pd
from tensorflow import keras
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('/index.html')

#Findes ikke endnu
#@app.route('/about')
#def about():
#    return render_template('about.html')

@app.route('/predict', methods=['POST'])
def predict():

    # Your prediction code here
    data = request.json

    #print(data)
    df = pd.DataFrame(data)

    #print(df)

    data_tensor = tf.convert_to_tensor(df, dtype=tf.float32)

    # Make predictions
    model = tf.keras.models.load_model("titanic_model.keras")
    predictions = model.predict(data_tensor)
    predictions = str(predictions)

    print(predictions)
    return jsonify({'prediction': predictions[2:-2]})

@app.route('/AImodel.html')
def predict_page():
    return render_template('/AImodel.html')

if __name__ == '__main__':
    app.run()

