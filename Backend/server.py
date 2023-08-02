from flask import Flask,  request, jsonify, render_template
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from pymongo import MongoClient
import certifi
import json
import hashlib

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost/apadproject'
mongo = PyMongo(app)
cluster = MongoClient("mongodb+srv://shrawanibawage:Shrawani7@clustertest.4curtxj.mongodb.net/" , tlsCAFile=certifi.where()) 
db = cluster.apadproject
CORS(app)
collection1 = db.users
collection2= db.projects

def encrypt_password(password):
    # Convert the password to bytes before hashing
    password_bytes = password.encode('utf-8')

    # Use SHA-256 algorithm to encrypt the password
    hashed_password = hashlib.sha256(password_bytes).hexdigest()

    return hashed_password


@app.route('/login', methods=['POST'])
def check_login_details():

    # data = json.loads(request.data) 
    data = request.json
    username = data.get('username')
    password = data.get('password')
    hashed_password= encrypt_password(password)
    
    # print(data)
    result = collection1.find_one({"username":username})
    # print(password)
    # print(result['password'])
    # print(hashed_password)

    if result : 

        if result['password'] == hashed_password:
            response = jsonify({"validLogin" : "true"})
        else:
            response = jsonify({"validLogin" : "false"})
    else :
        response = jsonify({"validLogin" : "Not Found"})
    return response

@app.route('/register', methods=['POST'])
def register_user() :
    # data = json.loads(request.data)
    data = request.json
    username = data.get('username')
    password = data.get('password')
    hashed_password= encrypt_password(password)
    if collection1.insert_one({'username': username, 'password': hashed_password}) :
        response = jsonify({"validRegister" : "true"})
    return response
    
@app.route('/CreateProject', methods=['POST'])
def create_project():
    data = json.loads(request.data)
    print(data)
    if collection2.insert_one(data) :
        response = jsonify({"validCreation" : "true"})
    return response
@app.route('/JoinProject', methods=['POST'])
def enter_project():
    # data = json.loads(request.data)
    data = request.json
    projectID = data.get('projectID')
    print(projectID)
    result_project = collection2.find_one({"projectID":projectID})
    if result_project : 
        response = jsonify({"validCreation" : "true"})
    else:
        response = jsonify({"validCreation" : "false"})
    return response
if __name__ == "__main__":
    print("Hello")
    app.run(port=5000)