# RUN WITH: python -m flask run
import flask
from flask import jsonify
from flask_cors import CORS
import pandas as pd
import json

app = flask.Flask(__name__)
CORS(app)

# Updated data with lattitude and longitude coordinates
df = pd.read_csv('all_years_latlong_NTA2020.csv')
df.drop('Unnamed: 0', axis=1, inplace=True)

# Data with notes to join on
old_df = pd.read_excel("housing.xlsx", sheet_name=["2022 CityFHEPS", "2021 (Post Lawsuit)", "2021 (Pre Lawsuit)", "2019 + 2020 (Pre Lawsuit)"])

# Combine old data
old_dfs = []
for key in old_df.keys():
    old_dfs.append(old_df[key][["address", "Notes"]])
old_df = pd.concat(old_dfs)

# Get first 4 words in each address (lowercase so we can match them)
old_df["address"] = old_df["address"].str.lower()
old_df["address"] = old_df["address"].str.split().str[:4].str.join(" ")
df["address"] = df["address"].str.lower()
df["address"] = df["address"].str.split().str[:4].str.join(" ")

# Merge dataframes and filter
df = df.merge(old_df, on="address")


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
    print(input_json['nta'])
    filtered_df = df.loc[(df['NTA2020'].str.contains(input_json['nta'], case=False))]
    filtered_df = filtered_df[(filtered_df["status"] == "Claim") | (filtered_df['status'] == "Pending")]

    return json.loads(filtered_df.to_json(orient='records'))

if __name__ == "__main__":
    app.run()
    