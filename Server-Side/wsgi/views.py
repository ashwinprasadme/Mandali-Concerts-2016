from flask import Flask,render_template
from flask.ext.cors import CORS

app=Flask(__name__)
CORS(app)
# app.config['PROPAGATE_EXCEPTIONS'] = True

@app.route('/evening_concerts')
def index():
    return """ [{
        "date": "April 1 | Sunday",
        "title": "Bombay Jayashree Ramanath",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 2 | Monday",
        "title": "Sanjay Subrahmanyan",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 3 | Tuesday",
        "title": "DR.K.J Yesudas",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }]
        """

@app.route('/junior_concerts')
def junior():
    return """ [{
        "date": "April 1 | Sunday",
        "title": "junior testing",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 2 | Monday",
        "title": "junior testing",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 3 | Tuesday",
        "title": "junior testing",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }]
        """

@app.route('/spiritual_concerts')
def Spiritual():
    return """ [{
        "date": "April 1 | Sunday",
        "title": "Spiritual testing",
        "artist": "Uttaradi mata",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 2 | Monday",
        "title": "Spiritual testing",
        "artist": "Uttaradi mata",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }, {
        "date": "April 3 | Tuesday",
        "title": "Spiritual testing",
        "artist": "Uttaradi mata",
        "image_small": "https://i.scdn.co/image/49ddb3c72d514b9764cd0e90eee2fe218cb9ae3b",
        "image_large": "https://i.scdn.co/image/021fe86098015008463597fbd1b40ea0aca3bb14"
        }]
        """
