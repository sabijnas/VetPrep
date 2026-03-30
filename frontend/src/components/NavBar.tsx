import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <p className="nav-logo">VetPrep</p>
      <div className="nav-links">
        <Link to="/">Affärsplan</Link>
        <Link to="/Projektidé">Projektidé</Link>
        <Link to="/LäsMer">Läs Mer</Link>
      </div>
    </nav>
  );
};

export default NavBar;
