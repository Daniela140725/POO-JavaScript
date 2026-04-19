const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/"; // URL de conexión a MongoDB
const client = new MongoClient(uri);

async function conectar() {
    await client.connect();
    const db = client.db("CRUD-PRODUCTOS"); // nombre de tu base de datos
    return db.collection("productos"); // nombre de tu colección
}

module.exports = conectar;