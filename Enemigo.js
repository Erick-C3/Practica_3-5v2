const Personaje = require("./Personaje.js");

const COLOR_ENEMIGO = '\x1b[34m%s\x1b[0m';

class Enemigo extends Personaje{
    constructor(nombre, puntosAtaque, puntosVida){
        super(nombre, puntosAtaque, puntosVida, COLOR_ENEMIGO);
    }
}

module.exports = Enemigo;