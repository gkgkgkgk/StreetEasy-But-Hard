import flask
import pandas as pd
app = flask.Flask(__name__)
app.config["DEBUG"] = True

df = pd.read_csv('all_years_latlong_NTA2020.csv')
df.drop('Unnamed: 0', axis=1, inplace=True)

@app.route('/get/<nta>/<address>', methods=['GET'])
def home(nta, address):
    if nta == "all":
        nta = ""
    if address == "all":
        address = ""
        
    filtered_df = df.loc[(df['NTAName'].str.contains(nta)) & (df['address'].str.contains(address))]
    #print(filtered_df.head(5))
    
    return filtered_df.to_dict(orient='records')

if __name__ == "__main__":
    app.run()