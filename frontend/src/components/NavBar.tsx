import { NavLink, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          VetPrep
        </NavLink>

        <button
          type="button"
          className={isOpen ? "hamburger-menu is-open" : "hamburger-menu"}
          aria-label="Öppna meny"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={isOpen ? "nav-links active" : "nav-links"}>
          <NavLink
            to="/"
            end
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Hem
          </NavLink>
          <NavLink
            to="/Hälsoråd"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Hälsoråd
          </NavLink>
          <NavLink
            to="/LäsMer"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Läs Mer
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/LoggedInUser"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Min sida
              </NavLink>
              <button
                className="nav-link loginBtn"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Logga ut
              </button>
            </>
          ) : (
            <NavLink
              to="/LogIn"
              className="nav-link loginBtn"
              onClick={() => setIsOpen(false)}
            >
              Logga In
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
