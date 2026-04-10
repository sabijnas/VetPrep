import "../../css/NavViews.css";
import bandage from "../../assets/bandage.png"

const WoundCare = () => {
    const woundCareItems = [
        "Tvätta sår med mild tvål och vatten, om du inte har sårtvättmedel",
        "Undvik pulver och salva i färska sår - rengör bara",
        "Kontrollera såret så inga sårfickor har bildats",
        "Lägg eventuellt ett luftigt bandage, luft krävs för att såret ska läka",
        "Låt inte djuret slicka på såret, andvänd krage"
    ]
    return (
    <div className="healthadvice-card">
        <h3 className="healthadivce-header">Behandling sårskador</h3>
        <p className="healthadvice-paragraph">Allmäna råd vid sårskador</p>
        <ul className="healthadvice-list">
            {woundCareItems.map((item, index) => (
                <li key={index} className="healthadivce-li">{item}</li>
            ))}
        </ul>
        <p className="healthadvice-paragraph">Såhär kan du lägga ett enkelt tassbandage</p>
        <img className="bandage-photo" src={bandage} alt="paw bandage" />
    </div>
    )
}

export default WoundCare