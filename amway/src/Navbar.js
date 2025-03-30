// src/Navbar.js
import React, { useState } from 'react';
import './css/Navbar.css';  // Importar los estilos CSS

const Navbar = () => {
  // Estado para controlar si el menú está abierto en móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Mi Web</h1>
      </div>
      {/* Menú de navegación */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      {/* Icono de hamburguesa para móviles */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
