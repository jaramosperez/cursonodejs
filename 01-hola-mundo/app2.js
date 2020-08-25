function saludar (nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje
}

let saludo = saludar('Javier');
console.log(saludo);