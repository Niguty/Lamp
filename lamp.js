const button = document.getElementById('switchButton')
const lamp = document.getElementById('lamp')

let isLampOn = false;
let isBroken = false;

lamp.addEventListener('click', () => {
    if(!isBroken) {
        lamp.src = 'images/lampQuebrada.png'
        button.textContent = 'Lâmpada Quebrada'
        document.body.style.backgroundColor = '#667';
        button.disabled = true;
        isBroken = true
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