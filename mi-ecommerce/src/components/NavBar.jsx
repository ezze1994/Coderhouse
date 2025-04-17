import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="src/assets/comercio-electronico.png"
            alt="Logo"
            className="navbar-logo w-[50px] h-auto"
          />
        </Link>
      </div>

      {/* Navegación */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/category/ropa" className="text-gray-700 hover:text-blue-500">
            Ropa
          </Link>
        </li>
        <li>
          <Link to="/category/electro" className="text-gray-700 hover:text-blue-500">
            Electro
          </Link>
        </li>
        <li>
          <Link to="/category/accesorios" className="text-gray-700 hover:text-blue-500">
            Accesorios
          </Link>
        </li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
