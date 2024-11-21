import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './componenets/Homepage';
import Signin from './componenets/Signin'; 
import Navbar from './componenets/Navbar';
import Aboutus from './componenets/Aboutus';
import ContactUs from './componenets/ContactUs';
import SearchTrain from './componenets/SearchTrain';

function App() {
  return (
    <>
     <BrowserRouter future={{ v7_startTransition: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/search" element={<SearchTrain />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
