
const { clear } = require('console');
const { boolean } = require('yargs');


const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
})

.option('h', {
    alias: 'hasta',
    type: 'number',
    describe:'Este es el número hasta donde llega la tabla'
})

.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.check( (argv, option ) => {
    if( isNaN( argv.b ) ){
        throw 'La base tiene que ser un numero'
    }
    return true
})           
 .argv;

console.log(clear);
 module.exports = argv;