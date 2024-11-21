const conexion = require('../database/db');

exports.votar = (req, res) => {
   
    const id_candidato = req.body.id_candidato;
  

    const voto = {
       
        id_candidato: id_candidato,
   
        fecha_voto: new Date()
    };

    conexion.query('INSERT INTO votos SET ?', voto, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/p_votacion');  // Ruta correcta de redirección
        }
    });
};
