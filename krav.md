# Kravlista 
###### Lista på krav jag anser att jag uppfyllt/inte uppfyllt
<br/>
1. Uppfyllt - samma gitrepo, har använt mig av olika branches. Första inlämingen är i branch setup och denna inlämingen ligger i branch deploy. (Vid inläming kommer jag merga deploy in till main)
<br/>
2. Uppfyllt - en readme fil finns med beskrivning hur man bygger och besöker applikationen.
<br/>
3. Uppfyllt - readme innehåller länk till den produktionssatta prototypen.
<br/>
4. Uppfyllt - beskrivning finns i readme filen. 
<br/>
5. Uppfyllt - projketet innehåller en .gitignore fil där hela node_moduels ignoreras.
<br/>
6. Uppfyllt - krav.md fil finns, med lista på svar på alla krav.
<br/>
7. Uppfyllt - applikationen är byggd med react + vite. 
<br/>
8. Uppfyllt - applikationen innehåller i nuläget 9 komponenter (om man inte räknar med app.tsx och main.tsx), jag har valt att dela upp komponenterna i olika mappar för enklare navigering. 
<br/>
9. Uppfyllt - komponenterna är skriva med tsx. 
<br/>
10 & 11. (Kombinerar dessa krav då de hör samman) Uppfyllt - komponenten LoginForm.tsx hanterar ett event genom onClick knapparna logga in och registrera, när en användare trycker på en knapp uppdateras komponentens state, vilket ändrar vilken vy som ska visas. I komponenten NavBar.tsx hanteras också event genom onClick. Komponentens events används för att hantera state isOpen och uppdatera gränssnittet beroende på användarens klick. Effekten växlar state isOpen mellan true och false för att visa eller dölja navigationslänkarna, detta byggt för att visa en hamburgarmeny på mindre skärmar. 
<br/>
12. Inte uppfyllt - det finns i nuläget ingen lifecycle metod eller hook för att påverka en annan komponents tillstånd.
<br/>
13. Inte uppfyllt - ingen information sparas i LocalStorage.
<br/>
14. Inte uppfyllt - ingen LocalStorage finns.
<br/>
15. Uppfyllt - ja egen CSS finns, jag har valt att samla CSS-filer i en separat mapp (css) där har komponenterna egna CSS-filer som gör det enklare att navigera när projketet blir större.
<br/>
16. Uppfyllt - egen CSS ger komponenter rörelse, tillexempel i LoginForm.tsx ändrar klassen slider position när isLogin ändras (true/false), detta ger en glidande rörelse mellan Logga in och Registera knapparna. 