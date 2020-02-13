import React from 'react';
import logo from './fondoje.mp4';
import './App.css';
import cv from './cv.js';
import App1 from './App.js';
import { Link } from 'react-router-dom';




function Principal() {
  return (
    <div className="App">
      <div className="primer-div">
        <Link className="link" to="/"> Home </Link>
        <Link className="link" to="/cv" > Cv </Link>
        <Link className="link" to="/contacto"> Contacto </Link>
      </div>
     <video src={logo} className="fondo-mois" alt="logo" loop autoPlay />


     
    </div>
  );
}

export default Principal;