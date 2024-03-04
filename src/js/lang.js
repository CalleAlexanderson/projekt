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

    if (localStorage.getItem("lang") != null) {
        lang = localStorage.getItem("lang");
    }

    //väldigt ful lösning men funkar
    if (lang == "en") {
        lang = "sv"
        makeLangEnglish();
    }

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

    if (lang != "sv") {
        lang = "sv";
        localStorage.setItem("lang", "sv");
        swedishBtn.style.backgroundColor = "#266EC0";
        swedishBtn.style.color = "#FFFFFF";
        englishBtn.style.backgroundColor = "#FFFFFF";
        englishBtn.style.color = "#000000";
        switch (document.title) {
            case "Check The Air":
                //head och header
                document.getElementsByTagName('h1')[0].innerHTML = "Kolla Luften";
                document.title = "Kolla Luften";
                englishBtn.innerHTML = "Engelska";
                swedishBtn.innerHTML = "Svenska";
                document.getElementById('lang_btn_span').innerHTML = "Språk";
                document.getElementsByClassName('menuSpan')[0].innerHTML = "Luftförorening";
                document.getElementsByClassName('menuSpan')[1].innerHTML = "Kolla Luften";
                document.getElementsByClassName('menuSpan')[2].innerHTML = "Luftförorening";
                document.getElementsByClassName('menuSpan')[3].innerHTML = "Kolla Luften";
                
                // innehållet på sidan
                document.getElementsByTagName('label')[0].innerHTML = "Sök Plats:";
                let placeInfo = document.getElementById('place_information').innerHTML;
                placeInfo = placeInfo.replace("Location", "Plats");
                placeInfo = placeInfo.replace("general", "generell");
                document.getElementById('place_information').innerHTML = placeInfo;
                document.getElementsByTagName('h2')[0].innerHTML = "Tabell på olika nivåer av pollution";
                document.getElementById('table_source').innerHTML = 'Tabell tagen från denna källa: <a href="https://www.airnow.gov/aqi/aqi-basics/" target="_blank">Air Quality Index (AQI) Basics</a>';

                //footer
                document.getElementsByClassName('footerP')[0].innerHTML = "Sidskapare: Calle Alexanderson";
                document.getElementsByClassName('footerP')[1].innerHTML = 'Kontakta mig här: <a href="mailto:calle.alexanderson@telia.com">calle.alexanderson@telia.com</a>';
                document.getElementsByClassName('footerP')[2].innerHTML = 'Data tagen från denna källa: <a href="https://api-ninjas.com/api/airquality">Air Quality API';
                break;

            default: //Index
            //head och header
                document.getElementsByTagName('h1')[0].innerHTML = "Luftförorening";
                document.title = "Luftförorening";
                englishBtn.innerHTML = "Engelska";
                swedishBtn.innerHTML = "Svenska";
                document.getElementById('lang_btn_span').innerHTML = "Språk";
                document.getElementsByClassName('menuSpan')[0].innerHTML = "Luftförorening";
                document.getElementsByClassName('menuSpan')[1].innerHTML = "Kolla Luften";
                document.getElementsByClassName('menuSpan')[2].innerHTML = "Luftförorening";
                document.getElementsByClassName('menuSpan')[3].innerHTML = "Kolla Luften";

                // innehållet på sidan
                let maindiv1Txt = "<h2>Luftförorening: en lågsam mördare</h2><p>Du har säkert tidigare sett någon artikel eller hört någon konversation om faran med Luftförorening och hur dåligt det är både för oss och vår planet, men vad är det man pratar om egentligen?</p>";
                let mainArt1Txt = "<h3>Luftförorening, vad är det?</h3><p>Luftförorening är en term som används för att refera till kemikalier och partiklar som är skadliga för hälsan av människor, djur och växtliv. Luftförorening finns i flera olika former, det kan förekomma i gas form, fast form (som fast partiklar) eller flytande form (som droppar).</p>";
                let mainArt2Txt = "<h3>Hur skapas Luftförorening?</h3> <p>Luftförorening hamnar i vår atmosfär på olika sätt. För det mest förekommer Luftförorening som en produkt skapad av människor i formen av utsläpp från till exempel fabriker, bilar och flyplan. Dessa utsläpp orsakade av människor heter antropogena pollution. <br> <br> Vissa typer av Luftförorening sker naturligt som rök från skogsbränder och aska från vulkanutbrott, dessa kallas naturlig pollution. Luftförorening är vanligast i storstäder där olika typer av utsläpp förekommer på samma plats. Ibland kan berg eller höga byggnader hindra dessa utsläpp från att sprida sig vilket leder till att det samlas i luften i form av ett moln som kallas smog.</p>";
                let mainArt3Txt = "<h3>Negativa hälsoeffekter av Luftförorening</h3><p>Negativa hälsoeffekter förekommer i både kortsiktiga och långsiktiga effekter. <br> <br>kortsiktiga effekter inkluderar sjukdomar som Lunginflammation och Bronkit samt irritation i näsa, hals, ögon eller  hud. Luftförorening kan också orsaka huvudvärk, yrsel och illamående. <br> <br> Långsiktiga effekter inkulderar hjärtsjukdomar, lungcancer och luftvägssjukdomar som emfysem samt långsiktiga skador på nerver, hjärna, njurar, lever och andra organ. <br> <br> Människor vars immunförsvar tenderar att vara svagare är ofta känsligare för föroreningar. Tillstånd som astma, hjärtsjukdomar och lungsjukdomar kan förvärras av exponering för Luftförorening.</p>";
                let mainArt4Txt = "<h3>Hur mäts Luftförorening?</h3><p>Denna hemsida måter Luftförorening med U.S. Environmental Protection Agency index för Luftförorening(AQI). <br> Tänk på AQI som en måttstock som går från 0 till 500. Ju högre AQI-värde, desto högre nivå av Luftförorening och desto större hälsorisk. Till exempel representerar ett AQI-värde på 50 eller lägre god luftkvalitet, medan ett AQI-värde över 300 representerar farlig luftkvalitet. <br> <br> För varje förorening motsvarar ett AQI-värde på 100 i allmänhet en koncentration i luften som är lika med nivån för den kortsiktiga nationella luftkvalitetsnormen för skydd av folkhälsan. AQI-värden på eller under 100 anses i allmänhet vara tillfredsställande. När AQI-värdena är över 100 är luftkvaliteten ohälsosam: först för vissa känsliga grupper av människor, sedan för alla när AQI-värdena blir högre. <br> <br> AQI är indelat i sex kategorier. Varje kategori motsvarar olika nivåer av hälsoproblem. Varje kategori har också en specifik färg. Färgen gör det enkelt för människor att snabbt avgöra om luftkvaliteten når ohälsosamma nivåer i deras samhällen.</p>";
                document.getElementById('main_div1').innerHTML = maindiv1Txt;
                document.getElementById('main_art1').innerHTML = mainArt1Txt;
                document.getElementById('main_art2').innerHTML = mainArt2Txt;
                document.getElementById('main_art3').innerHTML = mainArt3Txt;
                document.getElementById('main_art4').innerHTML = mainArt4Txt;

                //footer
                document.getElementsByClassName('footerP')[0].innerHTML = "Sidskapare: Calle Alexanderson";
                document.getElementsByClassName('footerP')[1].innerHTML = 'Kontakta mig här: <a href="mailto:calle.alexanderson@telia.com">calle.alexanderson@telia.com</a>';
                document.getElementsByClassName('footerP')[2].innerHTML = 'Data tagen från denna källa: <a href="https://api-ninjas.com/api/airquality">Air Quality API';
                break;
        }
    }
}

