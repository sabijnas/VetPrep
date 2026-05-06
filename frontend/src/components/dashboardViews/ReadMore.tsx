import "../../css/NavViews.css";

const ReadMore = () => {
  return (
    <section className="readmore-wrapper">
      <div className="readmore-hero">
        <span className="readmore-badge">Bakom VetPrep</span>
        <h1 className="headerViews">Läs mer om VetPrep</h1>
        <p className="readmore-intro">
          Här kan du läsa varför vi byggt tjänsten och hur den hjälper djurägare
          i vardagen. Har du frågor, idéer eller vill berätta roliga historier
          om ditt djur? Skicka ett mejl till
          <a className="readmore-mail" href="mailto:info@vetprep.se">
            {" "}
            info@vetprep.se
          </a>
          . Vi svarar på vardagar mellan 08:00-16:00.
        </p>
      </div>

      <div className="readmore-grid">
        <div className="readmore-card">
          <h3 className="readMoreHeader">
            Varför logga symptom och beteenden?
          </h3>
          <p className="readMoreP">
            När ett djur börjar må dåligt kan små förändringar vara lätta att
            missa i vardagen. Genom att kontinuerligt logga symtom och beteenden
            får du en historik som visar hur ditt djur faktiskt har mått över
            tid. Den här översikten blir ovärderlig när du kontaktar en
            veterinär, eftersom du kan exportera all information och ge en
            konkret bild av utvecklingen. Det gör det enklare för veterinären
            att ställa rätt diagnos, se mönster och föreslå behandlingar som
            verkligen passar ditt djur.
          </p>
        </div>

        <div className="readmore-card">
          <h3 className="readMoreHeader">Gratis att använda</h3>
          <p className="readMoreP">
            Tjänsten är helt gratis att använda, utan dolda kostnader eller
            abonnemang. Du kan logga ditt djurs symptom, följa
            beteendeförändringar och skapa översikter över tid utan att betala
            något. Målet är att göra det enkelt för alla djurägare att få bättre
            koll på sitt djurs mående och dela tydlig information med veterinär
            när det behövs.
          </p>
        </div>

        <div className="readmore-card">
          <h3 className="readMoreHeader">Om oss</h3>
          <p className="readMoreP">
            VetPrep började som ett skolprojekt, men växte snabbt fram till
            något större. Idén föddes när vår egna hund blev sjuk och vi insåg
            hur svårt det är att minnas symtom, beteenden och små förändringar i
            vardagen. Den frustrationen blev startpunkten för VetPrep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
