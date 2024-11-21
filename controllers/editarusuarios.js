const conexion = require('../database/db');

exports.editarusuarios = (req, res)=>{
    const id_usuario = req.body.id_usuario;
    const nombre_rol = req.body.nombre_rol;
    const nombre = req.body.nombre;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const fecha_registro = req.body.fecha_registro;
    const estado = req.body.estado;
    const contraseña_hash = req.body.contraseña_hash;


    const usuario = {nombre_rol: nombre_rol, nombre: nombre, email: email,direccion: direccion,fecha_registro:fecha_registro,estado:estado, contraseña_hash:contraseña_hash };

    conexion.query('UPDATE usuarios SET ? WHERE id_usuario = ?', [usuario, id_usuario], (error, results) => {
        
        if(error){
            console.log(error);

        }else{
            res.redirect('/usuarios');
        }
    })
}
