var valores = [true, 5, false, "hola", "adios", 2];
var palabra;
var numero;
for (let index = 0; index < valores.length; index++) {
    if (typeof(valores[index]) == "string" ) {
        if (typeof(palabra) == "undefined") {
            palabra = valores[index];
        }else if (palabra.length > valores[index].length) {
            console.log(palabra + " es más grande que " + valores[index])
        }else{
            console.log(palabra + " es más pequeña que " + valores[index])
        }  
    }
    if (typeof(valores[index]) == "number" ) {
        if (typeof(numero) == "undefined") {
            numero = valores[index];
        }else {
            var resultado = numero + valores[index];
            console.log(numero + " + " + valores[index] + " = " + resultado);
            var resultado = numero - valores[index];
            console.log(numero + " - " + valores[index] + " = " + resultado);
            var resultado = numero * valores[index];
            console.log(numero + " * " + valores[index] + " = " + resultado);
            var resultado = numero / valores[index];
            console.log(numero + " / " + valores[index] + " = " + resultado);
            var resultado = numero % valores[index];
            console.log(numero + " % " + valores[index] + " = " + resultado);
        } 
    }
}