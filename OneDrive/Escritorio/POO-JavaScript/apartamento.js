class Universidad {
  constructor(nombre) {
    this.nombre = nombre;
    this.lista = [];
  }

  agregar(dep) {
    this.lista.push(dep);
    console.log("Se agregó: " + dep);
  }

  eliminar(dep) {
    let pos = this.lista.indexOf(dep);

    if (pos != -1) {
      this.lista.splice(pos, 1);
      console.log("Se eliminó: " + dep);
    } else {
      console.log("No existe esa carrera");
    }
  }

  mostrar() {
    console.log("Carreras de " + this.nombre + ":");

    if (this.lista.length === 0) {
      console.log("No hay nada");
    } else {
      this.lista.forEach((x, i) => {
        console.log((i + 1) + ". " + x);
      });
    }
  }
}

// crear
let u1 = new Universidad("Mi U");

// probar
u1.mostrar();

u1.agregar("Sistemas");
u1.agregar("Mate");
u1.agregar("Fisica");

u1.mostrar();

u1.eliminar("Mate");
u1.mostrar();

u1.eliminar("Quimica");