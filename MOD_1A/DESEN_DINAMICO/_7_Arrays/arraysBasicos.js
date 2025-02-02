//Criando um array inicial
let frutas = ["maça","banana","pera","uva"];//pos:0..3

console.log('Array inicial:',frutas);
console.log('Comprimento do array:',frutas.length);

//Usando o método push() para adicionar um elemento ao final do array
let novoComprimento = frutas.push("laranja","manga");
console.log('\nArray atualizado push:',frutas);
console.log('Comprimento do array:',novoComprimento);

//Usando o método pop() para remover o último elemento do array
let ultimoElemento = frutas.pop();
console.log('\nArray atualizado pop:',frutas); 
console.log('Ultima fruta removida:',ultimoElemento);

//Usando o método shift() para remover o primeiro elemento do array
let primeiroElemento = frutas.shift();
console.log('\nArray atualizado shift:',frutas);
console.log('Primeira fruta removida:',primeiroElemento);