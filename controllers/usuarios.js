const conexion = require('../database/db');

exports.sav = (req, res)=>{
    const id_usuario = req.body.id_usuario;
    const nombre_rol = req.body.nombre_rol;
    const nombre = req.body.nombre;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const fecha_registro = req.body.fecha_registro;
    const estado = req.body.estado;
    const contraseña_hash = req.body.contraseña_hash;

    conexion.query('INSERT INTO usuarios SET ?',{id_usuario:id_usuario,nombre:nombre,email:email,direccion:direccion,fecha_registro:fecha_registro,estado:estado,nombre_rol:nombre_rol,contraseña_hash:contraseña_hash}, (error, results)=>
    {
        if(error){
            console.log(error);

        }else{
            res.redirect('/usuarios');
        }
    })
}
