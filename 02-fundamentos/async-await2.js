let empleados = [{
    id: 1,
    nombre: 'Javier'
}, {
    id: 2,
    nombre: 'Claudia'
}, {
    id: 3,
    nombre: 'Yanina'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];



let getEmpleado = async (id) => {
    // Función que retorna un empleado cuando se le pasa un id.
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el ID ${id}`);
        } else {
            return empleadoDB;
        }
}

let getSalario = async (empleado) => {
    // Función de busqueda del sueldo de un empleado por id.
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            throw new Error(`No existe un salario para el empleado ${empleado.nombre}`);
        } else {
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
        }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    console.log(resp);
    return `${ resp.nombre } tiene un salario de $${ resp.salario }`;
}

getInformacion(2)
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err))
