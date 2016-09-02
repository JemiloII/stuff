from flask import Flask

book_list = []

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
