"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  let inversa = num.toString().split('').reverse();
    let resultado = 0;
    for( let i = 0 ; i< inversa.length ; i++){
      resultado = resultado+ inversa[i] * (2**i);
    }
      return resultado;
     
      // let inversa = num.toString().split('').reverse().map((numero, i) => numero * (2**i));
      // return inversa.reduce((acc, numero) =>{
      //    return acc+numero;
      // },0)

}

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  let binario = [];
    
   while(num > 0){
       let resto = num % 2;
       binario.unshift(resto);
       num = Math.floor(num / 2);              
   }
  
   return binario.join('')

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
