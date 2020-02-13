import React from 'react';
import './App.css';
import inicio from './App';
import cv from './cv.js';
import { Link } from 'react-router-dom';
import foto from './foto.jpeg';


function Cv() {
  return (
    <div className="App">
      <div className="primer-div">
        <Link to="/"> Home </Link>
        <Link to="/cv" > cv </Link>
        <Link to="/contacto"> contacto </Link>
      </div>

      <div className="cuerpito">
        <div className="cuadrocv">
            <img className="fotito" src={foto}></img>
            <div className="infofoto">
            <p className>Nombre: Moises Alberto Rodriguez Aceves</p>
            <p className>Direccion: Nicolas coopernico #519 sur</p>
            <p className>Celular: 6444625737</p>
            <p className>Correo electronico: mrodrigueza98@gmail.com</p>
            <p className>Proyectos: https://github.com/moiss16</p>
            </div>

            <div className="restodecv">
                <p className>No se que poner aqui</p>

            </div>
        </div>
      </div>


     
    </div>
  );
}

export default Cv;
