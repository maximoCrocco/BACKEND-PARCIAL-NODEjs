exports.crearRol = "CREATE TABLE IF NOT EXISTS rol (id_rol INT NOT NULL, nombre_rol VARCHAR(15) NOT NULL, PRIMARY KEY (id_rol));";

exports.seleccionarRoles = "SELECT * FROM rol";

exports.seleccionarRolID = "SELECT * FROM rol WHERE id_rol = ?";

exports.añadirRol = "INSERT INTO rol (`id_rol`, `nombre_rol`) VALUES (?, ?);";

exports.actualizarRol = "UPDATE rol SET `id_rol` = ?, `nombre_rol` = ?  WHERE `id_rol` = ?;";

exports.borrarRol = "DELETE FROM rol WHERE rol_id = ?;";

exports.valoresDefault = "INSERT INTO rol VALUES (1, 'superAdmin'), (2, 'admin'), (3, 'user');";
