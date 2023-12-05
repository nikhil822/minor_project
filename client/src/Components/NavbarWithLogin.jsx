import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function NavbarWithLogin() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <nav className={`navbar ${mobileMenuOpen ? "collapsed" : ""}`}>
      <div className="logo">
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
            <Link to="/UserProfile" className="nav-elements">
              <i className="fa-solid fa-circle-user"></i> 
              <span >Profile</span>
            </Link>
          </li>
        </div>
        <div>
          <li className="nav-elements">
              <i className="fa-solid fa-right-from-bracket"></i> <span onClick={handleLogout}>Logout</span>
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

export default NavbarWithLogin;
