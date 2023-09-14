import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/Cocina">Cocina</Link>
      <Link to="/category/Habitacion">Habitación</Link>
      <Link to="/category/Living">Living</Link>
      <Link to="/category/Comedor">Comedor</Link>
      <Link to="/category/Baño">Baño</Link>
    </nav>
  );
}

export default Navbar;
