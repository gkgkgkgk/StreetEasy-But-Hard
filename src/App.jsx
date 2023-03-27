import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.jsx'
import AboutPage from './pages/About/AboutPage'
import ListingPage from './pages/Listing/ListingPage'
import MapPage from './pages/Map/MapPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="listing" element={<ListingPage />} />
          <Route path="map" element={<MapPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
