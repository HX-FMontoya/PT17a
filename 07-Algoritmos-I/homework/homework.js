"use strict";
// No cambies los nombres de las funciones.
//

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código: [2,2,2,2]
  // num = 5
  // [1,3,5]
  // factor = 5
  // 5 % 5 -> 1
  let factores = [1];
  let factor = 2;
  while (num > 1) {
    if (num % factor == 0) {
      factores.push(factor);
      num = num / factor;
    } else {
      factor++;
    }
  }
  return factores;
}
console.log(factorear(15));
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // i = 2
  // j = 1
  // aux = 2
  //
  // [2,3,5,6,1]
  //        i
  //j
  for (let i = 1; i < array.length; i++) {
    let j = i - 1; // j es la posicion
    // arr[i] vs arr[j]
    let aux = array[i];
    while (j >= 0 && aux < array[j]) {
      // i
      array[j + 1] = array[j];
      j--;
    }
    // j ??
    array[j + 1] = aux;
  }
  return array;
}
console.log(insertionSort([5, 4, 3, 2, 1]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [1, 2, 5, 6, 3];
  //     i
  //              ^
  // min = 4
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let aux = array[i]; // 3
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
