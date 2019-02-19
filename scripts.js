let contentText = document.getElementById('content-text');
let contentRubrik = document.getElementById('content-rubrik');
let bothColumns = document.getElementById('content')
let menu= document.getElementById('menu');
let iframeDoc =  document.getElementById('doc');
let footer = document.getElementById('footer');
function linkContent1(){
    contentRubrik.innerHTML = "Om Servern";
    contentText.innerHTML = "Huvudstaden Stockholm Roleplay är en nystartad RP värld som många timmar och dagars hårt arbete ligger bakom. För oss handlar inte allt om att spela på servern, utan att du känner dig trygg och värdefull i vårat community. Vårat huvudmål är att du som spelare och person ska känna dig delaktig i detta och kunna få den support du är ute efter. Folk ska trivas hos oss, och det är ingen slump. Vi i staff satsar ALLTID på att hålla den högsta möjliga kvalitén på servern och hänga med i utvecklingen. När vi pratar kvalité handlar det heller inte bara om funktioner, utan även vilken nivå vi ligger på i rollspelandet. Vi kan göra vårt, men det är Ni medborgares roll att upprätthålla en hög RP-nivå";


        //reset
        if(menu.clientHeight>452 || bothColumns.clientHeight>400){
            menu.style.cssText = 'height:70vh;'
            bothColumns.style.cssText = 'height:45vh;'
        }
        contentText.style.cssText = 'display:block; ';
        bothColumns.style.cssText = 'overflow:none;'
        
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent2(){
    contentRubrik.innerHTML = "Discord";
    contentText.innerHTML = "Discord : <a style='font-size:2.5vw;' href='https://discord.gg/TpDB8UR'> https://discord.gg/TpDB8UR</a> <br> Sitt ALLTID i serverns discord med ditt in-game namn när du är inne på den. Dels för att inte metagaming, ooc osv ska uppstå under spelets gång men även också för att vi ska kunna vara till hjälp och reda ut saker snabbt och enkelt om problem angående scenarion skulle uppstå. ";


        //reset
        if(menu.clientHeight>452 || bothColumns.clientHeight>400){
            menu.style.cssText = 'height:70vh;'
            bothColumns.style.cssText = 'height:45vh;'
        }
        contentText.style.cssText = 'display:block;';
        bothColumns.style.cssText = 'overflow:none;'
        
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent3(){
    contentRubrik.innerHTML = "Regler";
contentText.innerHTML = "***Alla spelare på servern måste vara minst 18 år gamla.***<br>Det kan göras undantag, men det är ytterst sällan. Personer under gränsen måste ha en person som går i god för dem som ansvarar för deras beteende. Endast ett konto per spelare. Endast en spelare per konto.<br>***Avsluta scenarion ordentligt.***<br> Du får inte återansluta, byta jobb eller byta karaktär för att undvika rollspelsituationer. Givetvis kan det bli så att verkligheten kommer i vägen, men då är det din skyldighet att informera dom andra i scenariot att du måste åka. Det kan, till exempel, göras i Discord. Försök så gott det går att återgå till scenariot när du kommer tillbaks.***<br>Förolämpa inte spelare Out Of Character. Skilj på karaktär och spelare. Om någons karaktär är en skitstövel så betyder inte det att spelaren bakom vill dig illa. Om det uppstår konflikter, försök reda ut det OOC innan det eventuellt blandas in admins. Vi är alla spelare som har detta som hobby, så försök att inte ta det för allvarligt. Ta inte regelbrott i egna händer. Om du ser någon som bryter mot reglerna, säg till admins genom /report eller i Discord <br><br>***Man får inte råna eller stjäla från sitt egna företag*** <br>Exempel: Mekaniker får inte uppgradera en bil utan att ta betalt för det. Poliser får inte ta vapen från sitt vapenskåp för att ge dom vidare. Inte ens under vapenhot! Notera att det gäller även om du lämnar ett jobb. Om du lämnar jobbet eller blir sparkad måste du lämna tillbaks all utrustning som tillhör arbetsgivaren. Till exempel måste du lämna in medikit, hjärtstartare och piller om du inte längre är sjukvårdare. Och pistol, batong osv om du är polis. <br><br>***FEARRP gäller alltid för alla karaktärer.***<br> Det betyder att du måste vara rädd för livshotande sitautioner. Till exempel skall även poliser vara rädd att bli skjutna, och det görs inga undantag för 'psykotiska' karaktärer eller liknande. Är du under vapenhot måste du vara rädd om ditt liv, och du får inte dra fram vapen eller börja slåss. Även om du inte är handbojad får du inte lämna fordonet om du är kidnappad under vapenhot.<br><br>***Ingen metagaming.***<br> Det innebär att du endast får använda information som din karaktär har fått in-game eller genom de flesta kanaler i Discord. Kom ihåg att spelarlistan som syns in-game är menad för dig som spelare, och räknas inte som information din karaktär har fått.<br<br>***Ingen powergaming.***<br> Till exempel kan du inte göra /me bryter benet bara sådär, utan det måste passa in i scenariot i övrigt och du måste vara i position för att göra det du påstår dig göra.<br><br>***Agera realistiskt utifrån din karaktär.***<br> Att göra helt orealistiska saker, eller att bete sig på ett sätt som inte passar sin karaktär, kallas FailRP. Till exempel får du inte lämna en cell i häktet bara för att dom inte hann låsa dörren, eftersom det är helt orealistiskt att du skulle lyckas med det i verkligheten.<br><br>***Spela som om du har det jobbet du har.***<br> Visst, ibland kanske en bilhandlare säljer lite knark bredvid, och en taxiförare kanske är med på ett bankrån ibland, men om du inte tänker spela det jobbet du har borde du säga upp dig och låta någon annan ta din plats. Det gäller även för chefer, så om du lägger mer tid på kriminalitet än på att driva ditt företag riskerar du att bli av med din företagslicens.<br><br>***Alla får en chans att göra rätt för sig.***<br> Scenarion skall utspela sig på ett sånt sätt att alla involverade får en chans att göra rätt för sig. Till exempel skall man ge motparten i en eldstrid chansen att ge upp för att behålla livet. I praktiken betyder det att man inte skall avrätta folk som har lagt ner sina vapnen, om det inte är tvingande för scenariot att dom måste avrättas. Över tid leder det till att vi kanske kan lugna skjutandet lite och hellre göra mer komplicerade och involverande scenarion.<br><br>***Döda inte folk slumpmässigt.***<br> Att slumpmässigt välja ut en person, och sen döda dom, är helt förbjudet. Random Death Match, RDM, är per definition FailRP. Försök förhandla dig ur situationen. Prata med dina medspelares karaktärer. Försök hitta en lösning som inte involverar våld först. Ibland räcker det med hot. Är du tvungen att ta till våld, använd så lite våld som situationen tillåter. Skottlossning är en mycket allvarlig handling som sällan görs av rent nöjesskäl. Hör en spelare ett skott och polisen kommer till platsen kan det finnas chans och en stor sannolikhet att alla på platsen blir visiterade.<br><br>***Detta gäller inte bara när du är under vapenhot, men även när du klättrar upp på höga byggnader eller kör som ett svin.***<br> Passar det inte in i scenariot på något sätt är det FailRP och brist på FearRP att utsätta sig för livsfara. ";


    //reset
    if(screen.width>900){
        if(menu.clientHeight>452 || bothColumns.clientHeight>400){
            menu.style.cssText = 'height:70vh;'
            bothColumns.style.cssText = 'height:45vh;'
        }
        contentText.style.cssText = 'display:block;';
        bothColumns.style.cssText = 'overflow:scroll; overflow-x:hidden'
    
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';


    }

}
function linkContent4(){


    if(screen.width>900){
        if(menu.clientHeight>452 || bothColumns.clientHeight>400){
            menu.style.cssText = 'height:70vh;'
            bothColumns.style.cssText = 'height:45vh;'
        }

    }
        bothColumns.style.cssText = 'overflow:scroll; overflow-x:hidden '
   
   
    contentRubrik.innerHTML = "Lagar";
    contentText.innerHTML = "<br><span style=' font-size: 3vh; font-family: Pricedown;'>Medborgarrätt</span> <br>" +
    "Alla medborgare är skyldiga att stanna på polisens signal och lyda polismannen.<br> " +
    "Alla medborgare är alltid skyldiga att visa sina ID-handlingar vid polismans order.<br> " +
    "Alla medborgare har alltid rätt att få veta vilket brott man är gripen eller misstänkt för.<br> " +
    "Alla medborgare ska alltid lämna företräde för alla utryckningsfordon under utryckning.<br> " +
    "Alla medborgare har rätt att kalla in en advokat under förhör samt tiga till dess advokaten anlänt. Den misstänkte kan dömas även om den nekar, beroende på vilka bevis som finns. <br>" +
    "Alla medborgare har alltid rätt att tillkalla polis och ambulans. <br>"+
    
    
    "<br> <span style=' font-size: 3vh; font-family: Pricedown;'>Fordon</span> <br>"+
    "Hastighetsgräns inom bostadsområden är 60km/t.<br> "+
    "Hastighetsgräns inom staden är 80km/t.<br> "+
    "Hastighetsgräns på motorvägen är 120km/t.<br> "+
    "Hastighetsgränserna gäller inte för utryckningsfordon under utryckning.<br>"+
    "Körkort behövs alltid för att köra fordon.<br> "+
    "Stanna vid rött ljus och följ trafikregler.<br> "+
    "Fordon får inte parkeras på gatan.<br> "+
    "Bilar får inte parkeras på piren.<br> "+
    "Man får inte styla sina fordon för att försöka likna ett utryckningsfordon Neonljus får inte vara blåa. <br>"+
    
    " <br><span style=' font-size: 3vh; font-family: Pricedown;'>Våld och vapeninnehav</span> <br>"+
    "Vappeninnehav är förbjudet. Olagligt vapeninnhav kan ge fängelsestraff.<br> "+
    "Polismän kan alltid ta vapen i beslag. Detta gäller även föremål som kan användas som vapen. <br>"+
    "Våld i all form mot annan person är förbjuden, förutom i försvar av sig själv, eller värdefull egendom. <br>"+
    "Hot mot annan person är förbjuden. <br>"+
    "Våld och hot mot tjänsteman innebär hårdare straff. <br>"+
    " <br><span style=' font-size: 3vh; font-family: Pricedown;'>Polisen</span> <br>"+
    "Polis får aldrig stoppa ett fordon utan en missstanke om ett brott. Undantag ges om man vill kontrollera ett fordons skick eller för att fastställa vem ägaren är.<br> "+
    "Polis får aldrig visitera en person utan en misstanke om ett brott. <br>"+
    "Polis måste alltid informera om vilket brott man gripit en person för. <br>"+
    "Polis har rätt att gripa medborgare som vägrar uppvisa ID-handling. <br>"+
    "Polis har rätt att visitera misstänkta medborgare samt beslagta objekt som är viktiga i en brottsutredning.<br> "+
    "Polis ska inte förbruka sitt förtroende för medborgarna. <br>"+
    "Polis får endast använda skjutvapen i nödvärn.<br> "+
    "Polis har rätt att använda det våld som krävs för att lösa sitt ärende.<br> "+
    "Polis har rätt att överträda hastighetsbegränsningar om det krävs i sitt ärende.<br> "+
    "Polisfordon får parkeras där den finns tillgänglig för snabb utryckning.<br> "+
    "Polis har rätt att avvisa medborgare från en plats<br>";
    
    //reset
    contentText.style.cssText = 'display:block;'
    iframeDoc.style.cssText ='display:none;'
footer.style.cssText = 'display:flex;';


}
function linkContent5(){

    if(screen.width>900){
        iframeDoc.style.cssText = 'display:block; height:80vh;';
        menu.style.cssText = 'height:100vh;';
        bothColumns.style.cssText = 'height:80vh';

    }else{
        iframeDoc.style.cssText = 'display:block; height:60vh;';
        bothColumns.style.cssText = 'height:60vh';


    }

contentRubrik.style.cssText = 'display:none;'
contentText.style.cssText = 'display:none;'
footer.style.cssText = 'display:none;';

   



}
