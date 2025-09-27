const DB = require("../config/db.js")
const queries = require("../queries/queriesRol.js");

DB.query(queries.crearRol).then(([results]) => {
    console.log(results);
    console.log("✅ Se ha creado la tabla Rol");
}).catch(err => console.log("⚠La consulta 'crearRol' ha fallado",err));

//ESTA QUERY SE UTILIZA PARA INSERTAR LOS VALORES DEFAULT QUE ME FUERON ESPECIFICADOS EN EL PROYECTO POR MI PROFESOR
//VOS PODES COLOCAR LOS QUE QUIERAS DESDE superAdmin O CONECTANDOTE A LA BASE DE DATOS DESDE WORKBEMCH MYSQL COMO HICE YO PARA IR PROBANDO LAS QUERIES.
DB.query(queries.valoresDefault).then(() => {
    console.log("✅ Se han insertado los valores a Rol");
}).catch(err => console.log("⚠ No se han logrado insertar valores a Rol",err));

exports.getRoles = async function(req, res){
    try{
        const [results] = await DB.query(queries.seleccionarRoles);
        if(results.length === 0){
            res.json({mesagge: "Tu tabla esta vacía💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠ La consulta 'seleccionarRoles' ha fallado",error: err})
    };
}

exports.getRolID = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.seleccionarRolID, [id]);
        if(results.length === 0){
        res.json({mesagge: "No se ha encontrado un Rol con ese ID💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarRolID' ha fallado",error: err})};
    };

exports.postRol = async function(req, res){
    const { id, nombre} = req.body;
    try{
        const [results] = await DB.query(queries.añadirRol, [id, nombre]);
        res.json({mesagge: "✅ Se ha creado un nuevo Rol", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'añadirRol' ha fallado",error: err})};
    };

exports.putRol = async function(req, res){
    const { id } = req.params;
    const { newID, newNombre} = req.body;
    try{
        const [results] = await DB.query(queries.actualizarRol, [newID, newNombre, id]);
        res.json({mesagge: "✅ Se ha actualizado un Rol", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'actualizarRol' ha fallado", error: err})};
};

exports.deleteRol = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.borrarRol, [id]);
        if(results.affectedRows === 0){
            res.json({mesagge: "No se ha borrado el Rol seleccionado💬", results: results});
        }
        else{res.json({mesagge: "✅ Se ha borrado el Rol seleccionado", results: results});};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'borrarRol' ha fallado",error: err})};
    };