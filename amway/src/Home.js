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
      </section>

      {/* Sección 2: Nueva sección con fondo marrón claro */}
      <section className="home-section-two">
        <div className="home-section-two-content">
          {/* Imagen gigante a la izquierda */}
          <div className="home-section-two-image">
            <img src="/img/otro.png" alt="Imagen gigante" />
          </div>

          {/* Título y texto a la derecha */}
          <div className="home-section-two-text">
            <h2>¿Quienes somos?</h2>
            <p>
            Te llevamos a casa lo que necesitas para que te sientas bien<br></br>
            Como el tiempo es muy valioso y no lo debes perder, yendo y viniendo a un centro de belleza Y tu salud corporal, te llevamos a casa aquello que necesitas para tu cuidado y tu bienestar
            </p>
          </div>
        </div>
      </section>
      
    {/* Sección 2: Nueva sección con imagen y texto a la derecha con enlaces */}
    <section className="home-section-three">
    <div className="home-section-three-content">
        {/* Imagen a la izquierda */}
        <div className="home-section-three-image">
        <img src="/img/estirar.png" alt="Imagen izquierda" />
        </div>

        {/* Texto a la derecha con enlaces */}
        <div className="home-section-three-text">
        <h2>
            <a href="#home">menú de servicios</a>
        </h2>
        
        <li>Tratamiento facial sónico</li>
        <li>Presoterapia</li>
        <li>DRENAJE LINFÁTICO</li>
        <li>ANÁLISIS BIOELÉCTRICO CUÁNTICO</li>
        <li>TRastamiento detox (Body Cleansing Program limpieza interior)</li>
        <li>Adelgazamiento SIN NINGUNA DIETA</li>
        <li>Tarifas tratamientos</li>
        <li>TU TIENDA</li>
        <li>contactanos</li>

    {/* Imágenes en forma de "L" */}
    <div className="home-section-three-images-l">
        <div className="home-section-three-l-images">
        <img src="/img/11.png" alt="Imagen pequeña 1" />
        <img src="/img/13.png" alt="Imagen pequeña 2" />
        <img src="/img/1.png" alt="Imagen pequeña 2" />
        </div>
        </div>
    </div>
    </div>
    </section>


    </div>
  );
};

export default Home;
