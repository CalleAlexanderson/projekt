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
    document.getElementById('change_lang_btn').addEventListener('click', dropDown);


} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

function dropDown() {
    console.log("works");
}

function makeLangSwedish() {
    let docTitle = document.title;

    switch (docTitle) {
        case "Air Pollution":

            break;
        case "Check The Air":

            break;

        default:
            break;
    }
}

function makeLangEnglish() {
    let docTitle = document.title;

    switch (docTitle) {
        case "Luftpollution":

            break;
        case "Kolla Luften":

            break;

        default:
            break;
    }
}