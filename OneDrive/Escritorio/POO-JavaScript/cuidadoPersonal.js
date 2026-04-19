class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  total(cantidad) {
    return this.precio * cantidad;
  }
}

class ProductoCuidado extends Producto {
  constructor(id, nombre, precio, extra) {
    super(id, nombre, precio);
    this.extra = extra;
  }

  total(cantidad) {
    let base = super.total(cantidad);
    return base + this.extra;
  }
}

// crear producto
let p1 = new ProductoCuidado(1, "Shampoo", 10, 2);

// calcular total
console.log("Total a pagar: $" + p1.total(3));