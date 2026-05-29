import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Statuslog from "./Statuslog";
import "../../css/LoggedInUser.css";
import Healthlog from "./Healthlog";
import AddToLog from "./AddToLog";
import exportToPDF from "./ExportToPDF";
import { useAuth } from "../../context/AuthContext";

const LoggedInUser = () => {
  const navigate = useNavigate();
  const [showAddToLog, setShowAddToLog] = useState(false);
  const [logRefreshKey, setLogRefreshKey] = useState(0);
  const { user } = useAuth();
 
  useEffect(() => {
    if (!user) navigate("/LogIn");
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleLogSaved = () => {
    setShowAddToLog(false);
    setLogRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="loggedin-wrapper">
      <section className="loggedin-hero">
        <span className="loggedin-badge">Min sida</span>
        <h1 className="headerLoggedIn">Välkommen {user.userName}</h1>
        <p className="paragraphLoggedIn">Statuslogg för {user.petName}</p>
      </section>

      <Statuslog />

      <section className="log-info">
        <h3 className="healthlog-header">Hälsologg</h3>
        <div className="log-info-row">
          <p className="paragraphLoggedIn">Hälsologg för {user.petName}</p>
          <div className="log-actions">
            <button className="log-action-btn" onClick={() => setShowAddToLog(true)}>Lägg till i logg</button>
            <button className="log-action-btn log-action-secondary" onClick={exportToPDF}>
              Exportera logg till pdf
            </button>
          </div>
        </div>
      </section>

      <Healthlog userId={user.userId} refreshKey={logRefreshKey} />

      {showAddToLog && (
        <div className="modal-backdrop" onClick={() => setShowAddToLog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddToLog userId={user.userId} onSaved={handleLogSaved} />
            <div className="modal-actions">
              <button className="modal-close-btn modal-close-btn--secondary" onClick={()=> setShowAddToLog(false)}>Avbryt</button>
              <button className="modal-close-btn" type="submit" form="addlog-form">Spara</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
