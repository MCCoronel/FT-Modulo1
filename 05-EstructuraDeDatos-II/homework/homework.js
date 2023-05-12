'use strict';

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

function LinkedList() {
  this.head= null;
 }
 
function Node(value) {
  this.value = value;
  this.next = null;
 }

 LinkedList.prototype.add = function(value){
     let newNodo = new Node(value);
     let current = this.head;
     if(current === null) this.head = newNodo; 
      else{
         while(current.next !== null) current = current.next;             
           current.next = newNodo;
      }
     
  }
  
  LinkedList.prototype.remove= function(){
       //no tengo ningun nodo => nada q hacer
        let current = this.head;
        if(!current) return null;
       // tengo un solo nodo => no hay anteultimo
        if(!current.next){
          var aux= current.value;
          this.head = null;
          return aux;
        }
        // tengo mas de un nodo=> voy al anteultimo y elimino al proximo
         while(current.next.next){
          current=current.next
         }
          var aux= current.next.value
          current.next = null;
          return aux;   
      };

      LinkedList.prototype.search= function(parametro){
        let current = this.head;
        if(typeof(parametro) === 'function'){           
          while(current){            
            if(parametro(current.value)) return current.value;
            //sino sigo
            else current=current.next
          } return null;
        }else {
          //mientras este parado en un nodo
          while(current){
            if(current.value === parametro) return parametro;
            // si no encuentro nada
            else current = current.next;
          } return null;

        }
          
      };


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
function HashTable() { 
  this.numBuckets = 35;
  this.Buckets = [];
}

HashTable.prototype.hash = function(key){
  let suma = 0;
  for( let letra of key){
    suma += letra.charCodeAt();
  }
   return suma % this.numBuckets;
   // retorno el indice del array donde voy a guardar el objeto
}

HashTable.prototype.set = function (key,value){
 let index = this.hash(key);
 //Tengo q ver si en ese lugar no hay algo ya almacenado;
 if(!this.Buckets[index]){
  //si no hay nada agrego el objeto en esa posicion
  this.Buckets[index] = {[key]: value}
  // si hay algo, agrego la clave, como una propiedad mas;
 } this.Buckets[index][key] = value;

} 

HashTable.prototype.get = function(key){
  let index = this.hash(key);
  return this.Buckets[index][key];
} //me da a devolver el valor y si  no hay nada "undifined";

HashTable.prototype.hasKey = function(key){
  return !!this.get(key);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
