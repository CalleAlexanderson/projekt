// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    getAIQstats()
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function getAIQstats() {
    let input = "taj mahal";

    let inputForFetch = input.replace(/\s/g, '+')

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${inputForFetch}&format=jsonv2&limit=1`);
        cordsData = await response.json();
    } catch (error) {
        console.log(error);
    }

    if (cordsData != null) {
        let lat = cordsData[0].lat;
        let lon = cordsData[0].lon;
        // const options = {
        //     method: 'GET',
        //     headers: { 'X-Api-Key': 'wrWkYLoRM98tlbLu0CgjjA==VxslqbabF3vOSqvJ' },
        //     contentType: 'application/json',
        // };

        // fetch(`https://api.api-ninjas.com/v1/airquality?lat=${lat}&lon=${lon}`, options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    }



}