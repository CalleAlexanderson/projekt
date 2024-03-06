// Globala konstanter och variabler

//netlify gillar inte när jag använder globala variabler i fler än en js fil så jag tar bort de

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init2() {
    document.getElementById('menu_btn').addEventListener('click', mobileMenu);

    window.addEventListener('resize', () => {
        if (screen.width > 1025) {
            document.getElementById('mobile_menu').style.visibility = "hidden";
            document.getElementsByClassName('menuLi')[0].classList.remove("mobileMenuAnimOpen");
            document.getElementsByClassName('menuLi')[1].classList.remove("mobileMenuAnimOpen");
            document.getElementsByClassName('menuLiSpan')[0].classList.remove("mobileMenuAnimOpenSpan");
            document.getElementsByClassName('menuLiSpan')[1].classList.remove("mobileMenuAnimOpenSpan");
            document.getElementsByClassName('menuLi')[0].classList.remove("mobileMenuAnimOpen");
            document.getElementsByClassName('menuLi')[1].classList.remove("mobileMenuAnimOpen");
            document.getElementsByClassName('menuLiSpan')[0].classList.remove("mobileMenuAnimOpenSpan");
            document.getElementsByClassName('menuLiSpan')[1].classList.remove("mobileMenuAnimOpenSpan");
            document.getElementById('mobile_menu').classList.remove("open");
            document.getElementById('mobile_menu').classList.add("closed");    
        }
    })
    for (let index = 0; index < document.getElementsByClassName('menuLi').length; index++) {
        document.getElementsByClassName('menuLi')[index].style.right = "0";
        document.getElementsByClassName('menuLi')[index].style.top = index*60+"px";
    }
} // Slut init
window.addEventListener('load', init2);
// --------------------------------------------------

async function mobileMenu() {
    if (document.getElementById('mobile_menu').classList.contains('closed')) {

        document.getElementById('mobile_menu').style.visibility = "visible";
        document.getElementsByClassName('menuLi')[0].classList.remove("mobileMenuAnimClose");
        document.getElementsByClassName('menuLi')[1].classList.remove("mobileMenuAnimClose");
        document.getElementsByClassName('menuLiSpan')[0].classList.remove("mobileMenuAnimCloseSpan");
        document.getElementsByClassName('menuLiSpan')[1].classList.remove("mobileMenuAnimCloseSpan");
        document.getElementsByClassName('menuLi')[0].classList.add("mobileMenuAnimOpen");
        document.getElementsByClassName('menuLiSpan')[0].classList.add("mobileMenuAnimOpenSpan");
        await new Promise(resolve => setTimeout(resolve, 500)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        document.getElementsByClassName('menuLi')[1].classList.add("mobileMenuAnimOpen");
        document.getElementsByClassName('menuLiSpan')[1].classList.add("mobileMenuAnimOpenSpan");

        document.getElementById('mobile_menu').classList.remove("closed");



        await new Promise(resolve => setTimeout(resolve, 1000)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation

        document.getElementById('mobile_menu').classList.add("open");

    } else if (document.getElementById('mobile_menu').classList.contains('open')) {

        document.getElementsByClassName('menuLi')[0].classList.add("mobileMenuAnimClose");
        document.getElementsByClassName('menuLiSpan')[0].classList.add("mobileMenuAnimCloseSpan");
        await new Promise(resolve => setTimeout(resolve, 500)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        document.getElementsByClassName('menuLi')[1].classList.add("mobileMenuAnimClose");
        document.getElementsByClassName('menuLiSpan')[1].classList.add("mobileMenuAnimCloseSpan");

        document.getElementById('mobile_menu').classList.remove("open");




        await new Promise(resolve => setTimeout(resolve, 1000)); //sätter en timeout på 3 sekunder så korten hinner gå igenom sin animation
        document.getElementById('mobile_menu').style.visibility = "hidden";

        document.getElementById('mobile_menu').classList.add("closed");

        document.getElementsByClassName('menuLi')[0].classList.remove("mobileMenuAnimOpen");
        document.getElementsByClassName('menuLi')[1].classList.remove("mobileMenuAnimOpen");
        document.getElementsByClassName('menuLiSpan')[0].classList.remove("mobileMenuAnimOpenSpan");
        document.getElementsByClassName('menuLiSpan')[1].classList.remove("mobileMenuAnimOpenSpan");
    }
}