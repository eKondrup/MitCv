from flask import Flask, redirect, url_for, render_template, jsonify, request
import tensorflow as tf
import pandas as pd
from tensorflow import keras
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder
# Import other necessary modules and functions

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

    print(data)
    df = pd.DataFrame(data)
    #data = df.to_csv()
    print(df)
    #string_data = data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7] + data[8] + data[9]

    #print(string_data)
    #le = LabelEncoder()
    #df['Sex'] = le.fit_transform(df['Sex'])  # Label encoding

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

