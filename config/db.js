const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();


const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORTHOST,
    user: process.env.USER,
    password: process.env.USERPASS,
    database: process.env.NAMEDB,
}).promise();

async function connectDB(){
    try{
        const results = await connection.connect();
        console.log("✅Conectado a MySQL en Docker (UTNExamen) - ", "📁DATOS:", results);
    }catch{console.log("❌Ha fallado la conexión con la DB")}
}
connectDB();
module.exports = connection;