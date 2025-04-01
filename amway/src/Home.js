// src/Home.js
import React from 'react';
import './css/Home.css';  // Importar los estilos CSS

const Home = () => {
  return (
    <div className="home">
      {/* Sección 1: Home principal */}
      <section className="home-section">
        <div className="home-content">
          <div className="home-image">
            <img src={`${process.env.PUBLIC_URL}/img/inicio.png`} alt="Foto" />

          </div>
          <div className="home-text">
            <p>BIENVENIDO</p>
            <div className="home-small-image">         
             <img src={`${process.env.PUBLIC_URL}/img/pe.png`} alt="Foto 1" />
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
      </section>

      {/* Sección 2: Nueva sección con fondo marrón claro */}
      <section className="home-section-two">
        <div className="home-section-two-content">
          {/* Imagen gigante a la izquierda */}
          <div className="home-section-two-image">
            <img src={`${process.env.PUBLIC_URL}/img/otro.png`} alt="Foto" />
          </div>

          {/* Título y texto a la derecha */}
          <div className="home-section-two-text">
            <h2>¿Quienes somos?</h2>
            <p>
              Te llevamos a casa lo que necesitas para que te sientas bien.<br />
              Como el tiempo es muy valioso y no lo debes perder, yendo y viniendo a un centro de belleza, y tu salud corporal, te llevamos a casa aquello que necesitas para tu cuidado y tu bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Nueva sección con imagen y texto a la derecha con enlaces */}
      <section className="home-section-three">
        <div className="home-section-three-content">
          {/* Imagen a la izquierda */}
          <div className="home-section-three-image">
            <img src={`${process.env.PUBLIC_URL}/img/estirar.png`} alt="Foto" />
            
          </div>

          {/* Texto a la derecha con enlaces */}
          <div className="home-section-three-text">
            <h2>
              <a href="#home">Menú de Servicios</a>
            </h2>
            <ul>
              <li><a href="#home">Tratamiento facial sónico</a></li>
              <li><a href="#home">Presoterapia</a></li>
              <li><a href="#home">Drenaje linfático</a></li>
              <li><a href="#home">Análisis bioeléctrico cuántico</a></li>
              <li><a href="#home">Tratamiento detox (Body Cleansing Program)</a></li>
              <li><a href="#home">Adelgazamiento sin ninguna dieta</a></li>
              <li><a href="#home">Tarifas tratamientos</a></li>
              <li><a href="#home">Tu tienda</a></li>
              <li><a href="#home">Contáctanos</a></li>
            </ul>

            {/* Imágenes en forma de "L" */}
            <div className="home-section-three-images-l">
              <div className="home-section-three-l-images">
                <img src={`${process.env.PUBLIC_URL}/img/11.png`} alt="Foto" />
                <img src={`${process.env.PUBLIC_URL}/img/13.png`} alt="Foto" />
                <img src={`${process.env.PUBLIC_URL}/img/1.png`} alt="Foto" />                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
