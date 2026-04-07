import VeternaryExam from "./VeternaryExam";
import WoundCare from "./WoundCare";

const HealthAdvice = () => {
  return (
    <>
      <h1 className="headerViews">Hälsoråd</h1>
      <VeternaryExam/>
      <WoundCare/>
    </>
  );
};

export default HealthAdvice;
