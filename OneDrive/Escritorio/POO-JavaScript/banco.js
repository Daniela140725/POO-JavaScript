class Banco {
  constructor() {
    this.nombre = "";
    this.sucursales = [];
  }

  agregar(sucursal) {
    this.sucursales.push(sucursal);
    console.log("Se agregó: " + sucursal);
  }

  eliminar(sucursal) {
    let pos = this.sucursales.indexOf(sucursal);

    if (pos != -1) {
      this.sucursales.splice(pos, 1);
      console.log("Se eliminó: " + sucursal);
    } else {
      console.log("Esa sucursal no existe");
    }
  }

  mostrar() {
    if (this.sucursales.length === 0) {
      console.log("No hay sucursales");
    } else {
      console.log("Sucursales:");

      this.sucursales.forEach((s, i) => {
        console.log((i + 1) + ". " + s);
      });
    }
  }
}

// crear banco
let b1 = new Banco();

// agregar sucursales
b1.agregar("Centro");
b1.agregar("Norte");
b1.agregar("Sur");

// mostrar
b1.mostrar();

// eliminar una
b1.eliminar("Norte");

// mostrar otra vez
b1.mostrar();