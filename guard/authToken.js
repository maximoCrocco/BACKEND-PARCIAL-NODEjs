const JWT = require("jsonwebtoken");

function authGuard(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if(!token) return res.status(401).json({error: "Esperando token"});

    JWT.verify(token, process.env.CLAVE, (err, user) => {
        if(err) return res.status(403).json({error: "Token invalido"});
        req.user = user;
        next();
    });
};
module.exports = authGuard;