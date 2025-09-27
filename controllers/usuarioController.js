const DB = require("../config/db.js");
const bcrypt = require("bcrypt");
const queries = require("../queries/queriesUsuarios.js");

DB.query(queries.crearUsuarios).then(([results]) => {
    console.log("✅ Se ha creado la tabla Usuario");
    console.log(results);
}).catch(err => console.log("⚠La consulta 'crearUsuarios' ha fallado",err));

DB.query(queries.añadirIndexForeignKey).then(() => {
    console.log("✅ Se ha añadido un Index a Usuario");
}).catch(err => console.log("⚠La consulta 'añadirIndexForeignKey' ha fallado",err));

DB.query(queries.añadirForeignKey).then(() => {
    console.log("✅ Se ha añadido la Foreign Key a Usuario");
}).catch(err => console.log("⚠La consulta 'añadirForeignKey' ha fallado",err));

//NO ES NECESARIO ESTA FUNCION SI CREAS AL SUPER ADMIN DESDE LA BASE DE DATOS, PERO PARA QUE SE CONVIERTA MAS SENCILLO LO HE AGREDADO
//PODES COMENTAR ESTA FUNCION SI GUSTAS, SOLO NO TE OLVIDES DE CREAR UN USUARIO CON superAdmin
async function superAdmin(){
    const contraseñaBCRYPT = await bcrypt.hash("admin123", 10);
    try{
        const [results] = await DB.query(`INSERT INTO usuario (nombre, apellido, email, contraseña, telefono, direccion, id_rol) VALUES ('super', 'admin', 'admin@email.com', ?, '0000-0000000', 'Local', 1);`,[contraseñaBCRYPT]);
        console.log("✅ Se ha registrado el superAdmin", results);
    }
    catch(err){return res.status(500).json({message:"⚠ Agregar superAdmin ha fallado",error: err})};
    };
superAdmin();

exports.getUsuarios = async function(req, res){
    try{
        const [results] = await DB.query(queries.seleccionarUsuarios);
        if(results.length === 0){
            res.json({mesagge: "Tu tabla esta vacía💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarUsuarios' ha fallado",error: err})
    };
}

exports.getUsuarioID = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.seleccionarUsuarioID, [id]);
        if(results.length === 0){
        res.json({mesagge: "No se ha encontrado un Usuario con ese ID💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarUsuarioID' ha fallado",error: err})};
    };

exports.postUsuario = async function(req, res){
    const {nombre, apellido, email, contraseña, telefono, direccion, idROL} = req.body;
    const contraseñaBCRYPT = await bcrypt.hash(contraseña, 10);
    try{
        const [results] = await DB.query(queries.añadirUsuario, [nombre, apellido, email, contraseñaBCRYPT, telefono, direccion, idROL]);
        res.json({mesagge: "✅ Se ha registrado un nuevo Usuario", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'añadirUsuario' ha fallado",error: err})};
    };

exports.putUsuario = async function(req, res){
    const { id } = req.params;
    const {newID, newNombre, newAPellido, newEmail, newContraseña, newTelefono, newDireccion, newIdRol} = req.body;
    const contraseñaBCRYPT = await bcrypt.hash(newContraseña, 10);
    try{
        const [results] = await DB.query(queries.actualizarUsuario, [newID, newNombre, newAPellido, newEmail, contraseñaBCRYPT, newTelefono, newDireccion, newIdRol, id]);
        res.json({mesagge: "✅ Se ha actualizado un Usuario", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'actualizarUsuario' ha fallado", error: err})};
};

exports.deleteUsuario = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.borrarUsuario, [id]);
        if(results.affectedRows === 0){
            res.json({mesagge: "No se ha borrado el Usuario seleccionado💬", results: results});
        }
        else{res.json({mesagge: "✅ Se ha borrado un Usuario", results: results});};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'borrarUsuario' ha fallado",error: err})};
    };