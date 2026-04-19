const conectar = require("./database");

async function actualizarProductos() {

    const productos = await conectar();

    await productos.updateOne(
        { _id: 1 },   // aquí pones el número directo
        { $set: { nombre: "Laptop HP" } }
    );

    console.log("✏️ Producto actualizado");
}

actualizarProductos();