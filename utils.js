
const colorDivs = document.querySelectorAll('#first-color, #second-color, #third-color, #fourth-color, #fifth-color');
 
export function getColorValue() {
    return document.getElementById('color-selector').value.slice(1)
}

export function getModeValue() {
    return document.getElementById('mode-selector').value

}
export function displayColors(colors) {


    for (let i = 0; i < colorDivs.length; i++) {
        const color = colors[i].hex.value;
        colorDivs[i].style.backgroundColor = color;
        colorDivs[i].textContent = color;
    }
}
export function clipToBoard() {
    colorDivs.forEach((colorDiv) => {
        colorDiv.addEventListener('click', () => {
            const textToCopy = colorDiv.textContent;

            navigator.clipboard.writeText(textToCopy)
                .then(() => alert('Text copied to clipboard'))
                .catch((error) => console.error('Could not copy text: ', error));
        });
    });
}

