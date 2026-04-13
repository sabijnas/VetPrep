import { Link, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
import "../css/Login.css";
import { useState } from "react";

const NavBar = () => {
  /* isOpen = om menyn är öppen true/false 
     setIsOpen = funktion för att ändra värdet */
  const [isOpen, setIsOpen] = useState(false);

  const storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <p className="nav-logo">VetPrep</p>

      {/* Vid klick växlas true/false */}
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        ≡
      </div>

      {/* isOpen = true, lägg till active (menyn visas på mindre skärmar)
          om false = nav-links visas */}
      <div className={isOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Hem
        </Link>
        <Link to="/Hälsoråd" onClick={() => setIsOpen(false)}>
          Hälsoråd
        </Link>
        <Link to="/LäsMer" onClick={() => setIsOpen(false)}>
          Läs Mer
        </Link>
        {storedUser ? (
          <button
            className="loginBtn"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            Logga ut
          </button>
        ) : (
          <Link
            to="/Login"
            className="loginBtn"
            onClick={() => setIsOpen(false)}
          >
            Logga In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
