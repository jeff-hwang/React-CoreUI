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
#socketio = SocketIO(app)


@app.route('/lotto', defaults={'path': ''}, methods=['get'])
@app.route('/lotto/<path:path>')
def get_lotto_num(path):
    req = requests.get(
        "http://arti-node-2.default-subdomain:5000/lotto/{}".format(str(path)))
    res = eval(req.content)
    return jsonify(res)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
    #socketio.run(app, host='0.0.0.0', port=5001)
