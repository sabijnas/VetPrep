const Healthlog = () => {
  return (
    <div>
      <div className="healthlog-card">
        <div className="healthlog-row">
          <p className="">Magproblem</p>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p>2026-01-02</p>
        <div className="healthlog-under-row">
          <p className="">
            Ont i magen, ville inte äta sin frukost. I övrigt pigg.
          </p>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>

      <div className="healthlog-card">
        <div className="healthlog-row">
          <p className="">Hälta</p>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p>2026-01-20</p>
        <div className="healthlog-under-row">
          <p className="">
            Haltade på kvällspromenaden på höger bakben cirka 10 minuter, blev bättre under kvällen, ingen hälta dagen efter
          </p>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default Healthlog;
