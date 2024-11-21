import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./images/trainlogo1.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
           Asanaviveka
          </span>
        </a>
        <div className="flex space-x-6">
        <Link to='/search' className="text-grey-600 font-semibold hover:text-indigo-500">Search</Link>
        <Link to='/' className="text-grey-600 font-semibold hover:text-indigo-500">Home</Link>
         <Link to="/about" className="text-grey-600 font-semibold hover:text-indigo-500">About</Link>
         
         <Link to="/contact" className="text-grey-600 font-semibold hover:text-indigo-500">Contact</Link>
         <Link to="/signin" className="text-grey-600 font-semibold hover:text-indigo-500">Signin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
