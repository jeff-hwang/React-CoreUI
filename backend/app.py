from flask import Flask, jsonify, request, session
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin
from flask_restful import Api
import gevent.monkey
import requests
import logging as logger
import json
gevent.monkey.patch_all()
app = Flask(__name__)
CORS(app)
api = Api(app)

socketio = SocketIO(app)


@app.route('/lotto', defaults={'path': ''}, methods=['get'])
@app.route('/lotto/<path:path>')
def get_lotto_num(path):
    data = {
        "test": 123,
        "test2": 12345
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    #socketio.run(app, host='0.0.0.0', port=5000)
