import React, { useState } from 'react';
import Footer from './Footer';

const SearchTrain = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    console.log('Searching trains from', from, 'to', destination);
  };

  return (
    <><div className="relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* Background Image */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/trainbg.jpg)' }}
          ></div>
          <div className=" inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl backdrop-blur-md">
                  <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Railway Search</h1>

                  <div className="mb-5">
                      <label className="block text-gray-700 font-medium mb-1">From</label>
                      <input
                          type="text"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter starting location" />
                  </div>

                  <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-1">Destination</label>
                      <input
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter destination" />
                  </div>

                  <button
                      onClick={handleSearch}
                      className="w-full bg-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-600"
                  >
                      Search Trains
                  </button>
              </div>
          </div>
      </div>
      <div>
        <Footer/></div></>
  );
};

export default SearchTrain;
