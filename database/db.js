const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:"localhost",
    database:"votacionesdb",
    user:"root",
    password:""
});
conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion es:'+error);
        return
    
    }
    console.log('!conectado a la base de datos!');
    });
    module.exports = conexion;