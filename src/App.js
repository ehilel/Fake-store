import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import {Electronics, Jewelery} from './components';
import Electronics from './components/Electronics/Electronics';
import Jewelery from './components/Jewelery/Jewelery';
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Jewelery" element={<Jewelery />} />
      </Routes>
    </Router>
  );

}

export default App;
