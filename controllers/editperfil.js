const conexion = require('../database/db');
exports.editperfil= (req, res)=>{
    const id_candidato = req.body.id_candidato;
    const estudios_academicos= req.body.estudios_academicos;
    const logros_reconocimientos = req.body.logros_reconocimientos;
    const antecedentes = req.body.antecedentes;
    const perfil = {estudios_academicos:estudios_academicos,logros_reconocimientos:logros_reconocimientos,antecedentes:antecedentes};
    conexion.query('UPDATE perfil_candidato SET ? WHERE id_candidato = ?', [perfil, id_candidato], (error, results) => {
        
        if(error){
            console.log(error);

        }else{
            res.redirect('/perfil');
        }
    })
}

