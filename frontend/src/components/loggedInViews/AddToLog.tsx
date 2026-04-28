const AddToLog = () => {
    return (
        <form className="addlog-form">
            <div className="addlog-head">
                <h2 className="addlog-title">Ny hälsologg</h2>
                <p className="addlog-intro">Dokumentera ditt djurs hälsoinformation</p>
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-date">Datum</label>
                {/* Type = date visar en inbyggd kalender */}
                <input id="log-date" className="addlog-input" type="date" />
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-event">Typ av händelse</label>
                <input id="log-event" className="addlog-input" type="text" placeholder="t.ex. Ryggont, Hälta"/>
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-image">Infoga bild (valfritt)</label>
                <input id="log-image" className="addlog-input-file" type="file" accept="image/*" />
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-note">Anteckningar</label>
                <textarea id="log-note" className="addlog-textarea" placeholder="Skriv dina anteckningar här..." rows={4}></textarea>
            </div>
        </form>
    );
};

export default AddToLog