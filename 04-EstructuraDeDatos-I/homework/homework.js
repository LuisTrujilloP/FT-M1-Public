'use strict';
const { queue } = require("@11ty/eleventy-cache-assets");
// EJERCICIO 1

function nFactorial(n) {

   if(n <= 0) {
      return null;
   }
   if(n <= 1){
      return 1;    
   }
   return n * nFactorial(n - 1);

}


console.log(nFactorial(9))
// EJERCICIO 2
function nFibonacci(n) {
   if(n < 2){
      return n;
   } return nFibonacci(n - 1) + nFibonacci(n - 2)
}


// EJERCICIO 3
function Queue() {
   this.queue=[];
};
Queue.prototype.enqueue = function(element){
   this.queue.push(element);
};

Queue.prototype.dequeue = function(){
   return this.queue.shift();
};

Queue.prototype.size = function(){
   return this.queue.length;
};



// Solucion Francisco
// constructor(){
//    this.elements = {}; // {1}
//    this.primero = 0;
//    this.ultimo = 0;
// }

// //Encola un elemento
// enqueue (elemento) {
//    this.elements[this.ultimo] = elemento;
//    this.ultimo++     // elements ---> {"primero": (input del elements) }
// }
// //Retira un elemento de la cola
// dequeue () {
//    const elemento = this.elements[this.primero]; //Estamos copiando el valor de el primer elemento en item
//    delete this.elements[this.primero];            //Lo borramos al elemento
//    this.primero++;                               //Cambiamos "la posicion" del primer elemento
//    return elemento;                              //Devolvemos el elemento que quitamos de la lista
// }
// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};







