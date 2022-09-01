var valores = [true, 5, false, "hola", "adios", 2];
var palabra = valores.filter(valor => typeof(valor) == "string");
var numero = valores.filter(valor => typeof(valor) == "number");
var booleano = valores.filter(valor => typeof(valor) == "boolean")

if (palabra[0].length > palabra[1].length) {
    console.log(palabra[0] + " es más grande que " + palabra[1])
}else{
    console.log(palabra[0] + " es más pequeña que " + palabra[1])
}

var resultado = numero[0] + numero[1];
console.log(numero[0] + " + " + numero[1] + " = " + resultado);
var resultado = numero[0] - numero[1];
console.log(numero[0] + " - " + numero[1] + " = " + resultado);
var resultado = numero[0] * numero[1];
console.log(numero[0] + " * " + numero[1] + " = " + resultado);
var resultado = numero[0] / numero[1];
console.log(numero[0] + " / " + numero[1] + " = " + resultado);
var resultado = numero[0] % numero[1];
console.log(numero[0] + " % " + numero[1] + " = " + resultado);

console.log(booleano[0] + " && " + booleano[1] + " = " + (booleano[0]&&booleano[1]))
console.log(booleano[0] + " && " + booleano[0] + " = " + (booleano[0]&&booleano[0]))
console.log(booleano[1] + " && " + booleano[1] + " = " + (booleano[1]&&booleano[1]))
console.log(booleano[1] + " && " + booleano[0] + " = " + (booleano[1]&&booleano[0]))

console.log(booleano[0] + " || " + booleano[1] + " = " + (booleano[0]||booleano[1]))
console.log(booleano[0] + " || " + booleano[0] + " = " + (booleano[0]||booleano[0]))
console.log(booleano[1] + " || " + booleano[1] + " = " + (booleano[1]||booleano[1]))
console.log(booleano[1] + " || " + booleano[0] + " = " + (booleano[1]||booleano[0]))