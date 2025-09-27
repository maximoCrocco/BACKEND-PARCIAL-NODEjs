 function rolePedidoget(req, res, next)  {
         if (req.user.rol == "superAdmin" || req.user.rol == "admin") {
             next();
         }else{
         return res.status(403).json({ message: "No tienes permisos suficientes", user: req.user });
         };
     };

     module.exports = rolePedidoget;