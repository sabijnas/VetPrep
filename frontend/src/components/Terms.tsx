type TermsProps = {
    onClose: () => void;
};

const Terms = ({ onClose }: TermsProps) => {
return (
    <div className="" onClick={onClose}>
    <div className="" onClick={(e) => e.stopPropagation}>

        <h2 className="headerTearms">Användarvillkor</h2>

        <div className="tearms-form"> 
            Dessa användarvillkor gäller för användningen av VetPrep, genom att skapa ett konto och använda applikationen godkänner du villkoren nedan. Applikationen är ett skolprojekt och tillhandahålls i befintligt skick utan garanti för funktion, tillgänglighet eller korrekthet.
            <br /> <br />
            ● Applikationen är inte en medicinsk tjänst och ersätter inte professionell veterinärvård. All information i VetPrep är endast avsedd som stöd för dig som djurägare.
            <br />
            ● Applikationen är avsedd för att logga symtom, spara information och exportera loggar till PDF.
            <br />
            ● Applikationen samlar in följande personuppgifter: namn, e-post, lösenord, djurets namn, hälsologgar. Ingen information delas med tredje part.
            <br />
            ● Vid misstanke om sjukdom eller akuta symtom ska du alltid i första hand kontakta en legitermad veterinär.
        </div>
        <button className="closeTermsBtn" onClick={onClose}>Stäng</button>
   </div> </div>
)
}

export default Terms;