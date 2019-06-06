const fs = require('fs');
const pathcursojson = `./listadocursos.json`;
listaCursos = [];


const crear = (curso) => {
    listar();
    let cursos = {
        id: curso.id,
        nombre: curso.nombre,
        modalidad: curso.modalidad,
        valor: curso.valor,
        intensidadH: curso.intensidadH,
        descripcion: curso.descripcion,
        estado: curso.estado
    };
    let duplicado = listaCursos.find(numero_id => numero_id.id == curso.id)
    if (!duplicado) {
        listaCursos.push(cursos);
        guardar();
        console.log('se creo un nuevo curso');
    } else {
        console.log('ya existe curso con ese id');
    }

}

const listar = () => {
    try {
        listaCursos = require(pathcursojson);

    } catch (error) {
        alert('error', error)
    }
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'))
}

const guardar = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('src/listadocursos.json', datos, (err) => {
        if (err) throw (err);
    })
}

const buscarCurs = (id) => {
    listar();
    const result = listaCursos.find(idcurs => idcurs.id == id);
    if (!result) return false;
    return result;

}

const actualizar = (id, estad_o) => {
    listar()
    let encontrado = listaCursos.find(buscarid => buscarid.id == id)
    if (!encontrado) {
        console.log('Curso no existe')
    } else {

        encontrado['estado'] = estad_o;
        console.log('Actualizo Estado con exito')

        guardar()
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    buscarCurs

}