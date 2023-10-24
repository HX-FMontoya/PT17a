"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // array -> [5,6]
  //              ^
  // pivot -> array[0] -> 5
  // recorrel el array y a medida que lo recorro, comparo con el pivote
  // voy armando, array menores, mayores, iguales
  // Condicion de corte
  if (array.length < 2) return array;
  // let indiceRandom = Math.floor(Math.random() * array.length);
  let pivote = array[0]; // 5
  let iguales = []; // [5] ->
  let menores = []; // [] ->
  let mayores = []; // [6] ->

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== pivote) {
      if (array[i] < pivote) {
        menores.push(array[i]);
      } else {
        mayores.push(array[i]);
      }
    } else {
      iguales.push(array[i]);
    }
  }

  // es necesario retornar la recursion?
  // cual es la condicion de corte? -> Es la primera que se declara
  // [2,1]  [3,3]  [5,6]
  // [1,2,3,3]
  //            [5,6]
  // [1,2,3,3,5,6]
  let arr = [1, 2, 3];
  let arr2 = [...arr, ...[4]];
  console.log(arr2);

  return quickSort(menores).concat(iguales).concat(quickSort(mayores));
  // return [...quickSort(menores), ...iguales, ...quickSort(mayores)]
}
console.log(quickSort([3, 2, 5, 1, 3, 6]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
