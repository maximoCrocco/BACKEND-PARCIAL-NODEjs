function authRolSA(req, res, next)  {
        console.log(req.baseUrl);
        if (req.user.rol == "superAdmin") {
            next();
        }else{
            return res.status(403).json({ message: "No tienes permisos suficientes", user: req.user });
        }
}
module.exports = authRolSA;