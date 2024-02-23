from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from .utils import total_tax, percent

import os


def create_app(test_config=None):
    '''
    Initiates the Flask Application.
    Initializes CORS for app communication.

    '''
    app = Flask(__name__)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    all_words = {}

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/get_tax', methods=['POST'])
    @cross_origin()
    def get_tax():
        '''
        Returns the tax
        '''
        income = request.get_json()['income']
        amount_of_children = request.get_json()['amount_of_children']
        marital_status = request.get_json()['marital_status']
        debt = request.get_json()['debt']
        savings = request.get_json()['savings']

        tax = total_tax(income, savings, debt, amount_of_children, marital_status)
        percentage_tax = percent(tax, income)

        return jsonify({"tax": tax, "taxPercentage": percentage_tax, "restPercentage": 100 - percentage_tax})

    return app
