function roleGuard(req, res, next)  {
        console.log(req.baseUrl);
        if (req.user.rol !== "admin" && req.user.rol !== "user" && req.baseUrl ==! "/producto") {
            return res.status(403).json({ message: "No tienes permisos suficientes", user: req.user });
        }else{
        next();
        }
}
module.exports = roleGuard