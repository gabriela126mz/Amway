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
  {/* Sección 4: Imágenes en forma de "L" con texto a la derecha */}
      {/* Sección 4: Modo escritorio queda igual */}
      <section className="home-section-four">
        <div className="home-section-four-content">
          {/* Imagen cuadrada grande */}
          <div className="home-section-four-left">
            <img className="square-image" src={`${process.env.PUBLIC_URL}/img/14.png`} alt="Foto" />
          </div>

          {/* Texto alineado a la izquierda */}
          <div className="home-section-four-text">
            <h2><a href="#home">Tratamiento facial sónico</a></h2>
            <h3>con Dermasonic:</h3>
            <p>Dispositivo de limpieza facial sónico que utiliza vibraciones y pulsaciones ultrasónicas para limpiar profundamente la piel, eliminar impurezas, manchas, exceso de aceite y células muertas. Mejora la apariencia de los poros, reduce líneas finas, arrugas, ojeras y bolsas, aumentando la absorción de los tratamientos faciales un 99%.</p>
            <p>Los resultados se notan en el momento.</p>
          </div>
        </div>

        {/* Imagen horizontal grande debajo */}
        <div className="home-section-four-bottom">
          <img className="wide-image" src={`${process.env.PUBLIC_URL}/img/12.png`} alt="Foto" />
        </div>
      </section>
      {/* Sección 5: Imagen a pantalla completa */}
      <section className="home-section-five">
        <img className="full-width-image" src={`${process.env.PUBLIC_URL}/img/captura.png`} alt="Imagen Completa" />
      </section>
    {/* Sección 6: Título central, subtítulo a la izquierda, texto más grande y una imagen más pequeña */}
    <section className="home-section-six">
      <h2 className="home-section-six-title">TÉCNICA DE PRESOTERAPIA</h2>

      <div className="home-section-six-content">
        {/* Texto a la izquierda más compacto */}
        <div className="home-section-six-text">
          <h3>PRESOTERAPIA</h3>
          <p>
            Es un tratamiento terapéutico no invasivo que utiliza dispositivos especiales para aplicar presión controlada en diferentes partes del cuerpo, como piernas, brazos y abdomen. Su objetivo es mejorar la circulación sanguínea y el drenaje linfático, reduciendo la retención de líquidos, aliviando la hinchazón y mejorando la apariencia de la piel y celulitis.
          </p>
          <p>
            Se realiza mediante botas, mangas o fajas inflables que se ajustan al cuerpo. Estas prendas se inflan y desinflan secuencialmente, simulando un masaje que favorece el flujo de sangre y líquidos acumulados hacia los ganglios linfáticos.
          </p>
          <h4>BENEFICIOS:</h4>
          <ul>
            <li>Reducción de la retención de líquidos: Ayuda a eliminar el exceso de líquidos y toxinas, ideal para personas con edemas.</li>
            <li>Mejora de la circulación sanguínea: Estimula el flujo sanguíneo, muy beneficioso para quienes tienen mala circulación o piernas cansadas.</li>
            <li>Pérdida de peso: Contribuye a la reducción del volumen corporal y, junto con un plan de nutrición adecuado, favorece la pérdida de peso.</li>
          </ul>
        </div>

        {/* Imagen más pequeña a la derecha */}
        <div className="home-section-six-image">
          <img src={`${process.env.PUBLIC_URL}/img/21.png`} alt="Imagen Derecha" />
        </div>
      </div>
    </section>
      {/* Seccion 7 */}
      <section className="home-section-seven">
        <h2 className="home-section-seven-title">TÉCNICA DE PRESOTERAPIA</h2>

        <div className="home-section-seven-images">
          <img className="image-left" src={`${process.env.PUBLIC_URL}/img/v1.png`} alt="Imagen Izquierda" />
          <img className="image-right" src={`${process.env.PUBLIC_URL}/img/i1.png`} alt="Imagen Derecha" />
        </div>

        <div className="home-section-seven-text-container">
          <h3 className="home-section-seven-subtitle">PRESOTERAPIA</h3>
          <p className="home-section-seven-text">
          La presoterapia puede ayudar a mejorar la circulación, reducir la retención de líquidos y aliviar la sensación de piernas cansadas.
          <br></br>
          Además de los beneficios mencionados, la presoterapia también puede ayudar a reducir la celulitis, mejorar la tonificación de la piel y aliviar el dolor muscular.
          </p>
        </div>
      </section>

    {/* Seccion 8 */}
    <section className="home-section-eight">
      <div className="home-section-eight-content">
        {/* Columna izquierda con dos imágenes cuadradas (una debajo de la otra) */}
        <div className="home-section-eight-left">
          <img className="square-image" src={`${process.env.PUBLIC_URL}/img/i2.png`} alt="Imagen Cuadrada 1" />
          <img className="square-image" src={`${process.env.PUBLIC_URL}/img/i3.png`} alt="Imagen Cuadrada 2" />
        </div>

        {/* Columna derecha con título y una imagen grande rectangular debajo */}
        <div className="home-section-eight-right">
          <h2 className="home-section-eight-title">TÉCNICA DE DRENAJE LINFÁTICO POR PRESOTERAPIA</h2>
          <img className="wide-image" src={`${process.env.PUBLIC_URL}/img/v2.png`} alt="Imagen Rectangular" />
        </div>
      </div>
    </section>


    {/* Seccion 9 */}
    <section className="home-section-nine">
        <div className="home-section-nine-content">
          
          {/* Columna izquierda: Título y Párrafo */}
          <div className="home-section-nine-left">
            <h2 className="home-section-nine-title">ANÁLISIS BIOELÉCTRICO CUÁNTICO</h2>
            <p className="home-section-nine-text">
            El analizador de resonancia magnética cuántica, es una innovación de alta tecnología que combina lo mejor de la medicina, la bioinformática, la ingeniería eléctrica y otras ciencias.<br></br>

            Aplicando el dispositivo cuántico como base teórica, este avanzado equipo electrónico recoge el débil campo magnético de las células humanas para su análisis científico, analizando y determinando así a una persona' estado de salud y principales problemas y la formulación de recomendaciones estándar de prevención.<br></br>

            es un complemento que, junto con pruebas médicas tradicionales que ya tengamos, nos permite obtener una visión global de nuestro estado de salud además de obtener información rápida sobre aspectos de nuestro bienestar básicos. La base de su funcionamiento son las señales de las ondas electromagnéticas que nuestro cuerpo emite constantemente y que son distintas dependiendo de si tenemos un buen estado de salud o no.<br></br>

            Los beneficios de hacerse un test bio- eléctrico son múltiples, pero sobre todo podemos destacar la obtención de información de nuestro estado de salud general de forma rápida e indolora, podemos predecir anomalías que no presentan síntomas y nos permite evaluar si los tratamientos y las terapias seguidas están dando los resultados esperados.<br></br>
            </p>
          </div>

          {/* Columna derecha: Imagen + Título + Lista */}
          <div className="home-section-nine-right">
            <img className="home-section-nine-image" src={`${process.env.PUBLIC_URL}/img/i4.png`} alt="Imagen Derecha" />
            <h3 className="home-section-nine-subtitle">TIPOS DE ANÁLISIS</h3>
            <ul className="home-section-nine-list">
              <li>• Test de tóxicos del organismo</li>
              <li>• Estado de nuestra salud cardiovascular y cerebrovascular</li>
              <li>• Niveles de azúcar en sangre</li>
              <li>• Niveles de vitaminas y minerales</li>
              <li>• Densidad ósea</li>
              <li>• Análisis detallado de órganos</li>
            </ul>
          </div>

        </div>
      </section>





    </div>
  );
};

export default Home;
