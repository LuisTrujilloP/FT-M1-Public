'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)]
  let left = [];
  let right = [];
  let equals = [];
  
  for(let i = 0; i < array.length; i++) {
    
    if(array[i] < pivot){
      left.push(array[i]);
    }else if(array[i] > pivot){
      right.push(array[i]);
    }
    else{
      equals.push(array[i]);
    }
  }
  return quickSort(left).concat(equals).concat(quickSort(right));
}



function split(array){

  let middle = Math.floor(array.length/2)
  var left = array.slice(0, middle)
  var right = array.slice(middle)

  return [left, right];

}

function merge(left, right){
  
  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;    
    }else{
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let div = split(array);
  let left = div[0];
  let right = div[1];

  return merge(mergeSort(left), mergeSort(right))

  // for(let i = 0; i < array.length; i++) {
  //   for(let j = 1; j < array.length; j++) {
  //     if(array[i] > array[j]) {
  //       let temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //     }
  //   }
  // }

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
