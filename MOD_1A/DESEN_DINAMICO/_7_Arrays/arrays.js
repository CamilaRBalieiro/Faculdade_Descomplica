//exemplosArray.js

//Criar um Array
let array1 = [];
let array2 = new Array();
let array3 = ["maça","banana","pera"];

console.log('Array 1',array1);
console.log('Array 2',array2);
console.log('Array 3',array3);

//Adicionar elementos ao array
//array1 = ["teste"];
//array2 = ["teste2"];
//array3 = ["teste3"];

console.log('Array após adicionar elementos:',array1);
array1.push("el");
array2.push("el2");
array3.push("el3");

console.log('\nNovo Array 1',array1);
console.log('Novo Array 2',array2);
console.log('Novo Array 3',array3);
//Acessar elementos do array

let primeiroElemento = array1[0];
let erro = array1[1];
let segundoElemento = array2[0];
let terceiroElemento = array3[3];

console.log('\nPrimeiro elemento:',primeiroElemento);
console.log('Erro:',erro);
console.log('Segundo elemento:',segundoElemento);
console.log('Terceiro elemento:',terceiroElemento);

//modificar elementos do array
array1[0] = "novo elemento";
console.log('\nArray 1 após modificar:',array1);
