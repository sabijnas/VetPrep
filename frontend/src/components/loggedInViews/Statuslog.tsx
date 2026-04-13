import "../../css/LoggedInUser.css"

const Statuslog = () => {
  return (
    <div className="statuslog-wrapper">
      <div className="statuslog-card">
        <p>Senaste besöket</p>
        <p>31 dagar sedan</p>
      </div>

      <div className="statuslog-card">
        <p>Akutell vikt</p>
        <p>7 kg</p>
      </div>

      <div className="statuslog-card">
        <p>Aktivitetsnivå</p>
        <p>Medel</p>
      </div>

      <div className="statuslog-card">
        <p>Hälsostatus</p>
        <p>Utmärkt</p>
      </div>
    </div>
  );
};

export default Statuslog;
