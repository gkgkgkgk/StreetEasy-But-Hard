import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.jsx'
import AboutPage from './pages/About/AboutPage'
import MapPage from './pages/Map/MapPage'
import HomePage from './pages/Home/HomePage.jsx';
import './App.css'



const App = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const [addrs, setAddrs] = useState([]);
  const [center, setCenter] = useState([40.7831, -73.9712]);
  // const [center, setCenter] = useState(null);
  const [address, setAddress] = useState('');
  const [nta, setNta] = useState(urlParams.get('loc') ? urlParams.get('loc') : '');
  // get addresses from backend via get request
  useEffect(() => {
    let url = process.env.RAILS_ENV.VITE_APP_SERVER + '/data';
    console.log(url);
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({nta, address, "key": "testkeycooper"})
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      let totalLat = 0
      let totalLng = 0
      data.map(( obj, i ) => totalLat+=obj.lat);
      data.map(( obj, i ) => totalLng+=obj.long);
      setCenter([totalLat / data.length, totalLng / data.length])
      setAddrs(data);
    });
  }, [nta]);

  return (
    <BrowserRouter>
      <Header setNta={setNta}/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage setNta={setNta}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapPage setNta={setNta} markers={addrs} center={center}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
