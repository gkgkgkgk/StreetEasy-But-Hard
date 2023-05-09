# RUN WITH: python -m flask run
import flask
from flask import jsonify
from flask_cors import CORS
import pandas as pd
import json

app = flask.Flask(__name__)
CORS(app)
df = pd.read_csv('all_years_latlong_NTA2020.csv')
df.drop('Unnamed: 0', axis=1, inplace=True)

def _build_cors_preflight_response():
    response = flask.make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

# Post request taking in json with fields nta and address to filter csv
@app.route('/data', methods=['POST', 'OPTIONS'])
def home():
    if flask.request.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    input_json = flask.request.get_json(force=True)
    filtered_df = df.loc[(df['NTAName'].str.contains(input_json['nta'], case=False)) \
                          & (df['address'].str.contains(input_json['address'], case=False))]
    filtered_df = filtered_df.loc[(filtered_df["status"] == "Claim") | (filtered_df['status'] == "Pending")]

    return json.loads(filtered_df.to_json(orient='records'))

if __name__ == "__main__":
    app.run()
    