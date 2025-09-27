exports.crearProductos = `CREATE TABLE IF NOT EXISTS producto (
    id_producto INT AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion_producto VARCHAR(50),
    precio_producto DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id_producto));`;

exports.seleccionarProductos = "SELECT * FROM producto";

exports.seleccionarProductoID = "SELECT * FROM producto WHERE id_producto = ?";

exports.añadirProducto = "INSERT INTO producto (`nombre_producto`, `descripcion_producto`, `precio_producto`) VALUES (?, ?, ?);";

exports.actualizarProducto = "UPDATE producto SET `id_producto` = ?, `nombre_producto` = ?, `descripcion_producto` = ?, `precio_producto` = ? WHERE `id_producto` = ?;";

exports.borrarProducto = "DELETE FROM producto WHERE id_producto = ?";