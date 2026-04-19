class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrar() {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Año: " + this.año);
  }
}

class Carro extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  mostrar() {
    super.mostrar();
    console.log("Puertas: " + this.puertas);
  }
}

// crear vehiculo
let v1 = new Vehiculo("Ford", "F-150", 2020);

console.log("Vehículo:");
v1.mostrar();

// crear carro
let c1 = new Carro("Honda", "Accord", 2023, 4);

console.log("-------------");

console.log("Carro:");
c1.mostrar();