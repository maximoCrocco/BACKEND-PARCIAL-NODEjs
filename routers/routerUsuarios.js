const express = require("express");
const routerUsuarios = express.Router();
const usuarioController = require("../controllers/usuarioController");
const authToken = require("../guard/authToken");
const authRolSA = require("../guard/authRolSA");
routerUsuarios.get("/", authToken, authRolSA,usuarioController.getUsuarios);
routerUsuarios.get("/:id", authToken, authRolSA, usuarioController.getUsuarioID);
routerUsuarios.post("/", authToken, authRolSA, usuarioController.postUsuario);
routerUsuarios.put("/:id", authToken, authRolSA, usuarioController.putUsuario);
routerUsuarios.delete("/:id", authToken, authRolSA, usuarioController.deleteUsuario);

module.exports = routerUsuarios;