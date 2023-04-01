let operando1 = '';
let operando2 = '';
let operacion = '';
let resultado = '';

function agregarNumero(numero) {
  if (operacion === '') {
    operando1 += numero;
    document.getElementById('resultado').value = operando1;
  } else {
    operando2 += numero;
    document.getElementById('resultado').value = operando2;
  }
}

function agregarOperacion(op) {
  operacion = op;
}

function limpiar() {
  operando1 = '';
  operando2 = '';
  operacion = '';
  resultado = '';
  document.getElementById('resultado').value = '';
}

function calcular() {
  switch (operacion) {
    case '+':
      resultado = parseInt(operando1) + parseInt(operando2);
      break;
    case '-':
      resultado = operando1 - operando2;
      break;
    case '*':
      resultado = operando1 * operando2;
      break;
    case '/':
      resultado = operando1 / operando2;
      break;
  }
  document.getElementById('resultado').value = resultado;
}