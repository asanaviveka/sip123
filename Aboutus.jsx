import React from 'react';
import Footer from './Footer'
import { Outlet, Link } from "react-router-dom";
function Aboutus() {
  return (
    <><div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to our Railway Website! We are dedicated to providing you with the most reliable and up-to-date information on train schedules, seat availability, and railway services.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Our mission is to make railway travel easier and more accessible for everyone by offering a simple and user-friendly platform for checking train seat vacancies and related services.
      </p>
      <p className="text-gray-700 text-lg">
        Whether you're planning a quick trip or a long journey, our goal is to ensure you have the information you need for a comfortable and enjoyable experience.
      </p>
    </div>
    <div><Footer />
    </div></>
    
  )
}

export default Aboutus;
