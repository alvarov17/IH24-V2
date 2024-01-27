from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import requests
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
db = SQLAlchemy(app)
@app.route('/')
def index():
    return render_template('landing_page.html')
@app.route('/about')
def about():
    return render_template('aboutus.html')
@app.route('/yelp-test')
def yelp_default_test():
    url = "https://zotmeal-backend.vercel.app/api"

    querystring = {"location": "anteatery"}

    response = requests.request(
        "GET", url, params=querystring)

    return (jsonify(response.json()))


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

