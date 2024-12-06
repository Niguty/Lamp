const button = document.getElementById('switchButton')
const lamp = document.getElementById('lamp')

let isLampOn = false;

button.addEventListener('click', () => {

    if(isLampOn) {
        opcao = (Math.random() * max);
        lamp.src = 'luzApagada.png';
        button.textContent = 'Switch'
    } else {
        lamp.src = 'luzAcesa.png';
        button.textContent = 'Switch';
    }

    isLampOn = !isLampOn
})