import "../../css/NavViews.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="headerHome">VetPrep</h1>
      <div className="home-card">
        <div className="home-text-logo">
        <p className="homeP">
          Välkommen till VetPrep! Att beskriva hur ditt djur mår ska inte vara
          svårt. Med VetPrep kan du enkelt logga beteenden, symtom och
          förändringar under tid - allt samlat på ett ställe. När det är dags
          för veterinärbesök exporterar du enkelt en tydlig rapport som gör det
          lättare för veterinären att förstå helheten. Håll koll. Spara tid.
          Hjälp ditt djur att må bra.{" "}
        </p> 
        <img className="dog-photo" src="src/assets/dog.png" alt="dog" />
        </div>
        <div className="info-wrapper">
          <div className="info-card">
            <div className="info-icons">
              <i className="fa-solid fa-paw"></i>
              <h4 className="info-header">Enkel loggning</h4>
              <p className="info-text">
                Logga snabbt och enkelt symptom och beteenden varje dag
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icons">
              <i className="fa-solid fa-heart"></i>
              <h4 className="info-header">Bättre vård</h4>
              <p className="info-text">
                Ge veterinären konkret information för bättre diagnoser{" "}
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icons">
              <i className="fa-solid fa-shield-dog"></i>
              <h4 className="info-header">100% Gratis</h4>
              <p className="info-text">
                Ingen kostnad, inga dolda avgifter, alltid gratis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;