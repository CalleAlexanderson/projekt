// Globala konstanter och variabler
let swedishBtn;
let englishBtn;
let langDiv;
let langbtn;
let lang = "sv";
// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {

    swedishBtn = document.getElementsByClassName('langBtn')[0];
    englishBtn = document.getElementsByClassName('langBtn')[1];
    langDiv = document.getElementById('lang_dropdown');
    langbtn = document.getElementById('change_lang_btn');

    swedishBtn.addEventListener('click', makeLangSwedish);
    englishBtn.addEventListener('click', makeLangEnglish);
    langbtn.addEventListener('click', dropDown);

    langDiv.style.visibility = "hidden";
    swedishBtn.style.backgroundColor = "#266EC0";
    swedishBtn.style.color = "#FFFFFF";

} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

function dropDown() {
    if (langDiv.style.visibility == "hidden") {
        langDiv.style.visibility = "visible";
        langbtn.style.borderWidth = "1px 1px 0px 1px";
        langbtn.style.paddingBottom = "1px";
        langbtn.style.borderRadius = "10px 10px 0px 0px";
    } else {
        langDiv.style.visibility = "hidden";
        langbtn.style.borderWidth = "1px";
        langbtn.style.borderRadius = "10px";
    }
}

function makeLangSwedish() {
    let docTitle = document.title;
    if (lang != "sv") {
        lang = "sv";
        swedishBtn.style.backgroundColor = "#266EC0";
        swedishBtn.style.color = "#FFFFFF";
        englishBtn.style.backgroundColor = "#FFFFFF";
        englishBtn.style.color = "#000000";
        switch (docTitle) {
            case "Check The Air":
                console.log(docTitle);

                break;

            default: //Index
                console.log(docTitle);
                let mainArt1Txt = "<h3>Luftpollution, vad är det?</h3><p>Luftpollution är en term som används för att refera till kemikalier och partiklar som är skadliga för hälsan av människor, djur och växtliv. Luftpollution finns i flera olika former, det kan förekomma i gas form, fast form (som fast partiklar) eller flytande form (som droppar).</p>";
                let mainArt2Txt = "<h3>Hur skapas luftpollution?</h3> <p>Luftpollution hamnar i vår atmosfär på olika sätt. För det mest förekommer luftpollution som en produkt skapad av människor i formen av utsläpp från till exempel fabriker, bilar och flyplan. Dessa utsläpp orsakade av människor heter antropogena pollution. Vissa typer av luftpollution sker naturligt som rök från skogsbränder och aska från vulkanutbrott, dessa kallas naturlig pollution. Luftpollution är vanligast i storstäder där olika typer av utsläpp förekommer på samma plats. Ibland kan berg eller höga byggnader hindra dessa utsläpp från att sprida sig vilket leder till att det samlas i luften i form av ett moln som kallas smog.</p>";
                let mainArt3Txt = "";
                let mainArt4Txt = "";
                document.getElementById('main_art1').innerHTML = mainArt1Txt;
                document.getElementById('main_art2').innerHTML = mainArt2Txt;
                document.getElementById('main_art3').innerHTML = mainArt3Txt;
                document.getElementById('main_art4').innerHTML = mainArt4Txt;
                break;
        }
    }
}

function makeLangEnglish() {
    let docTitle = document.title;

    if (lang != "en") {
        lang = "en";
        englishBtn.style.backgroundColor = "#266EC0";
        englishBtn.style.color = "#FFFFFF";
        swedishBtn.style.backgroundColor = "#FFFFFF";
        swedishBtn.style.color = "#000000";
        switch (docTitle) {
            case "Kolla Luften":
                console.log(docTitle);

                break;

            default: //Index
                console.log(docTitle);
                let mainArt1Txt = "<h3>What is air pollution?</h3><p>Air pollution is a term that refers to chemicals and particles in the air that causes harm to humans, animals and plants. Pollutants in the air take many forms, they can be gases, solids (as solid particles), or liquids (as droplets).</p>";
                let mainArt2Txt = "<h3>What causes air pollution?</h3><p>Pollution enters the Earth's atmosphere in many different ways. Most air pollution is created by people, in the form of emissions from for example, factories, cars, planes. These man-made sources of pollution are called anthropogenic emissions. Some types of air pollution occur naturally, such as smoke from wildfires or ash from volcanoes. These are called natural sources. Air pollution is most common in large cities where emissions from many different sources are concentrated. Sometimes, mountains or tall buildings prevent air pollution from spreading out, this air pollution often appears as a cloud making the air murky and is called smog.</p>";
                let mainArt3Txt = "";
                let mainArt4Txt = "";
                document.getElementById('main_art1').innerHTML = mainArt1Txt;
                document.getElementById('main_art2').innerHTML = mainArt2Txt;
                document.getElementById('main_art3').innerHTML = mainArt3Txt;
                document.getElementById('main_art4').innerHTML = mainArt4Txt;
                break;
        }
    }
}