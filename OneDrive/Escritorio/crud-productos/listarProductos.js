const conectar = require("./database");

async function listarProductos() {

    const productos = await conectar();

    const lista = await productos.find().toArray();

    console.log("📋 Lista de productos:");
    console.log(lista);
}

listarProductos();