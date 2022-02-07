
const { crearArchivo } = require('./helpers/multiplicar-async');
const argv = require('./config/yargs');

// const { crearArchivo } = require('./helpers/multiplicar-promise');




console.clear();

crearArchivo( argv.b, argv.l, argv.h )
.then(nombrefile => console.log( nombrefile, 'creada') )
    .catch(err => console.log(err));