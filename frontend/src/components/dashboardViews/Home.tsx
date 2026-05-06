import "../../css/NavViews.css";
import dog from "../../assets/dog.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="home-hero">
        <div className="home-copy">
          <span className="home-badge">Smart djurhälsa</span>
          <h1 className="headerHome">VetPrep</h1>
          <p className="homeP">
            Välkommen till VetPrep. Här kan du logga symtom, beteenden och
            förändringar över tid i ett tydligt flöde, så att du enklare ser
            mönster och kan dela en sammanfattning med veterinären när det
            behövs.
          </p>
          <div className="home-actions">
            <Link to="/LogIn" className="home-link home-linkPrimary">
              Kom igång
            </Link>
            <Link to="/Hälsoråd" className="home-link home-linkSecondary">
              Läs hälsoråd
            </Link>
          </div>
        </div>

        <div className="home-visual">
          <div className="home-imageFrame">
            <img className="dog-photo" src={dog} alt="Hund" />
          </div>
        </div>
      </section>

      <section className="info-wrapper">
        <div className="info-card">
          <div className="info-icons">
            <i className="fa-solid fa-paw"></i>
            <h4 className="info-header">Enkel loggning</h4>
            <p className="info-text">
              Logga snabbt och enkelt symtom och beteenden varje dag.
            </p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icons">
            <i className="fa-solid fa-heart"></i>
            <h4 className="info-header">Bättre vård</h4>
            <p className="info-text">
              Ge veterinären konkret information för bättre beslutsunderlag.
            </p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icons">
            <i className="fa-solid fa-shield-dog"></i>
            <h4 className="info-header">Gratis att använda</h4>
            <p className="info-text">
              Ingen kostnad, inga dolda avgifter, alltid gratis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;