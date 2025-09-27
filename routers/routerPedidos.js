const express = require("express");
const routerPedido = express.Router();
const pedidoController = require("../controllers/pedidoController");
const authRol = require("../guard/authRolePedido");
const authToken = require("../guard/authToken");
routerPedido.get("/", authToken, authRol, pedidoController.getPedidos);
routerPedido.get("/:id", authToken, authRol, pedidoController.getPedidoID);
routerPedido.get("/lista/:id", authToken, authRol, pedidoController.getLista);
routerPedido.post("/", authToken, pedidoController.postPedido);
routerPedido.put("/:id", authToken, authRol, pedidoController.putPedido);

module.exports = routerPedido;