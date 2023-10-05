const ProgramaTv = require("./ProgramaTv.js");
const enemigos = require("./enemigos.js");
const powerRangers = require("./powerRangers.js");


const programaPowerRangers = new ProgramaTv(enemigos, powerRangers);

programaPowerRangers.iniciaEpisodio();
