// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';  // Importar el componente Navbar

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Agregar el Navbar aquí */}
      <h1>Bienvenido a mi página</h1>
      <p>Este es un proyecto básico de React con un Navbar responsivo.</p>
    </div>
  );
}

export default App;
