console.log("script conectado");

const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");
const botonCalcular = document.getElementById("calcular");
const presultado = document.getElementById("resultado");

function calcular() {
  const operador = txtOperador.value;
  const op1 = parseFloat(txtOp1.value);
  const op2 = parseFloat(txtOp2.value);

  if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
    let resultado;

    switch (operador) {
      case "+":
        resultado = op1 + op2;
        break;
      case "-":
        resultado = op1 - op2;
        break;
      case "*":
        resultado = op1 * op2;
        break;
      case "/":
        resultado = op2 !== 0 ? op1 / op2 : "No se puede dividir por 0";
        break;
    }

    presultado.innerText = "= " + resultado;
  } else {
    presultado.innerText = "cálculo imposible";
  }
}
