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
      <Link className="link" to="/"> Home </Link>
        <Link className="link" to="/cv" > Cv </Link>
        <Link className="link" to="/contacto"> Contacto </Link>
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
                <p className="nombre">Moises Alberto Rodriguez Aceves</p>
                <p className>Tras varios semestres en la carrera de produccion en multimedia he desarrollado diversoso conocimientos incluyendo animacion, ilustracion, programacion, entre otros. Mi fuerte se centra en la programacion y en el desarrollos de aplicaciones. </p>
                <p className="experiencia">Habilidades</p>
                <li>Manejo fluido del idioma ingles y español, asi como a nivel basico el italiano </li>
                <li>Habilidades para el desarrollo de video publicitario y marketing</li>
                <p className="experiencia">Experiencia laboral</p>
                <li> Desarrollo de inventario ganadero para empresa agricola en el año 2019</li>
                <li>Trabajo como contribullente en el desarrollo de una base de datos para una empresa local de quesos </li>
                

            </div>
        </div>
      </div>


     
    </div>
  );
}

export default Cv;
