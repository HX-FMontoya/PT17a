"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // n! = n * (n-1)!
  // 4! = 4 * 3 * 2 * 1
  // 0! = 1! = 1
  // Iterativa
  /* var acum = 1 // 2 // 6 // 24
  for (let i = 2; i <= n; i++){
    // 6 * 4
    acum = acum * i
  }
  return acum */
  // Recursiva -> Desarroll una logica para efectuar un paso
  // Importante -> Caso base ->  n = 1
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
}
console.log(nFactorial(4)); // 24

function nFibonacci(n) {
  // 7 = 6 + 5
  // n = n-1 + n-2
  // Iterativa
  /* let a = 0;
  let b = 1;
  //           a ,b
  // 0 , 1, 1, 2, 3
  //                ^
  //              i
  if (n < 0) throw new Error("Debe ser mayor o igual a 0");
  if (n < 2) return n;
  let aux 
  for (let i = 2; i <= n; i++) {
    aux = b
    b = a + b;
    a = aux;
  }
  return b; */
  // Recursiva
  // paso de la funcion es una suma, n-1 + n-2, caso base 0 y 1
  if (n < 0) throw new Error("Debe ser mayor o igual a 0");
  if (n < 2) return n; // caso base
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}
console.log(nFibonacci(15));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (value) {
  this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

const queue = new Queue();
console.log(queue.size());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue.dequeue());

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
