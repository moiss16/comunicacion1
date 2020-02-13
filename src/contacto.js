import React from 'react';
import './App.css';
import inicio from './App';
import cv from './cv.js';
import { Link } from 'react-router-dom';
import insta from './insta.png';
import face from './face.png';
import twitter from './twitter.png';
import holi from './holi.png';

function Contacto() {
  return (
    <div className="App">
      <div className="primer-div">
      <Link className="link" to="/"> Home </Link>
        <Link className="link" to="/cv" > Cv </Link>
        <Link className="link" to="/contacto"> Contacto </Link>
      </div>

      <div className="cuerpitocontacto">
        <div className="cuadrocv1">
         <p className="info"> Correo: mrodrigueza98@gmail.com</p>
         <p className="info"> Celular: 6444625737 </p>
         <a href="http://instagram.com/moiss16">
         <img  className="insta a1" src={insta}/></a>
         <a href="http://facebook.com/moiss16">
         <img className="insta a3" src={face}/></a>
         <a href="http://twitter.com/moiss16">
         <img className="insta a2" src={twitter}/></a>
        </div>
      </div>

        <img className="holi" src={holi}/>

     
    </div>
  );
}

export default Contacto;
