const conexion = require('../database/db');
exports.editarPropuestas = (req, res)=>{
    const id = req.body.id;
    const id_perfil = req.body.id_perfil;
    const En_Movilidad = req.body.En_Movilidad;
    const En_Seguridad = req.body.En_Seguridad;
    const En_Pobreza = req.body.En_Pobreza;
  
    const propuesta = {id_perfil: id_perfil, En_Movilidad: En_Movilidad, En_Seguridad: En_Seguridad,En_Pobreza: En_Pobreza};

    conexion.query('UPDATE propuestas SET ? WHERE id = ?', [propuesta, id], (error, results) => 
        {
        if(error){
            console.log(error);

        }else{
            res.redirect('/propuestas');
        }
    })
}

