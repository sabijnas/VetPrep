const Healthlog = () => {
  return (
    <div className="healthlog-list">
      <div className="healthlog-card">
        <div className="healthlog-row">
          <p className="healthlog-title">Magproblem</p>
          <i className="fa-solid fa-pen-to-square healthlog-action"></i>
        </div>
        <p className="healthlog-date">2026-01-02</p>
        <div className="healthlog-under-row">
          <p className="healthlog-note">
            Ont i magen, ville inte äta sin frukost. I övrigt pigg.
          </p>
          <i className="fa-regular fa-trash-can healthlog-action"></i>
        </div>
      </div>

      <div className="healthlog-card">
        <div className="healthlog-row">
          <p className="healthlog-title">Hälta</p>
          <i className="fa-solid fa-pen-to-square healthlog-action"></i>
        </div>
        <p className="healthlog-date">2026-01-20</p>
        <div className="healthlog-under-row">
          <p className="healthlog-note">
            Haltade på kvällspromenaden på höger bakben cirka 10 minuter, blev
            bättre under kvällen, ingen hälta dagen efter
          </p>
          <i className="fa-regular fa-trash-can healthlog-action"></i>
        </div>
      </div>
    </div>
  );
};

export default Healthlog;
