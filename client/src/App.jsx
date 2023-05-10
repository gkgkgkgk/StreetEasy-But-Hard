import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.jsx'
import AboutPage from './pages/About/AboutPage'
import MapPage from './pages/Map/MapPage'
import HomePage from './pages/Home/HomePage.jsx';

import './App.css'



function App() {
  const SERVER = "http://localhost:5000"
  const urlParams = new URLSearchParams(window.location.search);

  const [addrs, setAddrs] = useState([]);
  const [nta, setNta] = useState(urlParams.get('loc'));
  const [address, setAddress] = useState('');
  

  // get addresses from backend via get request
  useEffect(() => {
    console.log(nta);
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({nta:'MN0303', address })
    };
    fetch(SERVER + '/data', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAddrs(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapPage setNta={setNta} markers={addrs}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
