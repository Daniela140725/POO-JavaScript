class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  mostrarInfo() {
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Año: " + this.año);
  }
}

class LibroDigital extends Libro {
  constructor(titulo, autor, año, precio) {
    super(titulo, autor, año);
    this.precio = precio;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log("Precio: $" + this.precio);
  }
}

// crear libro digital
let libro1 = new LibroDigital("Don Quijote", "Miguel de Cervantes", 1605, 21.49);

// mostrar datos
libro1.mostrarInfo();