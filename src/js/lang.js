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
                break;
        }
    }
}