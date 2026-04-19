class Cuenta {
  constructor(numero, saldo) {
    this.numero = numero;
    this.saldo = saldo;
  }

  consignar(valor) {
    this.saldo += valor;
    console.log("Se consignaron: $" + valor);
  }

  retirar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Se retiraron: $" + valor);
    } else {
      console.log("No hay suficiente saldo");
    }
  }

  mostrarSaldo() {
    console.log("Saldo actual: $" + this.saldo);
  }
}

// crear cuenta
let cuenta1 = new Cuenta("001", 1500);

console.log("Cuenta creada");

// movimientos
cuenta1.consignar(500);
cuenta1.retirar(400);
cuenta1.mostrarSaldo();

cuenta1.retirar(1800);
cuenta1.mostrarSaldo();