
const fs = require('fs');

const crearArchivo = ( base  ) => {

    return new Promise( (resolve, reject) => {

        console.log('=====================');
        console.log(' Tabla del', base );
        console.log('=====================');
              
        let salida = '';
        
        for (i = 1; i <= 10; i++) {
            salida += `${ base } X ${ i } = ${ base * i }\n`;
        }
        
        console.log(salida);

        fs.writeFileSync( `tabla-${ base }.txt`, salida );

        resolve(`tabla-${ base }.txt`);
    
})
}

module.exports = {
    crearArchivo
 }