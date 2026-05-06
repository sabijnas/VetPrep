import "../../css/LoggedInUser.css";

const Statuslog = () => {
  return (
    <div className="statuslog-wrapper">
      <div className="statuslog-card statuslog-card--visit">
        <div className="statuslog-row">
          <p className="p-row">Senaste besöket</p>
          <div className="status-icon status-icon--visit">
            <i className="fa-regular fa-calendar"></i>
          </div>
        </div>
        <p className="p-info">31 dagar sedan</p>
      </div>

      <div className="statuslog-card statuslog-card--weight">
        <div className="statuslog-row">
          <p className="p-row">Akutell vikt</p>
          <div className="status-icon status-icon--weight">
            <i className="fa-solid fa-dumbbell"></i>
          </div>
        </div>
        <p className="p-info">7 kg</p>
      </div>

      <div className="statuslog-card statuslog-card--activity">
        <div className="statuslog-row">
          <p className="p-row">Aktivitetsnivå</p>
          <div className="status-icon status-icon--activity">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
        </div>
        <p className="p-info">Medel</p>
      </div>

      <div className="statuslog-card statuslog-card--health">
        <div className="statuslog-row">
          <p className="p-row">Hälsostatus</p>
          <div className="status-icon status-icon--health">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <p className="p-info">Utmärkt</p>
      </div>
    </div>
  );
};

export default Statuslog;
