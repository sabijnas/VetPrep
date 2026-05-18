import React, { useState } from "react";
import ErrorAlert from "../ErrorAlert";

type AddToLogProps = {
    userId: number;
    onSaved?: () => void;
}

const AddToLog = ({ userId, onSaved }: AddToLogProps) => {
    const [date, setDate] = useState("");
    const [event, setEvent] = useState("");
    const [note, setNote] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleSumbit = async(e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("userId", String(userId));
        formData.append("date", date);
        formData.append("event", event);
        formData.append("note", note);
        if(image) formData.append("image", image);

        const res = await fetch("http://localhost:5229/api/healthlogs", {
            method: "POST",
            body: formData
        });
        
        if (!res.ok) {
            setError("Kunde inte skapa logg");
            return;
        }

        onSaved?.();
    }
    return (
        <form className="addlog-form" id="addlog-form" onSubmit={handleSumbit}>
            <div className="addlog-head">
                <ErrorAlert message={error}/>
                <h2 className="addlog-title">Ny hälsologg</h2>
                <p className="addlog-intro">Dokumentera ditt djurs hälsoinformation</p>
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-date">Datum</label>
                <input id="log-date" className="addlog-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-event">Typ av händelse</label>
                <input id="log-event" className="addlog-input" type="text" placeholder="t.ex. Ryggont, Hälta" value={event} onChange={(e) => setEvent(e.target.value)}/>
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-image">Infoga bild (valfritt)</label>
                <input id="log-image" className="addlog-input-file" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)}/>
            </div>

            <div className="addlog-field">
                <label className="addlog-label" htmlFor="log-note">Anteckningar</label>
                <textarea id="log-note" className="addlog-textarea" placeholder="Skriv dina anteckningar här..." rows={4} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </div>
        </form>
    );
};

export default AddToLog