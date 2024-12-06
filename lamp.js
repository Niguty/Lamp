const button = document.getElementById('switchButton')
const lamp = document.getElementById('lamp')

let isLampOn = false;
let click = false;

lamp.addEventListener('click', () => {
    if(click) {
        lamp.src = 'images/lampQuebrada.png'
    }
})

button.addEventListener('click', () => {

    if(isLampOn) {
        lamp.src = 'images/luzApagada.png';
        button.textContent = 'Switch'
        document.body.style.backgroundColor = '#667';
    } else {
        lamp.src = 'images/luzAcesa.png';
        button.textContent = 'Switch';
        document.body.style.backgroundColor = 'yellow';
    }

    isLampOn = !isLampOn
})