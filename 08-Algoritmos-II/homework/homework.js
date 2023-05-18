'use strict'
// No cambies los nombres de las funciones.

function quickSort(arrayay) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el arrayay recibido como parámetro
  // Devolver el arrayay ordenado resultante
  // Tu código:

  if(arrayay.length === null || arrayay.length < 2){
    return arrayay;
}   

let index = Math.floor(Math.random() * arrayay.length);
let pivote = [arrayay[index]];
let menor = [];
let mayor = [];


for( let i = 0 ; i < arrayay.length ; i++){
 if(i === index){
    continue;
 }else if(arrayay[i] <= pivote[0]){
     menor.push(arrayay[i])
    } else if(arrayay[i] > pivote[0]){
            mayor.push(arrayay[i]);
    }
} 

return quickSort(menor).concat(quickSort(pivote)).concat(quickSort(mayor));
}          

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el arrayay recibido como parámetro
  // Devolver el arrayay ordenado resultante
  // Tu código:
  if(array.length <= 1)return array;
        
        var arrayDividido = dividir(array);

        var arrayLeft = arrayDividido[0];
        var arrayRight = arrayDividido[1];

        return juntar (mergeSort(arrayLeft),mergeSort(arrayRight));
  } 
    function dividir(arr){
        let index = (Math.floor(arr.length/2))
        let arrayLeft= arr.slice(0,index)
        let arrayRight = arr.slice(index)
        return [arrayLeft,arrayRight]        
        
    }   

    function juntar(arr1,arr2){
        var aux = [];
        var i = 0;
        var j= 0 ;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] < arr2[j]){
                aux.push(arr1[i])  
                i++ ;              
            } else {
                aux.push(arr2[j])
                j++;
            }
        }
        return aux.concat(arr1.slice(i)).concat(arr2.slice(j));
    }
     

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
