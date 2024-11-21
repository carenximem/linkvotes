const conexion = require('../database/db');
exports.gur= (req, res)=>{
    const id_candidato = req.body.id_candidato;
    const estudios_academicos= req.body.estudios_academicos;
    const logros_reconocimientos = req.body.logros_reconocimientos;
    const antecedentes = req.body.antecedentes;
    conexion.query('INSERT INTO perfil_candidato SET ?',{id_candidato:id_candidato,estudios_academicos:estudios_academicos,logros_reconocimientos:logros_reconocimientos,antecedentes:antecedentes}, (error, results)=>
    {
        if(error){
            console.log(error);

        }else{
            res.redirect('/perfil');
        }
    })
}

