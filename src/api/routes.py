"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    if None in [email, password]:
        return jsonify ({
            "msg": "one or more required fields are missing"
        }), 400
    user = User.query.filter_by(email = email).first()
    if user is None: 
         return jsonify ({
            "msg": "user with that email does not exist"
        }), 404
    if user.password != password:
        return jsonify ({
            "msg": "incorrect password"
        }), 401
    

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
