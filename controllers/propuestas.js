const conexion = require('../database/db');
exports.gu = (req, res)=>{
    const id_perfil = req.body.id_perfil;
    const En_Movilidad = req.body.En_Movilidad;
    const En_Seguridad = req.body.En_Seguridad;
    const En_Pobreza = req.body.En_Pobreza;
    const imagen_url = req.body.imagen_url;
    conexion.query('INSERT INTO propuestas SET ?',{id_perfil:id_perfil,En_Movilidad:En_Movilidad,En_Seguridad:En_Seguridad,En_Pobreza:En_Pobreza}, (error, results)=>
    {
        if(error){
            console.log(error);

        }else{
            res.redirect('/propuestas');
        }
    })
}

