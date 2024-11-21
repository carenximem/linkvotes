const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/', (req, res) => {
   res.render('../login');
});

// registros de elecciones
router.get('/elecciones', (req, res) => {
    conexion.query('SELECT * FROM elecciones', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('elecciones', { results: results });
        }
    });
});

router.get('/createElecciones', (req, res) => {
    res.render('createElecciones');
});


router.get('/candidatos', (req, res) => {
    conexion.query('SELECT * FROM candidatos', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('candidatos', { results: results });
        }
    });
});

//  registros de usuarios
router.get('/usuarios', (req, res) => {
    conexion.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('usuarios', { results: results });
        }
    });
});

//  registros de votación
router.get('/p_votacion', (req, res) => {
    conexion.query('SELECT * FROM candidatos', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('p_votacion', { results: results });
        }
    });
});
router.get('/propuestasCandidatos', (req, res) => {
    conexion.query('SELECT propuestas.*, candidatos.nombre, candidatos.imagen_url FROM propuestas JOIN perfil_candidato ON propuestas.id_perfil = perfil_candidato.id JOIN candidatos ON perfil_candidato.id_candidato = candidatos.id_candidato', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('propuestasCandidatos', { results: results });
        }
    });
});



router.get('/perfiles', (req, res) => {
    conexion.query('SELECT perfil_candidato.*, candidatos.nombre, candidatos.imagen_url FROM perfil_candidato JOIN candidatos ON perfil_candidato.id_candidato = candidatos.id_candidato', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('perfiles', { results: results });
        }
    });
});

router.get('/propuestasCandidatos', (req, res) => {
    conexion.query('SELECT propuestas.*, candidatos.nombre, candidatos.imagen_url FROM propuestas JOIN perfil_candidato ON propuestas.id_perfil = perfil_candidato.id JOIN candidatos ON perfil_candidato.id_candidato = candidatos.id_candidato', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('propuestasCandidatos', { results: results });
        }
    });
});

router.get('/propuestas', (req, res) => {
    conexion.query('SELECT propuestas.id, perfil_candidato.id_candidato, candidatos.nombre AS nombre_candidato, propuestas.En_Movilidad, propuestas.En_Seguridad, propuestas.En_Pobreza FROM propuestas JOIN perfil_candidato ON propuestas.id_perfil = perfil_candidato.id JOIN candidatos ON perfil_candidato.id_candidato = candidatos.id_candidato', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('propuestas', { results: results });
        }
    });
});

router.get('/perfil', (req, res) => {
    conexion.query(' SELECT perfil_candidato.id, candidatos.nombre AS nombre_candidato, perfil_candidato.estudios_academicos, perfil_candidato.logros_reconocimientos, perfil_candidato.antecedentes FROM perfil_candidato JOIN candidatos ON perfil_candidato.id_candidato = candidatos.id_candidato ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('perfil', { results: results });
        }
    });
});
    router.get('/createperfil', (req, res) => {
        conexion.query('SELECT id_candidato, nombre FROM candidatos', (error, results) => {
            if (error) {
                throw error;
            } else {
                res.render('createperfil', { results: results });
            }
        });
    });
router.get('/index', (req, res) => {
    conexion.query('SELECT candidatos.nombre, COUNT(votos.id_voto) as total_votos FROM votos JOIN candidatos ON votos.id_candidato = candidatos.id_candidato GROUP BY candidatos.nombre', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
});



router.get('/createcandidatos', (req, res) => {
    res.render('createcandidatos');
});
router.get('/createperfil', (req, res) => {
    res.render('createperfil');
});
router.get('/createpropuestas', (req, res) => {
    res.render('createpropuestas');
});
router.get('/createusuarios', (req, res) => {
    res.render('createusuarios');
});
router.get('/createpropuesta', (req, res) => {
    res.render('createpropuesta');
});
//efitar
router.get('/editUsuarios', (req, res) => {
    res.render('editUsuarios');
});

router.get('/editCandidatos', (req, res) => {
    res.render('editCandidatos');
});
router.get('/editElecciones', (req, res) => {
    res.render('editElecciones');
});
router.get('/perfiles', (req, res) => {
    res.render('perfiles');
});
// guard
const crud = require('./controllers/crud');
router.post('/save', crud.save);
const usuarios = require('./controllers/usuarios');
router.post('/sav', usuarios.sav);
const elecciones = require('./controllers/elecciones');
router.post('/sa', elecciones.sa);
const propuestas = require('./controllers/propuestas');
router.post('/gu', propuestas.gu);

const peril = require('./controllers/peril');
router.post('/gur', peril.gur);

const votar = require('./controllers/votar');
router.post('/votar', votar.votar);

const editElecciones = require('./controllers/editElecciones');
router.post('/editElecciones', editElecciones.editElecciones);
const editarusuarios = require('./controllers/editarusuarios');
router.post('/editarusuarios', editarusuarios.editarusuarios);

module.exports = router;
