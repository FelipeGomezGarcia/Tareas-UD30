function tipoCadena(frase) {
    var minuscula = false;
    var mayuscula = false;
    var sinEspacios = frase.replaceAll(" ", "");
    var letras = sinEspacios.split("");
    for (let i = 0; i < letras.length; i++) {
      if (letras[i]== letras[i].toUpperCase()) {
        mayuscula = true;
      }else if (letras[i] == letras[i].toLowerCase()) {
        minuscula = true
      }
    }
    if (minuscula && mayuscula) {
        return document.getElementById("cadena").innerHTML = "La cadena tiene mayusculas y minusculas"
    } else if(minuscula && !mayuscula){
        return document.getElementById("cadena").innerHTML = "La cadena solo tiene minusculas"
    } else if (mayuscula && !minuscula) {
        return document.getElementById("cadena").innerHTML = "La cadena solo tiene mayusculas"
    }
}

var frase = prompt("Escribe una cadena de texto")

tipoCadena(frase);