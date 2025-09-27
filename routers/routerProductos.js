const express = require("express");
const routerProductos = express.Router();
const productoController = require("../controllers/productoController");
const authRol = require("../guard/authRolePedido");
const authToken = require("../guard/authToken");
routerProductos.get("/", authToken, authRol, productoController.getProductos);
routerProductos.get("/:id", authToken, authRol, productoController.getProductoID);
routerProductos.post("/", authToken, authRol, productoController.postProducto);
routerProductos.put("/:id", authToken, authRol, productoController.putProducto);
routerProductos.delete("/:id", authToken, authRol, productoController.deleteProducto);

module.exports = routerProductos;