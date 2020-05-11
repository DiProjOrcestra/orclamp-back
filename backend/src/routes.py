from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello World!'

@app.route('/users', methods=['GET'])
def get_users():
    return 'Users: 0'

@app.route('/user', methods=['POST'])
def show_username():
    return request.data