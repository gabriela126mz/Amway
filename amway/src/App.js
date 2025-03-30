// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';  // Importar el componente Navbar
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Agregar el Navbar aquí */}
      <Home /> 
    
    </div>
  );
}

export default App;
