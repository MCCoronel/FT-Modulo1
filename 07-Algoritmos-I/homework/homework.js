'use strict'
// No cambies los nombres de las funciones.
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let result = [];
  let i = 2 ;
  while (num > 1){  
   
    if(num % i === 0){
    	result.push(i)
      num = num / i
    } else { 
    		i++
    }
  }
  result.unshift(1)
  return result

}
  

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++) { //hace referencia a la cantidad de elementos
    for (var j = 0; j < array.length - 1; j++) { //hace referencia a la posicion de cada elemento
      //console.log(arr[j]);
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;

  // var ordenado = false;
  //  while(!ordenado){
  //    ordenado = true
  //  for(let i= 0 ; i < array.length - 1; i++){        
  //          if(array[i]>array[i+1]){
  //        let aux = array[i];
  //        array[i]= array[i+1];
  //        array[i+1]=aux;
  //        ordenado = false;
  //      } 
  //  }
  //  }return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for( let i=1 ; i< array.length ; i++){
    let aux = array[i];
    let j = i-1;
    while( j>=0 && array[j] > aux){
      array[j+1] = array[j];
      j--
    } array[j+1] = aux
  } return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for( let i = 0 ; i< array.length  ; i++){
    console.log(i);
    var menor = i //0 , 1
   for(let j = i+1 ; j< array.length  ; j++){
     console.log(j);
       if(array[j] < array[menor]){
         // 2 <  3
         menor = j;  // 1      
       }
    }
      var aux = array[i]
      array[i] = array[menor]
      array[menor] = aux
   
   
  } return array;
 



    
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
