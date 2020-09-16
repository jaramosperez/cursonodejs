
// setTimeout( function () {
//     console.log('Esto es un callback');
// }, 3000 );

// setTimeout( () => {
//     console.log('Esto es un callback y función de flecha');
// }, 4000 );

let getUsuarioById = ( id, callback ) => {
    let usuario = {
        nombre: 'Javier',
        id
    }

    if ( id === 20 ) {
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback( null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
})