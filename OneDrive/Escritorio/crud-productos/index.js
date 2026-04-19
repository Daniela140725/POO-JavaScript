const conectar = require("./database");
const { ObjectId } = require("mongodb");

async function main() {

    const productos = await conectar();

    const nuevoProducto = {
        nombre: "pantalon",
        precio: 40000,
        categoria: "ropa"
    };

    const resultado = await productos.insertOne(nuevoProducto);
    console.log("Producto creado:", resultado.insertedId);
}

main();