function makeLangEnglish() {

    if (lang != "en") {
        lang = "en";
        localStorage.setItem("lang", "en");
        englishBtn.style.backgroundColor = "#266EC0";
        englishBtn.style.color = "#FFFFFF";
        swedishBtn.style.backgroundColor = "#FFFFFF";
        swedishBtn.style.color = "#000000";
        switch (document.title) {
            case "Kolla Luften":
                //head och header
                document.getElementsByTagName('h1')[0].innerHTML = "Check The Air";
                document.title = "Check The Air";
                englishBtn.innerHTML = "English";
                swedishBtn.innerHTML = "Swedish";
                document.getElementById('lang_btn_span').innerHTML = "Lang.";
                document.getElementsByClassName('menuSpan')[0].innerHTML = "Air Pollution";
                document.getElementsByClassName('menuSpan')[1].innerHTML = "Check The Air";
                document.getElementsByClassName('menuSpan')[2].innerHTML = "Air Pollution";
                document.getElementsByClassName('menuSpan')[3].innerHTML = "Check The Air";
                
                // innehållet på sidan
                document.getElementsByTagName('label')[0].innerHTML = "Search location:";
                let placeInfo = document.getElementById('place_information').innerHTML;
                placeInfo = placeInfo.replace("Plats", "Location");
                placeInfo = placeInfo.replace("generell", "general");
                document.getElementById('place_information').innerHTML = placeInfo;
                document.getElementsByTagName('h2')[0].innerHTML = "Table showing different levels of pollution";
                document.getElementById('table_source').innerHTML = 'Table taken from this source: <a href="https://www.airnow.gov/aqi/aqi-basics/" target="_blank">Air Quality Index (AQI) Basics</a>';

                //footer
                document.getElementsByClassName('footerP')[0].innerHTML = "Site creator: Calle Alexanderson";
                document.getElementsByClassName('footerP')[1].innerHTML = 'Contact me here: <a href="mailto:calle.alexanderson@telia.com">calle.alexanderson@telia.com</a>';
                document.getElementsByClassName('footerP')[2].innerHTML = 'Data taken from this source: <a href="https://api-ninjas.com/api/airquality">Air Quality API';

                break;

            default: //Index
            //head och header
                document.getElementsByTagName('h1')[0].innerHTML = "Air Pollution";
                document.title = "Air Pollution";
                englishBtn.innerHTML = "English";
                swedishBtn.innerHTML = "Swedish";
                document.getElementById('lang_btn_span').innerHTML = "Lang.";
                document.getElementsByClassName('menuSpan')[0].innerHTML = "Air Pollution";
                document.getElementsByClassName('menuSpan')[1].innerHTML = "Check The Air";
                document.getElementsByClassName('menuSpan')[2].innerHTML = "Air Pollution";
                document.getElementsByClassName('menuSpan')[3].innerHTML = "Check The Air";

                // innehållet på sidan
                let maindiv1Txt = "<h2>Air Pollution: A Slow Killer</h2><p>You've probably seen some article or heard some conversation about the dangers of air pollution, how It's bad for both us and our planet, but what are they really talking about?</p>";
                let mainArt1Txt = "<h3>What is air pollution?</h3><p>Air pollution is a term that refers to chemicals and particles in the air that causes harm to humans, animals and plants. Pollutants in the air take many forms, they can be gases, solids (as solid particles), or liquids (as droplets).</p>";
                let mainArt2Txt = "<h3>What causes air pollution?</h3><p>Pollution enters the Earth's atmosphere in many different ways. Most air pollution is created by people, in the form of emissions from for example, factories, cars, planes. These man-made sources of pollution are called anthropogenic emissions. <br> <br> Some types of air pollution occur naturally, such as smoke from wildfires or ash from volcanoes. These are called natural sources. Air pollution is most common in large cities where emissions from many different sources are concentrated. Sometimes, mountains or tall buildings prevent air pollution from spreading out, this air pollution often appears as a cloud making the air murky and is called smog.</p>";
                let mainArt3Txt = "<h3>Negative Health Effects of Air Pollution</h3><p>Adverse health effects occur in both short-term and long-term effects. <br> <br> Short-term effects include diseases such as Pneumonia and Bronchitis as well as irritation of the nose, throat, eyes or skin. Air pollution can also cause headaches, dizziness, and nausea. <br> <br> Long-term effects including heart disease, lung cancer and respiratory diseases such as emphysema, as well as long-term damage to nerves, brain, kidneys, liver and other organs. <br> <br> People whose immune systems tend to be weaker, are often more sensitive to pollution. Conditions such as asthma, heart disease, and lung disease can be made worse by exposure to air pollution.</p>";
                let mainArt4Txt = "<h3>How Is Air Pollution Measured?</h3><p>This website measures air pollution using the U.S. Environmental Protection Agency's index of air pollution(AQI). Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality. <br> <br>For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher. <br> <br>The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.</p>";
                document.getElementById('main_div1').innerHTML = maindiv1Txt;
                document.getElementById('main_art1').innerHTML = mainArt1Txt;
                document.getElementById('main_art2').innerHTML = mainArt2Txt;
                document.getElementById('main_art3').innerHTML = mainArt3Txt;
                document.getElementById('main_art4').innerHTML = mainArt4Txt;
                
                //footer
                document.getElementsByClassName('footerP')[0].innerHTML = "Site creator: Calle Alexanderson";
                document.getElementsByClassName('footerP')[1].innerHTML = 'Contact me here: <a href="mailto:calle.alexanderson@telia.com">calle.alexanderson@telia.com</a>';
                document.getElementsByClassName('footerP')[2].innerHTML = 'Data taken from this source: <a href="https://api-ninjas.com/api/airquality">Air Quality API';
                break;
        }
    }
}