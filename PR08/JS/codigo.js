function parImpar(numero) {
    if (numero % 2 == 0) {
        return document.getElementById("parImpar").innerHTML = "El numero " + numero + " es par."
    }else{
        return document.getElementById("parImpar").innerHTML = "El numero " + numero + " es impar."
    }
} 

var numero = prompt("Introduce un numero");

parImpar(numero);