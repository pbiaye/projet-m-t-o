const boutonderecherche = document.querySelector("#btn-recherche");
const rechercheInput = document.querySelector("#recherche-Input");
const emplacement = document.querySelector("#localisation")
const latemperature = document.querySelector("#temperature")
const ladescription = document.querySelector("#description")


boutonderecherche.addEventListener('click', () =>{
    const ville =  rechercheInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=bf50bafcbf6e552afd9f022a6d8aabb6`)
    .then(response => response.json())
    .then(data => {
        emplacement.textContent = data.name;
        latemperature.textContent = `Temperature: ${data.main.temp} °F`;
        ladescription.textContent = `Description: ${data.weather[0].description}`;
    })
})