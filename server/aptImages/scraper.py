import requests

# List of latitudes and longitudes
lat_lng_list = [
    # Add more latitudes and longitudes here...
]

# API Key
api_key = 'AIzaSyDrsOmKC416knxK3Gzhc7OJ9qCxnnARzMI'

# Base URL for the Street View API
base_url = 'https://maps.googleapis.com/maps/api/streetview'

# Folder to save the images
folder_path = 'images/'

# Iterate over latitudes and longitudes
for lat, lng in lat_lng_list:
    # Construct the API request URL
    url = f"{base_url}?size=800x400&location={lat},{lng}&fov=80&heading=70&pitch=0&key={api_key}"

    # Send GET request to the API
    response = requests.get(url)

    # Generate the file name
    file_name = f"{lat}_{lng}.jpeg"

    # Save the image to the folder
    with open(folder_path + file_name, 'wb') as file:
        file.write(response.content)

    print(f"Image saved: {file_name}")