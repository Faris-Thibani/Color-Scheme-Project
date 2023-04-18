import  {getColorValue, getModeValue, displayColors, clipToBoard} from "./utils.js"

const button = document.getElementById('get-scheme')

button.addEventListener('click', () => {
    let color = getColorValue()
    let mode = getModeValue()
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`,
        { method: "GET" }).then(response => response.json())
        .then(data => displayColors(data.colors))
        .catch(error => console.error(error));
})

clipToBoard()