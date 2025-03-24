import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <h1 className="text-xl font-bold">Mi Tienda</h1>
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
