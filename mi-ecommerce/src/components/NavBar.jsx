import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="navbar-brand">
        <img
          src="./assets/comercio-electronico.png"
          alt="Logo"
          className="navbar-logo w-24 h-auto" // Ajusta el tamaño del logo aquí
        />
      </div>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Inicio</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Productos</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
