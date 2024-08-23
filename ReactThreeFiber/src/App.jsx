import { useState, Suspense } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, NavLink, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Educational from './Components/Educational';
import Satellite from './Components/Satellite';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import News from './Components/News';
import Visit from './Components/Visit';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/news" element={<News />} />
          <Route path="/visit" element={<Visit/>} />
          <Route path="/satellite" element={<Satellite />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
