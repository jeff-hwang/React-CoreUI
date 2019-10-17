from flask import Flask, jsonify, request, session
from flask_socketio import SocketIO, emit
import gevent.monkey
import requests
import logging as logger
import json
gevent.monkey.patch_all()
app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/lotto', defaults={'path': ''}, methods=['get'])
@app.route('/lotto/<path:path>')
def get_lotto_num(path):
    res = requests.get("http://localhost:5000/lotto/{}".format(str(path)))
    res = eval(res.content)
    return jsonify(res)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5001)
