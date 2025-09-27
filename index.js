const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT||1000;
const routerProductos = require("./routers/routerProductos");
const routerRoles = require("./routers/routerRoles");
const routerUsuarios = require("./routers/routerUsuarios");
const routerPedidos = require("./routers/routerPedidos");
const routerRegistro = require("./routers/routerRegistro");

app.use(express.json());
app.use("/producto", routerProductos);
app.use("/rol", routerRoles);
app.use("/usuario", routerUsuarios);
app.use("/pedido", routerPedidos);
app.use(routerRegistro);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});