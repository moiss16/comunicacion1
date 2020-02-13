import React from 'react';
import logo from './Comp1.mp4';
import './App.css';
import cv from './cv.js';
import App1 from './App.js';
import { Link } from 'react-router-dom';




function Principal() {
  return (
    <div className="App">
      <div className="primer-div">
        <Link to="/"> Home </Link>
        <Link to="/cv" > cv </Link>
        <Link to="/contacto"> contacto </Link>
      </div>
     <video src={logo} className="fondo-mois" alt="logo" loop autoPlay />


     
    </div>
  );
}

export default Principal;