"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
// Notacion de clase
/* class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() { 
    this.head = null
  }
  add(){}
} */
// Notacion funcional
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

// linkedlist -> this, proto

//! Metodos
//? Add
LinkedList.prototype.add = function (value) {
  // creamos el nodo
  const nodo = new Node(value);
  // guardamos el nodo
  // 1. verificar el head
  if (!this.head) {
    this.head = nodo;
    return nodo;
  }
  // 2. Si el head ya tiene valor, tengo que recorrer el next
  let current = this.head;
  console.log(current); // Node -> {value, next: Node: { next}}
  // Recorrer la lista
  while (current.next) {
    current = current.next;
  }
  current.next = nodo;
  return nodo;
};

LinkedList.prototype.remove = function () {
  if (!this.head) return null;
  if (!this.head.next) {
    let n = this.head.value;
    this.head = null;
    return n;
  }
  let current = this.head;
  while (current.next.next) {
    current = current.next;
  }
  let nodo = current.next;
  current.next = null;
  return nodo.value;
};

/* LinkedList.prototype.search = function (arg) {
  if (!this.head) return null;
  if (typeof arg === "function") {
    // recibi una cb
    if (arg(this.head.value)) return this.head.value;
    let current = this.head;
    while (current) {
      if (arg(current.value)) return this.head.value;
      else current = current.next;
    }
    // arg(value) nunca le dio true
    return null;
  } else {
    // recibi un valor
    if (this.head.value === arg) return this.head.value;
    let current = this.head;
    while (current) {
      if (current.value === arg) return current.value;
      else current = current.next;
    }
    // nunca dio true
    return null;
  }
}; */
LinkedList.prototype.search = function (dato) {
  let current = this.head;
  while (current) {
    if (typeof dato !== "function") {
      //recibi un valor
      if (dato === current.value) return current.value;
    } else {
      // recibi una callback
      if (dato(current.value)) return current.value;
    }
    current = current.next;
  }
  return null;
};

const objSong = { name: "Flaca", artist: "AC" };
const objSong2 = { name: "Do hast", artist: "R" };
const objSong3 = { name: "De musica ligera", artist: "SE" };

const linkedList = new LinkedList();
console.log(linkedList.add(objSong));
console.log(linkedList);
console.log(linkedList.add(objSong2));
console.log(linkedList);
console.log(linkedList.add(objSong3));
console.log(linkedList);
console.log(linkedList.remove());
console.log(linkedList);
console.log(linkedList.remove());
console.log(linkedList);
console.log(linkedList.remove());
console.log(linkedList);
console.log(linkedList.remove());
console.log(linkedList);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
