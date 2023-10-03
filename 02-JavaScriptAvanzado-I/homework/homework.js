//! Scope & Hoisting
//! Ejercicio 1.
// L.E Contexto Global
// {a, b, c}
// Fase Ejecucion ->
//? L.E Contexto Local Funcion c
//? {a:8, b:9, c:10, x:undef, f}
// Fase de Ejecucion Funcion c ->
// x = 10
// console.log(x) -> 10
// console.log(a) -> 8
//* L.E Contexto Local Funcion f
//* {a: 8, b: 10, c: 10, x:5}
// Fase de Ejecucion Funcion f ->
// console.log(b) -> 8
//* Termina / elimina el contexto de f
// console.log(b) -> 9
//? Elimina el contexto de c
// console.log(b) -> 10
// console.log(x) -> 1
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
// Hoisting -> busca en el L.E
//! Ejercicio 2
// L.E -> CONTEXT GlOBAL
// {foo:fn, bar:und, baz:und }
// Fase Ejecucion ->
// console.log(bar); undefined
// console.log(baz); unde
// foo() -> Hola!
console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
var baz = 2;

//! Ejercicio 3
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);

//! Ejercicio 4
var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);

// COERCION DE DATOS

6 / "3"; // 6 / 3 -> 2
"2" * "3"; // 2 * "3" // 2 * 3 -> 6
4 + 5 + "px"; // 9 + "px" -> "9" + "px" -> "9px"
"$" + 4 + 5; // "$" + 4 -> "$4" + 5 -> "$45"
"4" - 2; // 4 - 2 -> 2
"4px" - 2; // NaN
7 / 0; // Infity
{
}
[0]; // undefined
parseInt("09"); // 9
// El unico numero que tiene valor booleano false es 0
5 && 2; // 2
2 && 5; // 5
5 || 0; // 5
0 ||
  (5)[3] + // 5
    [3] -
    [10]; // "3" + "3" - [10] -> "33" - 10 -> 23
3 > 2 > 1; // false
// true > 1 -> 1 > 1 -> false
/* []==![]
=> []==false 
=> []==0 
=> ""==0 
=> 0==0 
=> true */
//! NOTA: Para conocer el valor booleano de un objeto, debes negarlo 2 VideoColorSpace. Ejemplo: !![] arroja false, lo que quiere decir que [] tiene como booleano a false
