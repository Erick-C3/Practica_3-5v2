const Personaje = require("./Personaje.js");

const COLOR_POWER_RANGER = '\x1b[31m%s\x1b[0m';

class PowerRanger extends Personaje{
    constructor(nombre, puntosAtaque, puntosVida){
        super(nombre, puntosAtaque, puntosVida, COLOR_POWER_RANGER);
    }
}


module.exports = PowerRanger;