const conectar = require("./database");
const { ObjectId } = require("mongodb");

async function eliminarProductos() {

    const productos = await conectar();

    const id = "69a6d9fda4669a10791d0ca2"; // Reemplaza con el ID del producto que deseas eliminar

    await productos.deleteOne(
        { _id: new ObjectId(id) }
    );

    console.log("🗑️ Producto eliminado");
}

eliminarProductos();