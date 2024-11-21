const conexion = require('../database/db');

exports.editElecciones = (req, res) => {
    const id_eleccion = req.body.id_eleccion;
    const nombre_eleccion = req.body.nombre;
    const descripcion = req.body.descripcion;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

    const eleccion = {nombre_eleccion: nombre_eleccion, descripcion: descripcion, fecha_inicio: fecha_inicio,fecha_fin: fecha_fin};

    conexion.query('UPDATE elecciones SET ? WHERE id_eleccion = ?', [eleccion, id_eleccion], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/elecciones');
        }
    });
};
