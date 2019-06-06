const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const dirNode_modules = path.join(__dirname, '../node_modules');

require('./helpers/helpers');



const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Bienvenido a la pagina de Inicio'
    });
});

app.post('/calculos', (req, res) => {

    res.render('calculos', {
        titulo: 'Calculos',
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)

    });
});

app.post('/listacurso', (req, res) => {
    res.render('listacurso', {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        modalidad: req.body.modalidad,
        valor: parseInt(req.body.valor),
        intensidadH: parseInt(req.body.intensidadH),
        descripcion: req.body.descripcion,
        estado: "cerrado"

    });

});
app.post('/actualizarCurso', (req, res) => {
    res.render('actualizarCurso', {
        id: parseInt(req.body.cursoSelect)
    });
});
app.post('/listarinscritos', (req, res) => {
    res.render('listarinscritos', {

        cedula: parseInt(req.body.cedula),
        correo: req.body.correo,
        nombreEst: req.body.nombreEst,
        telefono: parseInt(req.body.telefono),
        id_cursoins: parseInt(req.body.cursoSelect)
    });
});
app.post('/listarcurso_dos', (req, res) => {

    res.render('listarcurso_dos', {
        id: req.body.id,
        estado: req.body.estado
    });

});
app.get('/listado', (req, res) => {
    res.render('listado', {
        titulo: 'Bienvenido listado Estudiante'
    });
});
app.get('/promedio', (req, res) => {
    res.render('promedio', {
        titulo: 'Calcular Promedio'
    });
});
app.get('/mostrarcurso', (req, res) => {
    res.render('mostrarcurso', {
        titulo: 'Bienvenido a la pagina de Cursos'
    });
});
app.get('/inscribestudiante', (req, res) => {
    res.render('inscribestudiante', {
        titulo: 'Bienvenido a la pagina de Inscribir Estudiantes'
    });
});

app.get('/creacurso', (req, res) => {
    res.render('creacurso', {
        titulo: 'Bienvenido a la pagina de Cursos'
    });
});
app.get('/verinscritos', (req, res) => {
    res.render('verinscritos', {
        titulo: 'Bienvenido a la pagina de Inscritos'
    });
});
app.post('/estudianteeliminado', (req, res) => {
    res.render('estudianteeliminado', {
        id: req.body.curso_id
    });

});
app.get('/listacurso', (req, res) => {
    res.render('listacurso');
});


app.get('*', (req, res) => {
        res.render('error', {
            estudiante: 'error'
        })
    })
    //console.log(__dirname);
app.listen(3000, () => {
    console.log('escuchando en el puerto 3000')
});