const SEPARACION = '\x1b[36m%s\x1b[0m';

class ProgramaTv{
    #powerRangers = "def power rangers";
    #enemigos = "def enemigos";

    constructor(enemigos, powerRangers){
        this.#enemigos = enemigos;
        this.#powerRangers = powerRangers;
    }

    iniciaEpisodio(){
        this.#powerRangers[2].atacaA(this.#enemigos[0]);
        console.log(SEPARACION, "--------------");
        this.#powerRangers[0].atacaA(this.#enemigos[0]);
        console.log(SEPARACION, "--------------");
        this.#enemigos[1].atacaA(this.#powerRangers[1]);
        this.#enemigos[1].atacaA(this.#powerRangers[2]);
        console.log(SEPARACION, "--------------");
        this.#powerRangers[2].atacaA(this.#enemigos[1]);
        console.log(SEPARACION, "--------------");
        this.#enemigos[0].atacaA(this.#powerRangers[2]);
    }
}

module.exports = ProgramaTv;