# VetPrep🐹

### Beskrivning
VetPrep är en webbapplikation för djurägare som gör det enkelt att dokumentera och följa sitt husdjurs hälsa över tid. Genom att logga symtom, beteenden och förändringar skapas ett struktuerat underlag som kan delas med veterinär inför besök. 
<br/><br/>
Idén till VetPrep uppstod under en affärsmannaskapskurs och bygger på en personlig erfarenhet av svårigheter att hålla koll på ett djurs sjukdomsförlopp över tid. Projektet utveckls nu vidare med målet att skapa ett modernt, användarvänligt och datadrivet verktyg för både djurägare och veterinärer. 

### Start och användning
Applikationen ligger live på https://shark-app-p84vh.ondigitalocean.app om du istället vill köra projektet lokalt på din dator, gör såhär:
#### FRONTEND 
- Se till att du har Node.js och npm installerat på datorn
- Du kan antigen klona ner repot eller ladda ner projektet som ZIP från Github och extrahera det, öppna sedan projektet i din kodeditor och öppna terminalen
- Installera beroenden: npm install (OBS! se till att du är inne i frontend mappen, du kan navigera till den genom att skriva "ls" och sedan "cd frontend" i terminalen)
- Starta server: npm run dev
- Öppna applikationen i webbläsaren via den adress som visas i terminalen (oftast http://localhost:5173)
#### BACKEND
- Gå in i backend mappen genom att öppna terminalen och skriv "cd backend"
- När du är inne i backend mappen, kör servern genom att skriva in "" OBS! detta är viktigt eftersom att API anropen hämtar från denna endpoint.  
- 

### Hur används API:et, vilka endpoint finns? 
Krav på att två komponeter ska hämta data (GET), minst en endpoint ska ha impementerat (POST) och ta emot data från applikationen. 