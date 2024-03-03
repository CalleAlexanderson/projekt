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
    document.getElementById('place_information').innerHTML = `Plats: ${input.value.toUpperCase()}, generell AQI: ${data.overall_aqi}`;

    let parentDiv = document.getElementById('place_information_div');
    parentDiv.innerHTML = "";
    let dataArr = ["CO", "NO2", "O3", "SO2", "PM2.5", "PM10"];
    let dataArrNamesSv = ["Kolmonoxid", "Kvävedioxid", "Ozon", "Svaveldioxid", "PM2.5 partiklar", "PM10 partiklar"];
    let dataArrNamesEng = ["Carbon monoxide", "Nitrogen dioxide", "Ozone", "Sulphur dioxide", "PM2.5 particulates", "PM10 particulates"];

    for (let index = 0; index < dataArr.length; index++) {
        let p = document.createElement('p');
        console.log(document.getElementsByClassName('langBtn')[0].style.backgroundColor);
        if (document.getElementsByClassName('langBtn')[0].style.backgroundColor == "rgb(38, 110, 192)") {
            p.innerHTML = `${dataArrNamesSv[index]} (${dataArr[index]}) AQI: ${data[dataArr[index]].aqi} <br> koncentration: ${data[dataArr[index]].concentration}`;
        } else{
            p.innerHTML = `${dataArrNamesEng[index]} (${dataArr[index]}) AQI: ${data[dataArr[index]].aqi} <br> concentration: ${data[dataArr[index]].concentration}`;
        }
        parentDiv.appendChild(p);
    }
}