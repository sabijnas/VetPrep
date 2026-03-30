import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Affärsplan</Link>
      <Link to="/Projektidé">Projektidé</Link>
      <Link to="/LäsMer">Läs Mer</Link>
    </nav>
  );
};

export default NavBar;
