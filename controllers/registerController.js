const DB = require("../config/db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
const queries = require("../queries/queriesRegistro");
dotenv.config();

exports.postRegistarUsuario = async function(req, res){
    const {nombre, apellido, email, contraseña, telefono, direccion} = req.body;
    const contraseñaBCRYPT = await bcrypt.hash(contraseña, 10);
    try{
        const [results] = await DB.query(queries.registrarUsuario, [nombre, apellido, email, contraseñaBCRYPT, telefono, direccion]);
        res.json({mesagge: "✅ Te has registrado con éxito", result: results});
    }
    catch(err){return res.status(401).json({message:"❌ El registro ha fallado",error: err})};
    };

exports.getLoginUsuario = async function(req, res){
    const {email, contraseña} = req.body;
    try{
        const [results] = await DB.query(queries.seleccionarUsuarioLogin, [email]);
        if(results.length === 0){
            res.status(401).json({ error: "❌ Usuario no disponible" })
        }else{
            const user = results[0];
            
            const comprobacion = await bcrypt.compare(contraseña, user.contraseña);

            if (!comprobacion){res.status(403).json({ error: "❗ Contraseña inválida" })
            }else{
                const token = JWT.sign({id: user.id_usuario, rol: user.nombre_rol},process.env.CLAVE,{expiresIn: "1h"});
                res.status(200).json({mesagge: "✅ Te has logueado con éxito", token: token});
            };
        };
    }
    catch(err){return res.status(401).json({message:"❌ El logueo ha fallado",error: err})};
    };