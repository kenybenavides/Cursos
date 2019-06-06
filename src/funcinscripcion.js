const fs = require('fs');
const funcicurso = require('./funccurso');
const funciestud = require('./funciestudiante');
const pathinscripcion = `./inscripcion.json`;
listainscritos = [];

const crearinscripcion = (estudiante) => {
    listar();
    let listabuest = funciestud.buscarest(estudiante.id_cursoins);
    let listabucurso = funcicurso.buscarCurs(estudiante.id_cursoins);
    if (listabuest.id_cursoins == listabucurso.id) {
        let datos = {
            cedula: listabuest.cedula,
            correo: listabuest.correo,
            nombreEst: listabuest.nombreEst,
            telefono: listabuest.telefono,
            id_cursoins: listabuest.id_cursoins,
            id: listabucurso.id,
            nombre: listabucurso.nombre,
            modalidad: listabucurso.modalidad,
            valor: listabucurso.valor,
            intensidadH: listabucurso.intensidadH,
            descripcion: listabucurso.descripcion
        }


        listainscritos.push(datos);
        console.log('Guardado con exito');
        return guardar();

    } else {
        console.log('no se pudo guardar');
    }

}



const guardar = () => {
    fs.writeFile('src/inscripcion.json', JSON.stringify(listainscritos), (err) => {
        if (err) throw (err);
        return true;
    });
}


const listar = () => {
    try {

        listainscritos = require(pathinscripcion);
    } catch (err) {
        listainscritos = [];

    }
}

const eliminar = (num_id) => {
    listar();
    let nuevo = listainscritos.filter(numero_id => numero_id.id_cursoins == num_id);
    if (nuevo.length == listainscritos.length) {
        console.log('ningun  estudiante tiene el codigo');
    } else {
        listainscritos = nuevo;
        guardar();
        console.log(listar());
        console.log('se ha eliminado un estudiante');

    }
}

const listarDos = () => {
    return listainscritos = require(pathinscripcion);
}

module.exports = {
    crearinscripcion,
    listar,
    listarDos,
    eliminar

}