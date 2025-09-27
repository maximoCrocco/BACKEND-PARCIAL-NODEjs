exports.crearPedidos = `CREATE TABLE IF NOT EXISTS pedido (
    id_pedido INT AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    fecha_pedido VARCHAR(15) NOT NULL,
    PRIMARY KEY (id_pedido));`;

exports.seleccionarPedidos = "SELECT * FROM pedido;";

exports.seleccionarPedidoID = "SELECT * FROM pedido WHERE id_pedido = ?;";

exports.añadirPedido = `
INSERT INTO pedido
(id_usuario,
id_producto,
fecha_pedido)
VALUES (?, ?, ?);`

exports.actualizarPedido = `
INSERT INTO pedido
(id_pedido,
id_usuario,
id_producto,
fecha_pedido)
VALUES (?, ?, ?, ?);`;

exports.añadirIndexForeignKey = `ALTER TABLE pedido 
ADD INDEX pedidoUsuario_idx (id_usuario),
ADD INDEX pedidoProducto_idx (id_producto);`

exports.añadirForeignKey = `
ALTER TABLE pedido
ADD CONSTRAINT pedidoUsuario
  FOREIGN KEY (id_usuario)
  REFERENCES usuario (id_usuario)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT pedidoProducto
  FOREIGN KEY (id_producto)
  REFERENCES producto (id_producto)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;`

exports.listaPedidoUsuarioProducto = `
SELECT pedido.id_pedido, pedido.fecha_pedido, usuario.nombre, producto.nombre_producto, producto.descripcion_producto FROM pedido
INNER JOIN usuario ON pedido.id_usuario = usuario.id_usuario AND usuario.id_usuario = ?
INNER JOIN producto ON pedido.id_producto = producto.id_producto;
`

exports.borrarPedido = `DELETE FROM pedido WHERE id_pedido = ?`