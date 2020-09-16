

// function sumar(a, b) {
//     return a + b;
// }

// let sumar = ( a, b ) => a + b;

// console.log(sumar(10,20));

// function saludar() {
//     return 'Hola Mundo desde Javascript';
// }

// let saludar = () => 'Hola Mundo desde Javascript';

// function saludar(nombre) {
//     return `Hola ${ nombre }`
// }

// let saludar = nombre => `Hola ${ nombre }`

// console.log(saludar('Javier'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre () {
        return `${ this.nombre } ${ this.apellido } : ${ this.poder }`
    }
}

console.log(deadpool.getNombre());