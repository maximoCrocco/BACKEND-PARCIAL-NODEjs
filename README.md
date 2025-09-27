# Características

- Todos los pasos a seguir bien detallados y explicados.
- Base de datos creada con Docker
- La configuración de Docker esta escrita en un Docker-Compose
- Normalización de las tablas
- Querys* asincronas
- Modularización de los archivos
- Variables de entorno .env*

# Requisitos previos
                    
Programas  | Enlaces
------------- | -------------
NodeJS  | https://nodejs.org/en
VSCode  | https://code.visualstudio.com/
Docker | https://www.docker.com/
PostMan | https://www.postman.com/

# ✳ENDPOINTS✳
### REGISTRO
- `POST /register` - Registrarse (Default rol: user).
- `GET /login` - Login de tu usuario.
### USUARIOS
- `GET /usuario/` - Obtener a todos los usuarios.
- `GET /usuario/:id` - Obtener a un usuario dependiendo su id.
- `POST /usuario/` - Crear un nuevo usuario.
- `PUT /usuario/:id` - Modificar un usuario dependiendo su id.
- `DELETE /usuario/:id` - Eliminar un usuario dependiendo su id.
### PEDIDOS
- `GET /pedido/` - Obtener a todos los pedidos.
- `GET /pedido/:id` - Obtener a un pedido dependiendo su id.
- `GET /pedido/lista/:id` - Obtener el pedido con su fecha de un usuario dependiendo su id, ademas del producto asociado con su detalle y precio.
- `POST /pedido/` - Crear un nuevo pedido.
- `PUT /pedido/:id` - Modificar un pedido dependiendo su id.
- `DELETE /pedido/:id` - Eliminar un pedido dependiendo su id.
### PRODUCTOS
- `GET /usuario/` - Obtener a todos los productos.
- `GET /usuario/:id` - Obtener a un producto dependiendo su id.
- `POST /usuarios/` - Crear un nuevo producto.
- `PUT /usuarios/:id` - Modificar un producto dependiendo su id.
- `DELETE /usuarios/:id` - Eliminar un producto dependiendo su id.
### ROLES
- `GET /usuario/` - Obtener a todos los roles.
- `GET /usuario/:id` - Obtener a un rol dependiendo su id.
- `POST /usuarios/` - Crear un nuevo rol.
- `PUT /usuarios/:id` - Modificar un rol dependiendo su id.
- `DELETE /usuarios/:id` - Eliminar un rol dependiendo su id.
# COMANDOS PARA POSTMAN👨‍🚀
### ✴REGISTRO
##### POST-Register
```json
{'nombre':'...',
'apellido''...',
'email':'...',
'contraseña':'...',
'telefono':'...',
'direccion':'...'}
```
##### GET-Login
```json
{'email':'...',
'contraseña':'...'}
```
### USUARIOS
##### POST-usuario
````json
{"nombre": "string",
"apellido": "string",
"email": "string",
"contraseña": "string",
"telefono": "string",
"direccion": "string",
"idROL": "number"}
````
##### PUT-usuario
````json
{"newID": "number",
"newNombre": "string",
"newAPellido": "string",
"newEmail": "string",
"newContraseña": "string",
"newTelefono": "string",
"newDireccion": "string",
"newIdRol": "number"}
````
### ✴PEDIDOS
##### POST-pedido
`````json
{"IDusuario": "number",
"IDproducto": "number"}
````
##### PUT-pedido
````json
{"newID": "number",
"newUsuarioid": "number",
"newProductoid": "number"}
````
### ✴PRODUCTOS
##### POST-producto
````json
{"nombre": "string",
"descripcion": "string",
"precio": "number"}
````
##### PUT-producto
````json
{"newID": "number",
"newNombre": "string",
"newDescripcion": "string",
"newPrecio": "number"}
````
### ✴ROLES
##### POST-rol
````json
{"id": "number",
"nombre": "string"}
````
##### PUT-rol
````json
{"newID": "number",
"newNombre": "string"}
````
- Crear la carpeta donde guardaremos todos los archivos necesarios para el proyecto:

1) Abrir la consola de comandos (CMD) /
Desde la opcion de "Buscar" o utilizando la siguiente combinación de teclas:

➡ [Windows + R] y colocando en la busqueda lo siguiente: cmd ⬅

2) Colocar el siguente comando:

➡ mkdir ProyectoNode ⬅

3) Precionar la tecla ENTER

- Para verificar que la carpeta se creó, utiliza el siguiente comando en el CMD:

➡ dir ProyectoNode ⬅

Si fue creado te aparecerá fecha, hora, cantidad de archivos y cantidad de bytes que pesa el contenido de la carpeta (En este caso 0 porque no tiene nada aún).

- Crear el archivo {{Docker-Compose.yml}} para la configuración que usara nuestro Docker para crear el contenedor, imagen y volumen.

-Creacion desde la UI de VSCode:

1.  Abrir VSCode

2. Abrir la carpeta creada anteriormente (ProyectoNode)

3. Click derecho en Explorer

4. Seleccionar "New File"

5. Pegar lo siguiente:
    docker-compose.yml

6. Precionar la tecla ENTER

-Creacion desde la Terminal:

1. Abrir VSCode

2. Abrir una nueva "Terminal" | Comando para abrir una nueva Terminal:
Ctrl + Shift + Ñ

3. Colocar el siguiente comando:

echo > docker-compose.yml

4. Presionar la tecla ENTER

- Colocar los datos necesarios al archivo YML

1. Abrir desde VSCode el archivo docker-compose.yml

2. Copiar y pegar los siguientes datos:

````json
version: '3.9'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql_UTNExamen
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: UTNExamen
      MYSQL_USER: utnuser
      MYSQL_PASSWORD: utnpass
    ports:
      - "3309:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
````

3. Abrir una Terminal

4. Copiar y pegar dentro de la terminal el siguiente comando:

docker-compose up -d

5. Precional la tecla ENTER

### INSTALAR DEPENDENCIAS EN VISUAL STUDIO CODE

- DEPENDENCIAS:
🔵JSONWEBTOKEN
🔵EXPRESS
🔵DOTENV
🔵MYSQL2
🔵BCRYPT

1. Abrir VSCode
2. Entrar a la carpeta de nuestro proyecto (ProyectoNode)
3. Abrir una nueva terminal
4. Escribir el siguiente comando:

````
npm init -y
npm i
npm i express jsonwebtoken dotenv mysql2 bcrypt
````
