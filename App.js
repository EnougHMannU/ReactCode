import './cssfiles/App.css';
import Navbarr from './Navbarr.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Login from './Login';
import Datatable from './Datatable.js';
import Loginmodal from './Loginmodal.js';
// import Studentnew from './Studentnew.js';
// import { useState } from "react";





export default function App() {
const[lpanel,setLpanel]=useState(false);  

  useEffect(() => {
    setLpanel(true);
  }, []);

  return (
     <BrowserRouter>
     <Navbarr/>
      <Loginmodal panelor={lpanel} setLpanel={setLpanel}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/datatable" element={<Datatable/>} className=""/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
