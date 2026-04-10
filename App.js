import './cssfiles/App.css';
import Navbarr from './Navbarr.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Sdatatable from './StudentComponent/Sdatatable.js';
import Cdatatable from './CourseComponent/Cdatatable.js';
import Tdatatable from './TeacherComponent/Tdatatable.js';
import Loginmodal from './Loginmodal.js';

export default function App() {

  const [lpanel, setLpanel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      setLpanel(false);
    } else {
      setIsLoggedIn(false);
      setLpanel(true); // force login
    }
  }, []);

  return (
    <BrowserRouter>

      <Navbarr 
        openLogin={() => setLpanel(true)} 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Loginmodal 
        panelor={lpanel} 
        setLpanel={setLpanel}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* ✅ Protected Routes */}
      {
        isLoggedIn && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sdatatable" element={<Sdatatable/>}/>
              <Route path="/cdatatable" element={<Cdatatable/>}/>
              <Route path="/tdatatable" element={<Tdatatable/>}/>
            </Routes>

            <Footer />
          </>
        )
      }

    </BrowserRouter>
  );
}