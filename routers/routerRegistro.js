const express = require("express");
const routerRegistro = express.Router();
const registerController = require("../controllers/registerController");

routerRegistro.get("/login", registerController.getLoginUsuario);
routerRegistro.post("/register", registerController.postRegistarUsuario);

module.exports = routerRegistro;
