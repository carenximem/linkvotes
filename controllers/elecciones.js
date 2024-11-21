const conexion = require('../database/db');

exports.sa = (req, res)=>{
    const id_eleccion = req.body.id_eleccion;
    const nombre_eleccion = req.body.nombre_eleccion;
    const descripcion = req.body.descripcion;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

    conexion.query('INSERT INTO elecciones SET ?',{id_eleccion:id_eleccion,nombre_eleccion:nombre_eleccion,descripcion:descripcion,fecha_inicio:fecha_inicio,fecha_fin:fecha_fin}, (error, results)=>
    {
        if(error){
            console.log(error);

        }else{
            res.redirect('/elecciones');
        }
    })
}