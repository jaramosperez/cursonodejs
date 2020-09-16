// Importando File system.
const fs = require('fs');
var colors = require('colors');


// Funciones.

let listarTabla = ( base, limite = 10 ) => {
// Lista por consola la tabla de multiplicar
    return new Promise( (resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Debe ingresar solamente números')
            return;
        }
        let data = '';
        for(i = 0; i <= limite; i++ ) {
            resolve(console.log(`${ base } * ${ i } = ${base*i}`.green));
        }

    });

}


let crearArchivo = ( base, limite = 10 ) => {
// Crea el un archivo de texto con la tabla de multiplicar
    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base } no es un número.`)
            return;
        }

        let data = '';
        for (i = 0; i <=limite; i++) {
            data += `${ base } * ${ i } = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        if (err) reject(err)
        else
            resolve(`tablas/tabla-${ base }-al-${ limite }.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}