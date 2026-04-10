import VeternaryExam from "./VeternaryExam";
import WoundCare from "./WoundCare";
import HomePharmacy from "./HomePharmacy";

const HealthAdvice = () => {
  return (
    <>
      <h1 className="headerViews">Hälsoråd</h1>
      <VeternaryExam/>
      <WoundCare/>
      <HomePharmacy/>
    </>
  );
};

export default HealthAdvice;
