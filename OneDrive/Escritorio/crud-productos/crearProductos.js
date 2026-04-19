const conectar = require("./database");

async function crearProductos() {

    const productos = await conectar();

    const nuevoProducto = {
        nombre: "pantalon",
        precio: 40000,
        categoria: "ropa"
    };

    const resultado = await productos.insertOne(nuevoProducto);

    console.log("✅ Producto creado con ID:", resultado.insertedId);
}

crearProductos();