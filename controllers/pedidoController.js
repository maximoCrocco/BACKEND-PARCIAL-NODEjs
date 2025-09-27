const DB = require("../config/db");
const queries = require("../queries/queriesPedido");

DB.query(queries.crearPedidos).then(([results]) => {
    console.log(results);
    console.log("✅ Se ha creado la tabla Pedido");
}).catch(err => console.log("⚠La consulta 'crearPedidos' ha fallado",err));

DB.query(queries.añadirIndexForeignKey).then(() => {
    console.log("✅ Se ha añadido el Index de Pedido");
}).catch(err => console.log("⚠La consulta 'añadirIndexForeignKey' ha fallado",err));

DB.query(queries.añadirForeignKey).then(() => {
    console.log("✅ Se ha añadido la ForeignKey de Pedido");
}).catch(err => console.log("⚠La consulta 'añadirForeignKey' ha fallado",err));

exports.getPedidos = async function(req, res){
    try{
        const [results] = await DB.query(queries.seleccionarPedidos);
        if(results.length === 0){
            res.json({mesagge: "Tu tabla esta vacía💬"});
        }
        else{
            const user = results[0]
            res.json({usuario: user, results: results});
        };
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarPedidos' ha fallado",error: err})
    };
}

exports.getPedidoID = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.seleccionarPedidoID, [id]);
        if(results.length === 0){
        res.json({mesagge: "No se ha encontrado un Pedido con ese ID💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'seleccionarPedidoID' ha fallado",error: err})};
    };

exports.getLista = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.listaPedidoUsuarioProducto, [id]);
        if(results.length === 0){
        res.json({mesagge: "No se ha logrado armar una lista con ese Nombre💬"});
        }
        else{res.json(results);};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'listaPedidoUsuarioProducto' ha fallado",error: err})};
    };

exports.postPedido = async function(req, res){
    const {IDusuario, IDproducto} = req.body;
    const fecha = new Date().toLocaleDateString("es");
    try{
        const [results] = await DB.query(queries.añadirPedido, [IDusuario, IDproducto, fecha]);
        res.json({mesagge: "✅ Se ha creado un nuevo Pedido", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'añadirPedido' ha fallado", error: err})};
    };

exports.putPedido = async function(req, res){
    const { id } = req.params;
    const fecha = new Date().toLocaleDateString("es");
    const { newID, newUsuarioid, newProductoid} = req.body;
    try{
        const [results] = await DB.query(queries.actualizarPedido, [newID, newUsuarioid, newProductoid, fecha, id]);
        res.json({mesagge: "✅ Se ha actualizado el Pedido", results: results});
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'actualizarPedido' ha fallado", error: err})};
};

exports.deletePedido = async function(req, res){
    const {id} = req.params;
    try{
        const [results] = await DB.query(queries.borrarPedido, [id]);
        if(results.affectedRows === 0){
            res.json({mesagge: "No se ha borrado el Pedido seleccionado💬", results: results});
        }
        else{res.json({mesagge: "✅ Se ha borrado un Pedido", results: results});};
    }
    catch(err){return res.status(500).json({message:"⚠La consulta 'borrarPedido' ha fallado",error: err})};
    };