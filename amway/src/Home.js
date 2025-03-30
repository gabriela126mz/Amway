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
    </div>
  );
};

export default Home;
