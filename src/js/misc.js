// Globala konstanter och variabler
let menuElem;
let menuLi;
let menuLiSpan;
// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    document.getElementById('menu_btn').addEventListener('click', mobileMenu);
    menuElem = document.getElementById('mobile_menu');
    menuLi = document.getElementsByClassName('menuLi');
    menuLiSpan = document.getElementsByClassName('menuLiSpan');

    window.addEventListener('resize', () => {
        if (screen.width > 1025) {
            menuElem.style.visibility = "hidden";
            menuLi[0].classList.remove("mobileMenuAnimOpen");
            menuLi[1].classList.remove("mobileMenuAnimOpen");
            menuLiSpan[0].classList.remove("mobileMenuAnimOpenSpan");
            menuLiSpan[1].classList.remove("mobileMenuAnimOpenSpan");
            menuLi[0].classList.remove("mobileMenuAnimOpen");
            menuLi[1].classList.remove("mobileMenuAnimOpen");
            menuLiSpan[0].classList.remove("mobileMenuAnimOpenSpan");
            menuLiSpan[1].classList.remove("mobileMenuAnimOpenSpan");
            menuElem.classList.remove("open");
            menuElem.classList.add("closed");    
        }
    })
    for (let index = 0; index < menuLi.length; index++) {
        menuLi[index].style.right = "0";
        menuLi[index].style.top = index*60+"px";
    }
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function mobileMenu() {
    console.log("works");
    console.log(menuLi);
    if (menuElem.classList.contains('closed')) {

        menuElem.style.visibility = "visible";
        menuLi[0].classList.remove("mobileMenuAnimClose");
        menuLi[1].classList.remove("mobileMenuAnimClose");
        menuLiSpan[0].classList.remove("mobileMenuAnimCloseSpan");
        menuLiSpan[1].classList.remove("mobileMenuAnimCloseSpan");
        menuLi[0].classList.add("mobileMenuAnimOpen");
        menuLiSpan[0].classList.add("mobileMenuAnimOpenSpan");
        await new Promise(resolve => setTimeout(resolve, 500)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        menuLi[1].classList.add("mobileMenuAnimOpen");
        menuLiSpan[1].classList.add("mobileMenuAnimOpenSpan");

        menuElem.classList.remove("closed");



        await new Promise(resolve => setTimeout(resolve, 1000)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation

        menuElem.classList.add("open");

    } else if (menuElem.classList.contains('open')) {

        menuLi[0].classList.add("mobileMenuAnimClose");
        menuLiSpan[0].classList.add("mobileMenuAnimCloseSpan");
        await new Promise(resolve => setTimeout(resolve, 500)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        menuLi[1].classList.add("mobileMenuAnimClose");
        menuLiSpan[1].classList.add("mobileMenuAnimCloseSpan");

        menuElem.classList.remove("open");




        await new Promise(resolve => setTimeout(resolve, 1000)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        menuElem.style.visibility = "hidden";

        menuElem.classList.add("closed");

        menuLi[0].classList.remove("mobileMenuAnimOpen");
        menuLi[1].classList.remove("mobileMenuAnimOpen");
        menuLiSpan[0].classList.remove("mobileMenuAnimOpenSpan");
        menuLiSpan[1].classList.remove("mobileMenuAnimOpenSpan");
    }
}