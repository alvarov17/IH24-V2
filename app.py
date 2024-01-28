from flask import Flask, jsonify, request, render_template, session, redirect, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Set a secret key for session management
app.secret_key = 'your_secret_key'  # Change this to a strong, random secret key


def is_user_authenticated():
    print(str(session))
    return 'user_id' in session

@app.route('/')
def main_index():
    return render_template('index.html')

@app.route('/home')
def login_page():
    return render_template('landing_page.html')

@app.route('/about')
def about():
    return render_template('aboutus.html')
@app.route('/view')
def view():
    return render_template('view.html')
@app.route('/send')
def send():
    return render_template('send.html')
@app.route('/edit')
def edit():
    return render_template('edit.html')


if __name__ == '__main__':
    app.run(debug=True)
