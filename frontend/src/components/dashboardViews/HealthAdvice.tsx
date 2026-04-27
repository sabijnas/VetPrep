import VeternaryExam from "./VeternaryExam";
import WoundCare from "./WoundCare";
import HomePharmacy from "./HomePharmacy";
import "../../css/NavViews.css";

const HealthAdvice = () => {
  return (
    <section className="healthadvice-wrapper">
      <div className="healthadvice-hero">
        <span className="healthadvice-badge">Trygg vardagsvård</span>
        <h1 className="headerViews">Hälsoråd</h1>
        <p className="healthadvice-intro">
          Här hittar du praktiska råd inför veterinärbesök, sårvård och vad som
          är bra att ha i djurets husapotek. Informationen ersätter inte
          professionell vård, men hjälper dig vara bättre förberedd.
        </p>
      </div>

      <div className="healthadvice-grid">
        <VeternaryExam />
        <WoundCare />
        <HomePharmacy />
      </div>
    </section>
  );
};

export default HealthAdvice;
