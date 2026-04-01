import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { useState } from "react";

const NavBar = () => {
  /* isOpen = om menyn är öppen true/false 
     setIsOpen = funktion för att ändra värdet */
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="navbar">
      <p className="nav-logo">VetPrep</p>
      
      {/* Vid klick växlas true/false */}
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>≡</div>
      
      {/* isOpen = true, lägg till active (menyn visas på mindre skärmar)
          om false = nav-links visas */}
      <div className={isOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setIsOpen(false)}>Hem</Link>
        <Link to="/Affärsplan" onClick={() => setIsOpen(false)}>Affärsplan</Link>
        <Link to="/Projektidé" onClick={() => setIsOpen(false)}>Projektidé</Link>
        <Link to="/LäsMer" onClick={() => setIsOpen(false)}>Läs Mer</Link>
      </div>
    </nav>
  );
};

export default NavBar;
