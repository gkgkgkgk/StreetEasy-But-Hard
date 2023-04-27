# RUN WITH: python -m flask run
import flask
import pandas as pd
app = flask.Flask(__name__)
app.config["DEBUG"] = True

df = pd.read_csv('all_years_latlong_NTA2020.csv')
df.drop('Unnamed: 0', axis=1, inplace=True)

# Post request taking in json with fields nta and address to filter csv
@app.route('/data', methods=['POST'])
def home():
    input_json = flask.request.get_json(force=True)    
    filtered_df = df.loc[(df['NTAName'].str.contains(input_json['nta'], case=False)) & (df['address'].str.contains(input_json['address'], case=False))]
    
    return filtered_df.to_dict(orient='records')

if __name__ == "__main__":
    app.run()
    