var numero = prompt("Numero para calcular factorial");
var factorial = numero;

for (let i = 1; i < numero; i++) {
    factorial *= i
}
document.getElementById("factorial").innerHTML("El factorial de " + numero + " es " + factorial);