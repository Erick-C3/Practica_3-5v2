const COLOR_PERSONAJE = '\x1b[33m%s\x1b[0m';

class Personaje{
    #nombre = "def nombre";
    #puntosAtaque = 0;
    #puntosVida = 0;
    #color = COLOR_PERSONAJE;

    /**
     * Inicializa el objeto personaje
     * @param {String} nombre del personaje
     * @param {Number} puntosAtaque del personaje
     * @param {Number} puntosVida del personaje
     */
    constructor(nombre, puntosAtaque, puntosVida, color){
        this.#nombre = nombre;
        this.#puntosAtaque = puntosAtaque;
        this.#puntosVida = puntosVida;
        this.#color = color;
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }

    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }

    getPuntosAtaque(){
        return this.#puntosAtaque;
    }

    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    atacaA(unEnemigo){
        this.habla("Soy "+ this.constructor.name+ " " + this.getNombre());
        if (this.#puntosVida > 0) {
            if (unEnemigo.getPuntosVida() > 0) {
                this.habla("Estoy atacando a "+ unEnemigo.getNombre());
                this.habla("con "+ this.getPuntosAtaque() + " puntos ataque");
                unEnemigo.defenderseDe(this);
            }else{
                this.habla(unEnemigo.getNombre()+ " Esta muy debil para pelear");
            }
        }else{
            this.habla("No puedo atacar, estoy herido!");
        }
    }

    habla(msj) {
        console.log(this.#color, msj);
    }

    defenderseDe(enemigoAtacante){
        this.habla("Soy "+ this.constructor.name+ " " +  this.getNombre());
        this.habla("Me estoy defendiendo de "+ enemigoAtacante.getNombre());
        // this.#puntosVida-= powerRangerAtacante.getPuntosAtaque();
        this.setPuntosVida(this.getPuntosVida() - enemigoAtacante.getPuntosAtaque());
        if (this.getPuntosVida() > 0) {
            this.habla("Me quedan "+ this.getPuntosVida() + " puntos vida");
            this.atacaA(enemigoAtacante);
        }else{
            this.habla("Estoy derrotado :(");
        }
    }
}

module.exports = Personaje;