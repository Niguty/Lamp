class Lamp {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.turn = inital.turn
    }

createElement(){
    const lamp = document.createElement('div')
        lamp.classList.add('lamp')
    
    const lampOff = document.createElement('div')
        lampOff.classList.add('lampOff')
    
    const lampOn = document.createElement('div')
        lampOn.classList.add('lampOn')
    }
    
}