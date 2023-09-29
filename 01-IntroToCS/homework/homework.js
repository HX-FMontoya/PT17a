"use strict";

function BinarioADecimal(numStr) {
  // numStr -> "0101"
  //               ^
  // Formula para cada item -> 2 ^ indice * numero
  // Array-like -> como array
  // No es un array, sin embargo, puedo utilizar algunos metodos de array
  // Soluciones
  // Miguel
  /* let decimal = 0;
   let base = 1;

   for (let i = num.length - 1; i >= 0; i--) {
     let digito = parseInt(num.charAt(i));
     decimal += digito * base;
     base *= 2;
   }

   return decimal; */
  // Gabo
  /* let j = 0;
   let numero = 0;
   for (let i = num.length - 1; i >= 0; i--) {
     numero += num[i] * 2 ** j;
     j++;
   } */
  // La de la clase
  /* var sum = 0;
  var indexEnd = numStr.length - 1;
  for (var i = indexEnd; i >= 0; i--) {
    // numStr -> "0101"
    //             i
    var element = numStr[i];
    var expo = indexEnd - i;
    // var form = (2 ** i) * element;
    var form = Math.pow(2, expo) * element;
    sum = sum + form;
  }
  return sum; */
  // Ultima, pero ilegal XD
  // return parseInt(numStr, 2);
}
console.log(BinarioADecimal("0101"));
console.log("hola"[4]);

function DecimalABinario(num) {
  // que nos llega? --> num es number
  // que debemos retornar --> un binario --> string
  // como ?
  var resultado = "";
  while (num >= 1) {
    resultado = (num % 2) + resultado;
    console.log(resultado);
    num = Math.floor(num / 2);
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
