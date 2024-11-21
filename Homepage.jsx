
import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <><section className="bg-blue-100 h-screen flex items-center justify-center text-center py-20">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Asanaviveka</h1>
        <p className="text-xl text-gray-600 mt-4">We're glad you're here. Explore our services and offerings.</p>
        <Link to='/search'><button href='www.google.com' className="mt-6 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button></Link>
      </div>
    </section><div>
        <Footer />
      </div></>
  );
}

export default Homepage;
