import "./cssfiles/Footer.css";
import {Link} from 'react-router-dom';
import softechlogo from './pictures/softechlogo.png';
import Image from 'react-bootstrap/Image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <Link to="/home"><Image src={softechlogo} alt="softechlogo" className="imglogo"></Image></Link>
          <p>Building modern & scalable web solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link  to="/">Home</Link>
          <Link  to="/about">About</Link>
          <Link  to="/contact">Contact</Link>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SOFTECH. All rights reserved.
      </div>
    </footer>
  );
}
