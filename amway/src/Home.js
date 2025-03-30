// src/Home.js
import React from 'react';
import './css/Home.css';  // Importar los estilos CSS

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-image">
          <img src="/img/inicio.png" alt="Imagen Principal" />
        </div>
        <div className="home-text">
          <p>BIENVENIDO</p>
          <div className="home-small-image">
            <img src="/img/pe.png" alt="Imagen pequeña" />
          </div>
          <p>Cuida tu cuerpo y responderá tu mente</p>

          <div className="home-title">
            <h4>
              VIDA SALUD Y BELLEZA
              <br />
              <h5>EN TU DOMICILIO</h5>
            </h4>
          </div>

          {/* Agregar "Tratamientos Naturales" con borde negro */}
          <div className="treatment-box">
            <h2>Tratamientos Naturales</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
