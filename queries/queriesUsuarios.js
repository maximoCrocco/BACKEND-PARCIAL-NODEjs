exports.crearUsuarios = `CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) DEFAULT NULL,
    direccion VARCHAR(25) DEFAULT NULL,
    id_rol INT DEFAULT 3 NOT NULL,
    PRIMARY KEY (id_usuario));`;

exports.seleccionarUsuarios = "SELECT * FROM usuario";

exports.seleccionarUsuarioID = "SELECT * FROM usuario WHERE id_usuario = ?"

exports.añadirUsuario = "INSERT INTO usuario (`nombre`, `apellido`, `email`, `contraseña`, `telefono`, `direccion`, `id_rol`) VALUES (?, ?, ?, ?, ?, ?, ?);";

exports.actualizarUsuario = "UPDATE usuario SET id_usuario = ?, nombre = ?, apellido = ?, email = ?, contraseña = ?, telefono = ?, direccion = ?, id_rol = ? WHERE id_usuario = ?;";

exports.borrarUsuario = "DELETE FROM usuario WHERE id_usuario = ?"

exports.añadirIndexForeignKey= `ALTER TABLE usuario ADD INDEX rolUsuario_idx (id_rol);`;

exports.añadirForeignKey= `ALTER TABLE usuario ADD CONSTRAINT rolUsuario FOREIGN KEY (id_rol) REFERENCES rol(id_rol) ON DELETE RESTRICT ON UPDATE CASCADE;`
