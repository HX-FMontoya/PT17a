"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de trees del árbol
  - insert: agrega un tree en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(arg) {
  this.value = arg;
  this.left = null;
  this.right = null;
}

const arbol = new BinarySearchTree(20);
console.log(arbol);
BinarySearchTree.prototype.insert = function (value) {
  const tree = new BinarySearchTree(value);
  console.log(tree);
  // aplicar un metodo de comparacion, para saber si lo llevamos al left o al right
  console.log(this.value);
  // Vamos a ubicarlo
  if (value <= this.value) {
    // tengo que validar si esta disponible
    if (!this.left) {
      this.left = tree;
    } else {
      // que ese lado esta ocupado, por ende, debo ir a ese tree y aplicarle la pregunta
      this.left.insert(value);
    }
  } else {
    // value es mayor a this.value
    if (!this.right) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  }
};
// Definir una operacion
// Definir un corte
arbol.insert(15);
arbol.insert(10);
arbol.insert(30);
console.log(arbol);
//    (20) -> 0
//   /   \
// (15)   (30) -> 1
// / \   / \
//(10)
BinarySearchTree.prototype.contains = function (value) {
  // if (!this.search(value)) return false;
  // if (this.search(value)) return true;
  if (value === this.value) return true;
  if (value < this.value) {
    console.log(this.value);
    if (!this.left) return false;
    return this.left.contains(value);
  } else {
    if (!this.right) return false;
    return this.right.contains(value);
  }
};
console.log(arbol.contains(16));

BinarySearchTree.prototype.size = function () {
  /* let counter = 1
   if (this.left) {
      counter = counter + this.left.size()
   }
   if (this.right) {
     counter = counter + this.right.size();
   }
   return counter */
  if (!this.value) return 0;
  if (!this.right && !this.left) return 1;
  if (!this.right && this.left) return 1 + this.left.size();
  if (this.right && !this.left) return 1 + this.right.size();
  if (this.right && this.left) return 1 + this.right.size() + this.left.size();
};
console.log(arbol.size());
const arbol2 = new BinarySearchTree();
console.log(arbol2.size());
//    (20) -> 0
//   /   \
// (15)   (30) -> 1
// / \   / \
//(10)
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  // pre -> nodo, left, right
  // in -> left, nodo, right
  // post -> left, right, nodo
  switch (order) {
    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
    case "in-order":
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
    case "post-order":
      console.log(this.left);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
  }
};
arbol.depthFirstForEach(consola, "post-order");

function consola(value) {
  console.log(value);
}
//    (20) -> 0
//   /   \
// (15)   (30) -> 1
// / \   / \
//(10)
// 20, 15, 30, 10,
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
  cb(this.value);
  this.left && queue.push(this.left);
  this.right && queue.push(this.right);
  queue.length && queue.shift().breadthFirstForEach(cb, queue);
};

/* BinarySearchTree.prototype.search = function (value) {
  // Esta funcion busca en el arbol un valor.
  if (value < this.value) {
    if (this.left === null) {
      return null;
    } else {
      if (this.left.value === value) {
        return this.left.value;
      } else {
        return this.left.depthFirstForEach(value);
      }
    }
  } else {
    if (this.right === null) {
      return null;
    } else {
      if (this.right.value === value) {
        return this.right.value;
      } else {
        return this.right.depthFirstForEach(value);
      }
    }
  }
}; */
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
