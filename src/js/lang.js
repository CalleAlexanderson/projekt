// Globala konstanter och variabler
let swedishBtn;
let englishBtn;
// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {

    swedishBtn = document.getElementsByClassName('langBtn')[0];
    englishBtn = document.getElementsByClassName('langBtn')[1];

    console.log(swedishBtn);
    console.log(englishBtn);

    swedishBtn.addEventListener('click', makeLangSwedish);
    englishBtn.addEventListener('click', makeLangEnglish);

} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

function makeLangSwedish() {
    let docTitle = document.title;

    switch (docTitle) {
        case "Startpage":

            break;
        case "Restaurant Finder":

            break;

        default:
            break;
    }
}

function makeLangEnglish() {
    let docTitle = document.title;

    switch (docTitle) {
        case "Startsida":

            break;
        case "Restaurang Hittaren":

            break;

        default:
            break;
    }
}