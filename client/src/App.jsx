import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.jsx'
import AboutPage from './pages/About/AboutPage'
import MapPage from './pages/Map/MapPage'
import HomePage from './pages/Home/HomePage.jsx';

import './App.css'



function App() {
  const SERVER = "http://localhost:5000"

  const [addrs, setAddrs] = useState([]);
  const [nta, setNta] = useState('');
  const [address, setAddress] = useState('');
  
  // get addresses from backend via get request
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({nta, address })
    };
    fetch(SERVER + '/data', requestOptions)
    .then(response => response.json())
    .then(data => {
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
          <Route path="/map" element={<MapPage markers={addrs}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
