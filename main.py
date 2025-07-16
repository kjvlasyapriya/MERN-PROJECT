import pandas as pd
import numpy as np
import pickle
from flask import Flask,render_template,request
app = Flask(__name__)
data=pd.read_csv("Cleaned_data.csv")
pipe=pickle.load(open("RidgeModel.pkl",'rb'))
@app.route('/')
def home():
    locations=sorted(data['location'].unique())
    return render_template('home.html',locations=locations) 

@app.route('/predict',methods=['POST'])
def predict():
    location=request.form.get('location')
    bhk=float(request.form.get('bhk'))
    bath=float(request.form.get('bath'))
    sqft=request.form.get('total_sqft')
    print(location,bhk,bath,sqft)

    input=pd.DataFrame([[location,sqft,bath,bhk]],columns=['location','total_sqft','bath','bhk'])
    prediction=pipe.predict(input)[0]


    return str(np.round(prediction,2))
# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True,port=5001)