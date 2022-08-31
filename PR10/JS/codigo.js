function isPolindromo(frase) {
    var sinEspacios = frase.replaceAll(" ", "");
    var invertido = sinEspacios.split("").reverse().join("")
    console.log(invertido)
    if(invertido.toLowerCase() == sinEspacios.toLowerCase()){
        return document.getElementById("palindromo").innerHTML = "La cadena \"" + frase + "\" es un polindromo"
    }else {
        return document.getElementById("palindromo").innerHTML = "La cadena \"" + frase + "\" no es un polindromo"
    }
}

var frase = prompt("Escribe una cadena de texto")

isPolindromo(frase)