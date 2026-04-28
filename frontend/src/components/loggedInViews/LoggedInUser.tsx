import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Statuslog from "./Statuslog";
import "../../css/LoggedInUser.css";
import Healthlog from "./Healthlog";
import AddToLog from "./AddToLog";

const LoggedInUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //Visa lägg till i logg-formulär
  const [showAddToLog, setShowAddToLog] = useState(false);
  const user =
    location.state || JSON.parse(sessionStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user) navigate("/LogIn");
  }, [user, navigate]);

  return (
    <div className="loggedin-wrapper">
      <section className="loggedin-hero">
        <span className="loggedin-badge">Min sida</span>
        <h1 className="headerLoggedIn">Välkommen {user?.name}</h1>
        <p className="paragraphLoggedIn">Statuslogg för {user?.pet}</p>
      </section>

      <Statuslog />

      <section className="log-info">
        <h3 className="healthlog-header">Hälsologg</h3>
        <div className="log-info-row">
          <p className="paragraphLoggedIn">Följ {user?.pet}s hälsa över tid</p>
          <div className="log-actions">
            <button className="log-action-btn" onClick={() => setShowAddToLog(true)}>Lägg till i logg</button>
            <button className="log-action-btn log-action-secondary">
              Exportera logg till pdf
            </button>
          </div>
        </div>
      </section>

      <Healthlog />

      {showAddToLog && (
        <div className="modal-backdrop" onClick={() => setShowAddToLog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddToLog/>
            <div className="modal-actions">
              <button className="modal-close-btn modal-close-btn--secondary" onClick={()=> setShowAddToLog(false)}>Avbryt</button>
              <button className="modal-close-btn" onClick={()=> setShowAddToLog(false)}>Spara</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
