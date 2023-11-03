import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'collapsed' : ''}`}>
      <div className="logo">EcoReleaf</div>
      <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
