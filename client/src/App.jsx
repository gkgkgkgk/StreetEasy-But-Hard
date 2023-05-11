import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.jsx'
import AboutPage from './pages/About/AboutPage'
import MapPage from './pages/Map/MapPage'
import HomePage from './pages/Home/HomePage.jsx';
import ntaCodes from './components/ntaCodes.jsx'
import './App.css'



const App = () => {
  const SERVER = "http://localhost:5000"
  const urlParams = new URLSearchParams(window.location.search);

  const [addrs, setAddrs] = useState([]);
  const [center, setCenter] = useState([40.7831, -73.9712]);
  // const [center, setCenter] = useState(null);
  const [address, setAddress] = useState('');
  const [nta, setNta] = useState(urlParams.get('loc') ? urlParams.get('loc') : '');
  // get addresses from backend via get request
  useEffect(() => {
    // console.log(nta)

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({nta, address })
    };
    fetch(SERVER + '/data', requestOptions)
    .then(response => response.json())
    .then(data => {
      // console.log(nta)
      // console.log(data)
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
      <Header />
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
