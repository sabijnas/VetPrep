import "../../css/NavViews.css";

const VeternaryExam = () => {
    const examItems = [
        "Ras, ålder, kön",
        "Aktuell kroppstemperatur (även djurets normala temperatur)",
        "Allmänt beteende (t.ex slö, normal, orolig)",
        "Andning (normal eller onormal",
        "Pälsen",
        "Aptiten",
        "Onormal dregling",
        "Kräkningar",
        "Vattenkonsumtion",
        "Avföring",
        "Urin",
        "Tandstatus",
        "Dålig lukt från munhåla eller öron",
        "Eventuell medicinering"
    ]
    
    return (    
    <div className="healthadvice-card">
        <h3 className="healthadivce-header">Inför veterinärkollen</h3>
        <p className="healthadvice-paragraph">När du är i kontakt med veterinär bör du kunna lämna besked om</p>
        <ul className="healthadvice-list">
            {examItems.map((item, index) => (
                <li key={index} className="healthadivce-li">{item}</li>
            ))}
        </ul>
    </div>
    )
}

export default VeternaryExam