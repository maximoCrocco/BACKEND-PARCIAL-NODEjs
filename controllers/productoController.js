const DB = require("../config/db");
const queries = require("../queries/queriesProducto");

DB.query(queries.crearProductos).then(([results]) => {
    console.log(results);
    console.log("✅ Se ha creado la tabla Producto");
}).catch(err => console.log("⚠La consulta 'crearProductos' ha fallado",err));

exports.getProductos = async function(req, res){
    try{
        console.log(req.originalUrl)
        const [results] = await DB.query(queries.seleccionarProductos);
        if(results.length === 0){
            res.json({mesagge: "Tu tabla esta vacía💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarProductos' ha fallado",error: err})
    };
}

exports.getProductoID = async function(req, res){
    const {id} = req.params;
    try{
        console.log(req.originalUrl)
        const [results] = await DB.query(queries.seleccionarProductoID, [id]);
        if(results.length === 0){
        res.json({mesagge: "No se ha encontrado un Producto con ese ID💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarProductoID' ha fallado",error: err})};
    };

exports.postProducto = async function(req, res){
    const {nombre, descripcion, precio} = req.body;
    try{
        const [results] = await DB.query(queries.añadirProducto, [nombre, descripcion, precio]);
        res.json({mesagge: "✅ Se ha creado un nuevo Producto", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'añadirProducto' ha fallado",error: err})};
    };

exports.putProducto = async function(req, res){
    const { id } = req.params;
    const { newID, newNombre, newDescripcion, newPrecio } = req.body;
    try{
        const [results] = await DB.query(queries.actualizarProducto, [newID, newNombre, newDescripcion, newPrecio, id]);
        res.json({mesagge: "✅ Se ha actualizado un nuevo Producto", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'actualizarProducto' ha fallado", error: err})};
};

exports.deleteProducto = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.borrarProducto, [id]);
        if(results.affectedRows === 0){
            res.json({mesagge: "No se ha borrado el Producto seleccionado💬", results: results});
        }
        else{res.json({mesagge: "✅ Se ha borrado un Producto", results: results});};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'borrarProducto' ha fallado",error: err})};
    };