

// let getNombre = async() => {

//     throw new Error('No existe un nombre para ese usuario');
    
//     return 'Javier';
// }

let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout( () => {
            resolve('Fernando')

        }, 3000 );
    });
}

let saludo = async () => {

    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}


saludo().then(mensaje => {

    console.log(mensaje);
})

console.log(getNombre());