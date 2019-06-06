const funciones = require('../funccurso');
const funciestudiante = require('../funciestudiante');
const funcinscribir = require('../funcinscripcion');
const complementos = require('../complementos');
const hbs = require('hbs');

json = require('./../listadocursos.json');

jsonInscripcion = require('./../inscripcion.json');


hbs.registerHelper('creacurso', (id, nombre, modalidad, valor, intensidadH, descripcion, estado) => {
    let texto;

    let cursos = {
        id: id,
        nombre: nombre,
        modalidad: modalidad,
        valor: valor,
        intensidadH: intensidadH,
        descripcion: descripcion,
        estado: estado
    };
    funciones.crear(cursos)


    texto = cursos;

    console.log(texto);

    //texto = 'error'; 

    return texto;
});
hbs.registerHelper('actualizar_estado_curso', (id, estado) => {
    let texto;
    console.log(texto);
    texto = funciones.actualizar(id, estado);

    console.log(texto);
    return texto;
});



hbs.registerHelper('inscribestudiante', (cedula, correo, nombreEst, telefono, id) => {
    let texto;

    let inscribest = {
        cedula: cedula,
        correo: correo,
        nombreEst: nombreEst,
        telefono: telefono,
        id_cursoins: id

    };

    funciestudiante.crearestudiante(inscribest);
    funcinscribir.crearinscripcion(inscribest);
    texto = inscribest;


    return texto;
});
hbs.registerHelper('eliminaestudiante', (curso_id) => {

    funcinscribir.eliminar(curso_id);

});


hbs.registerHelper('actualizarCurso', (id_crs) => {
    let listacursoest = funciones.buscarCurs(id_crs);
    let texto = `                                          
                <form action="/listarcurso_dos" method="post">
                <label>${listacursoest.nombre}</label><br>
                <input   type="text" name="nombre" value="${listacursoest.nombre}" style="visibility:hidden"  ><br>
                <label>${listacursoest.id}</label><br>
                <input   type="text" name="id" value="${listacursoest.id}"  style="visibility:hidden"><br>
                <select name="estado" style="width: 100%;" >`;

    texto = texto +
        `<option value="cerrado">Cerrado</option>
            <option value="abierto">Abierto</option>`

    texto = texto + '</select><td><button class="btn btn-primary mb-2">Actualizar Estado</button></td></form>';
    console.log(texto);
    return texto;



});


hbs.registerHelper('lista_curso_estado', () => {
    let texto = '<form action="/actualizarCurso" method="post"><select name="cursoSelect" style="width: 100%;" >';
    i = 1
    json.forEach(curso => {
        texto = texto +
            `<option value=${curso.id}>${curso.nombre}-(${curso.estado})</option>`
        i = i + 1;
    });
    texto = texto + '</select><td><button class="btn btn-primary mb-2">Actualizar</button></td></form>';
    return texto;
});

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3
});

hbs.registerHelper('listacurso', () => {

    let tabla = `
      <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">codigo</th>
          <th scope="col">Nombre del curso</th>
          <th scope="col">Modalidad</th>
          <th scope="col">Valor</th>
          <th scope="col">Intensidad Horaria</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>`;
    json.forEach((curso, i) => {
        tabla += `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${curso.id}</td>
        <td>${curso.nombre}</td>
        <td>${curso.modalidad}</td>
        <td>${curso.valor}</td>
        <td>${curso.intensidadH}</td>
        <td>${curso.descripcion}</td>
        <td>${curso.estado}</td>
        </tr>`;
    });

    tabla += `
        </tbody>
      </table>`;

    return tabla;
});


hbs.registerHelper('mostrarcurso', () => {
    listarCursos = require('./../listadocursos.json');
    let texto = "<table  class= 'table  table-bordered table-hover table-sm table-striped'>\
                   <thead class='thead-dark'>\
                     <th>id</th>\
                     <th>Codigo</th>\
                     <th>Nombre</th>\
                     <th>Modalidad</th>\
                     <th>Valor</th>\
                     <th>Intensidad Horaria</th>\
                     <th>Descripcion</th>\
                     <th>Estado</th>\
                     </thead>\
                     <tbody>";


    listarCursos.forEach((cursos, i) => {

        texto = texto + '<tr>' +
            `<th scope="row">${i+1}</th>` +
            "<td> " + cursos.id + '</td>' +
            "<td> " + cursos.nombre + '</td>' +
            "<td> " + cursos.modalidad + '</td>' +
            "<td>" + cursos.valor + '</td>' +
            "<td>" + cursos.intensidadH + '</td>' +
            "<td>" + cursos.descripcion + '</td>' +
            "<td>" + cursos.estado + '</td></tr>';

    });
    texto = texto + '</tbody></table>'
    return texto;
});

