const conexion = require('../database/db');
exports.save = (req, res)=>{
    const id_candidato = req.body.id_candidato;
    const nombre = req.body.nombre;
    const partido = req.body.partido;
    const descripcion = req.body.descripcion;
    const imagen_url = req.body.imagen_url;
    conexion.query('INSERT INTO candidatos SET ?',{id_candidato:id_candidato,nombre:nombre,partido:partido,descripcion:descripcion,imagen_url:imagen_url}, (error, results)=>
    {
        if(error){
            console.log(error);

        }else{
            res.redirect('/candidatos');
        }
    })
}

