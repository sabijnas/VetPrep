import "../../css/NavViews.css";

const HomePharmacy = () => {
  const homePharmacyItems = [
    "Förebyggande medel mot fästingar",
    "Pincett",
    "Sax",
    "Tandborste",
    "Tandrengöringsmedel",
    "Tandstensskrapa",
    "Klotång",
    "Blodstillande medel",
    "Febertermometer",
    "Desinfektionsmedel (t.ex klorhexidinlösning)",
    "Tassalva",
    "Gasbinda, bomull",
    "Självhäftande bandage",
    "Sterila kompresser",
    "Halskrage",
    "Ögonvatten",
    "Öronrengöringsmedel",
    "Doseringsspruta",
  ];

  return (
    <>
      <div className="healthadvice-card">
        <h3 className="healthadivce-header">Husapotek</h3>
        <p className="healthadvice-paragraph">
          Ett litet apotek för ditt djur bör innehålla följande
        </p>
        <ul className="healthadvice-list">
          {homePharmacyItems.map((item, index) => (
            <li key={index} className="healthadivce-li">
              {item}
            </li>
          ))}
        </ul>
        <p className="healthadvice-paragraph-italic">
          Tips! De flesta djurbutiker och veterinärkliniker säljer första
          hjälpen kit för husdjur
        </p>
      </div>
    </>
  );
};

export default HomePharmacy;
