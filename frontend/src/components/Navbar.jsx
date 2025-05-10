import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import myImage from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // toggle sidebar
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const adminEmails = ["abc@gmail.com", "def@gmail.com"];

  return (
    <>
      {/* Hamburger only on mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar Navigation */}
      <nav className={menuOpen ? "mobile-open" : ""}>
        <ul>
          <img src={myImage} alt="logo" />
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          {!user ? (
            <>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
              <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
              {adminEmails.includes(user.email) && (
                <li><Link to="/add-property" onClick={() => setMenuOpen(false)}>Add Property</Link></li>
              )}
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
