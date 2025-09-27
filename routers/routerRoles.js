const express = require("express");
const routerRoles = express.Router();
const rolController = require("../controllers/rolController");
const authToken = require("../guard/authToken")
const authRolSA = require("../guard/authRolSA");
routerRoles.get("/", authToken, authRolSA, rolController.getRoles);
routerRoles.get("/:id", authToken, authRolSA, rolController.getRolID);
routerRoles.post("/", authToken, authRolSA, rolController.postRol);
routerRoles.put("/:id", authToken, authRolSA, rolController.putRol);
routerRoles.delete("/:id", authToken, authRolSA, rolController.deleteRol);

module.exports = routerRoles;