hbs.registerHelper('lisCursostargets', () => {
    listarCursos = require('./../listadocursos.json');

    let texto =
        "<div class='container'><div class='row align-items-start'><div class='col'><div  class='accordion ' id='accorCursos'>";
    i = 1;
    listarCursos.forEach(cursotarget => {
        texto = texto +
            `<div class="card">

            <div class="card-header text-center" id="heading${i}">
                <h2 class="mb-0">
                    <button class="btn btn-link text-center" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    Curso:${cursotarget.nombre}
                    </button><br>
                    <button class="btn btn-link text-center" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    Valor:${cursotarget.valor}
                    </button>
                </h2>
            </div>
    
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accorCursos">
                <div class="card-body">
                        <p class="font-weight-light">Nombre:${cursotarget.nombre}</p>
                        <p class="font-weight-light">Modalidad:${cursotarget.modalidad}</p>
                        <p class="font-weight-light">Valor:${cursotarget.valor}</p>
                        <p class="font-weight-light">Intensidad Horaria:${cursotarget.intensidadH}Hrs</p>
                        <p class="font-weight-light">Descripcion:${cursotarget.descripcion}</p>
                </div>
            </div></div>`
        i = i + 1;

    })
    texto = texto + '</div></div></div></div>';
    return texto;
});



hbs.registerHelper('listar', () => {
    listarEstudiantes = require('./../listado.json');
    let texto = "<table  class= 'table  table-bordered table-hover table-sm table-striped'>\
                    <thead class='thead-dark'>\
                      <th>Nombre</th>\
                      <th>Matematicas</th>\
                      <th>Ingles</th>\
                      <th>Programacion</th>\
                      </thead>\
                      <tbody>";


    listarEstudiantes.forEach(estudiante => {

        texto = texto + '<tr>' +
            "<td> " + estudiante.nombre + '</td>' +
            "<td> " + estudiante.matematicas + '</td>' +
            "<td> " + estudiante.ingles + '</td>' +
            "<td>" + estudiante.programacion + '</td></tr>';


    });
    texto = texto + '</tbody></table>'
    return texto;
});
hbs.registerHelper('cursosInteresadoSelect', () => {
    listarCursos = require('./../listadocursos.json');
    let texto = '<select style="width: 100%;" name="cursoSelect">';
    listarCursos.forEach(curso =>
        texto = texto +
        `<option value=${curso.id}>${curso.nombre}</option>`
    );
    texto = texto + '</select>';
    return texto;
});
hbs.registerHelper('listar2', () => {
    listarEstudiantes = require('./../listado.json');
    let texto = "<div  class='accordion' id='accordionExample'>";
    i = 1;
    listarEstudiantes.forEach(estudiante => {
        texto = texto +
            `<div class="card">
            <div class="card-header" id="heading${i}">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    ${estudiante.nombre}
                    </button>
                </h2>
            </div>
    
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
                        Tiene una nota de matematicas de ${estudiante.matematicas}<br>
                        Tiene una nota de ingles de ${estudiante.ingles}<br>
                        Tiene una nota de programacion de ${estudiante.programacion}<br>
                </div>
            </div>`
        i = i + 1;

    })
    texto = texto + '</div>';
    return texto;
});


hbs.registerHelper('lista_inscritos', () => {



    texto = "<div class='accordion' id='accordionExample'>";
    i = 1;
    jsonInscripcion.forEach(curso => {
        texto = texto +
            `<div class="card">\
			   			<div class="card-header" id="heading${i}">\
			   				<h2 class="mb-0">\
			   					<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">\
			   						${curso.nombreEst}\
			   					</button>\
			   				</h2>\
			   			</div>`
        texto = texto + `<div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">\
			   		<div class="card-body">`
        texto = texto + '<table class="table"  id="inscritos">\
				  <thead>\
				    <tr>\
				      <th scope="col">Identificacion</th>\
				      <th scope="col">Nombre</th>\
				      <th scope="col">Email</th>\
				      <th scope="col">Telefono</th>\
                      <th scope="col">Curso</th>\
                      <th scope="col">modalidad</th>\
                      <th scope="col">Intensidad Horaria</th>\
				    </tr>\
				  </thead>\
                  <tbody>';
        try {


            if (jsonInscripcion.length == 0) {
                throw new Exception();
            }

            jsonInscripcion.forEach(est => {

                texto = texto + `
							    <tr>
                                    <th scope="row" >${est.cedula}</th>
							      	<td>${est.nombreEst}</td>
							      	<td>${est.correo}</td>
                                    <td>${est.telefono}</td>
                                    <td>${est.nombre}</td>
                                    <td>${est.modalidad}</td>
                                    <td>${est.intensidadH} Hrs</td>
                                <form action="/estudianteeliminado" method="post">
							      	<input type="hidden" name="curso_id" value="${est.id}">
                                      <td>
                                      <button class="btn btn-primary mb-2" >Eliminar</button>
                                      </td>
							    </form>
                                </tr>`;

            });




        } catch (error) {
            texto = texto +
                `<tr>
				<th scope="row" >No hay aun estudiantes</th>
				<td>No hay aun estudiantes</td>
				<td>No hay aun estudiantes</td>
				<td>No hay aun estudiantes</td>
				<td>No hay aun estudiantes</td>
			    </tr>`
        }
        texto = texto + '  </tbody></table>';
        i = i + 1;
        texto = texto + '</div></div></div>';
    });
    texto = texto + '</div>';

    return texto;
});