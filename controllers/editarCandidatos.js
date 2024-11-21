const conexion = require('../database/db');
exports.editarCandidatos = (req, res)=>{
    const id_candidato = req.body.id_candidato;
    const nombre = req.body.nombre;
    const partido = req.body.partido;
    const descripcion = req.body.descripcion;
    const imagen_url = req.body.imagen_url;

    const usuario = {nombre:nombre,partido:partido,descripcion:descripcion,imagen_url:imagen_url};
    conexion.query('UPDATE candidatos SET ? WHERE id_candidato = ?', [candidato, id_candidato], (error, results) => {
        
        if(error){
            console.log(error);

        }else{
            res.redirect('/candidatos');
        }
    })
}

