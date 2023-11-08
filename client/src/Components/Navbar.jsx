import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? "collapsed" : ""}`}>
      <div className="logo">
        {/* <img src="../Images/reserve.png" className='logo-img' alt="rev" /> */}
        EcoReleaf
      </div>
      <ul className={`nav-list ${mobileMenuOpen ? "open" : ""}`}>
        <div >
          <li>
            <Link to="/" className="nav-elements">
              <i className="fa-solid fa-house "></i>
              <span>Home</span>
            
            </Link>
          </li>
        </div>
        <div >
          <li>
            <Link to="/signup" className="nav-elements">
              <i className="fa-solid fa-user-plus"></i>
              <span>Sign Up</span>
            </Link>
          </li>
        </div>
        <div >
          <li>
            <Link to="/login" className="nav-elements">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Login</span>
            </Link>
          </li>
        </div>
        <div >
          <li>
            <Link to="/UserProfile" className="nav-elements">
              <i className="fa-solid fa-circle-user"></i> 
              <span>Profile</span>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className="nav-elements">
              <i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span>
            </Link>
          </li>
        </div>
      </ul>
      <div
        className={`mobile-menu-button ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <i className="fa-solid fa-bars bar fa-2x"></i>
      </div>
    </nav>
  );
}

export default Navbar;
