import "../css/NavViews.css";

const ProjectIdea = () => {
  return (
    <>
      <h1>Projektidé</h1>
      <div className="projectIdea-card">
        <p>
          Projektidén är att utveckla en prototyp av applikationen VetPrep,
          målet är att skapa en enkel lösning där användaren kan registera
          symtom, beteenden och förändringar i vardagen och på så sätt bygga upp
          en historik och ett tydligt underlag inför veterinärbesök. Prototypen
          kommer att fokusera på dessa funktioner: <br /> Logga in/logga ut och
          skapa konto <br /> Lägga till ett husdjur <br /> Visa historik i en
          överskådlig vy <br /> Logga observationer (symtom,
          beteendeförändringar) <br /> Exportera logg till PDF vid behov inför
          veterinärbesök{" "}
        </p>
      </div>
    </>
  );
};

export default ProjectIdea;
