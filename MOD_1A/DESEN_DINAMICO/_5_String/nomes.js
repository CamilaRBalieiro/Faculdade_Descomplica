//definindo uma string de exemplo
let nome = "Camila Rodrigues"
console.log("Nome: ",nome);

//Usando o método toLowerCase() para converter todos os caracteres alfabéticos para minúsculos
let nomeMinusculo = nome.toLowerCase();
console.log("Nome em minúsculas: "+nomeMinusculo);

//Usando o método toUpperCase() para converter todos os caracteres alfabéticos para maiúsculas
let nomeMaiusculo = nome.toUpperCase();
console.log("Nome em maiúscula: "+ nomeMaiusculo);

//Outra string com caracteres não alfabéticos
let stringComSimbolos = "Ana Cristina, 415!";
console.log("Nome incial com Simbolos: ",stringComSimbolos)

//convertendo para minúsuculas
let minusculoSimbolos = stringComSimbolos.toLowerCase();
console.log("String com simbolos em minúsculas: "+minusculoSimbolos);

//convertedo para maiúsculas
let maiusculoSimbolos = stringComSimbolos.toUpperCase();
console.log("String com símbolos em maiúsculas: "+maiusculoSimbolos);