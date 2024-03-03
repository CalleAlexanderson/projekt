// Globala konstanter och variabler
let input;
// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    input = document.getElementById('search');
    document.getElementById('serach_btn').addEventListener('click', getAIQstats);
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function getAIQstats() {
    let inputValue = input.value;
    let inputForFetch = inputValue.replace(/\s/g, '+')

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${inputForFetch}&format=jsonv2&limit=1`);
        cordsData = await response.json();
    } catch (error) {
        console.log(error);
    }

    if (cordsData != null) {
        let lat = cordsData[0].lat;
        let lon = cordsData[0].lon;
        const options = {
            method: 'GET',
            headers: { 'X-Api-Key': 'wrWkYLoRM98tlbLu0CgjjA==VxslqbabF3vOSqvJ' },
            contentType: 'application/json',
        };

        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/airquality?lat=${lat}&lon=${lon}`, options);
            aqiData = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    if (aqiData != null) {
        console.log(aqiData);
        displayData(aqiData);
    }
}

async function displayData(data) {
    console.log("works");
    document.getElementById('place_information').innerHTML = `Plats: ${input.value.toUpperCase()}, generell AQI: ${data.overall_aqi}`;
}