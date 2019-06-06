const fs = require('fs');
const path = `./estudiante.json`;
listaestudiantes = [];

const crearestudiante = (estudiante) => {
    listar();

    let datos = {
        cedula: estudiante.cedula,
        correo: estudiante.correo,
        nombreEst: estudiante.nombreEst,
        telefono: estudiante.telefono,
        id_cursoins: estudiante.id_cursoins
    }

    listaestudiantes.push(datos);
    return guardar();
}


const guardar = () => {
    fs.writeFile('src/estudiante.json', JSON.stringify(listaestudiantes), (err) => {
        if (err) throw (err);
        return true;
    });
}


const listar = () => {
    try {
        listaestudiantes = require(path);
    } catch (err) {
        listaestudiantes = [];

    }
}



const buscarest = (id_est) => {
    listar();
    const result = listaestudiantes.find(idcurs => idcurs.id_cursoins == id_est);
    if (!result) return false;
    return result;

}


module.exports = {
    crearestudiante,
    buscarest

}