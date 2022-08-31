var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','KK','E','T']

var dni = prompt("Pon tu dni","");
var letra = dni.slice(-1);
var numeroDNI = dni.slice(0,-1)

if (numeroDNI >=0 && numeroDNI <=99999999) {
    var resto = numeroDNI % 23;
    console.log(letra);
    if (letra.toUpperCase == letras[resto].toUpperCase) {
        document.getElementById("dni").innerHTML = "Tu dni es correcto"
    }else{
        alert("La letra indicada no es correcta")
    }
}else{
    alert("El numero introducido no es valido")
}
