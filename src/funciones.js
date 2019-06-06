/*const fs = require('fs');
listaEstudiantes = [];


const crear = (estudiante) =>{
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if(!duplicado){
    listaEstudiantes.push(est);
    //console.log(listaEstudiantes)
    guardar();
    console.log('se creo un nuevo estudiante');
    }else{
        console.log('ya existe estudiante con ese nombre');
    }
    
}
const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');

    }catch(error){
        listaEstudiantes = [];
    }
    
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'))
}




const guardar = () =>{
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err) throw (err);
    })
}
const  mostrar = () =>{
    listar()
    console.log('Notas de los Estudiantes')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre),
        console.log('notas '),
        console.log('matematicas ' + estudiante.matematicas),
        console.log('igles '+ estudiante.ingles),
        console.log('programacion '+ estudiante.programacion +'\n')    

    });
}

const mostrarest = (nom) =>{
    listar();
    let est = listaEstudiantes.find(buscarnom => buscarnom.nombre == nom)
    if(!est){
    
    console.log('No existe este estudiante')
    
    }else{
        console.log(est.nombre),
        console.log('notas '),
        console.log('matematicas ' + est.matematicas),
        console.log('igles '+ est.ingles),
        console.log('programacion '+ est.programacion +'\n')    

       
    }


}
const mostrarmat = () =>{
    listar();
    let ganan = listaEstudiantes.filter(mat =>  mat.matematicas >= 3)
    if(ganan.length ==0){
        console.log('nigun estudiante ha ganado');
    }else{
       ganan.forEach(estudiante => {
            console.log(estudiante.nombre),
            console.log('notas '),
            console.log('matematicas ' + estudiante.matematicas)
        });
    }
}
const obtenerpromedio = (nom) =>{
    listar();
    let estu = listaEstudiantes.find(buscarnom => buscarnom.nombre == nom)
    let promediog= (estu.matematicas + estu.ingles + estu.programacion) /3;

    if(!estu){
    
        console.log('No existe este estudiante')
        
        }else{
            console.log(estu.nombre),
            console.log('promedio general')
            console.log(''+Math.round(promediog))                       
            console.log('promedio por materia '),
            console.log('promedio matematicas ' + Math.round(estu.matematicas / 3)),
            console.log('promedio igles '+ Math.round(estu.ingles / 3)),
            console.log('promedio programacion '+ Math.round(estu.programacion/3) +'\n')    
           
        }
}

const promediotres = () =>{
    listar();
    let pasa = listaEstudiantes.filter(mat =>  (mat.matematicas+ mat.ingles+ mat.programacion)/3 >= 3);
    if(pasa.length ==0){
        console.log('nigun estudiante ha ganado');
    }else{
       pasa.forEach(estudiante => {
            console.log(estudiante.nombre),
            console.log('notas '),
            console.log('promedio '+Math.round((estudiante.matematicas+estudiante.matematicas+estudiante.matematicas)/3))
        });
    }


}

const actualizar = (nom, asignatura,calificacion)=>{
    listar()
    let encontrado = listaEstudiantes.find(buscarnom => buscarnom.nombre == nom) 
    if (!encontrado) {
        console.log('estudiante no existe')
    } else {
        encontrado[asignatura] = calificacion;
        guardar()
    }

}
const eliminar = (nom)=>{
    listar();
    let nuevo = listaEstudiantes.filter(nomb =>  nomb.nombre != nom);
    if(nuevo.length == listaEstudiantes.length){
        console.log('nigun  estudiante tiene el nombre');
    }else{
        listaEstudiantes = nuevo
        guardar()
        console.log('se ha eliminado un estudiante');
    }
}
module.exports ={
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    obtenerpromedio,
    promediotres,
    actualizar,
    eliminar

}
*/