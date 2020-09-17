const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    },
    pais: {
        alias: 'p',
        desc: 'País elegido',
        demand: true
    }
}).argv;