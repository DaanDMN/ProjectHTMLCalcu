// app.js
import { sumar, restar, multiplicar, dividir } from "./modules/operaciones.js";

function calcular() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operador = document.getElementById("operador").value;
  var resultado;

  if (operador === "+") {
    resultado = sumar(num1, num2);
  } else if (operador === "-") {
    resultado = restar(num1, num2);
  } else if (operador === "*") {
    resultado = multiplicar(num1, num2);
  } else if (operador === "/") {
    resultado = dividir(num1, num2);
  }

  document.getElementById("resultado").textContent = resultado;
}

window.calcular = calcular;

