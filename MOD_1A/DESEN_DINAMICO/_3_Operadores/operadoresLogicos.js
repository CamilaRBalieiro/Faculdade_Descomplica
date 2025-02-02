/**Operadores Lógicos
 * Operações lógicas em valores booleanos
 * (&&)E Lógico
 * (||)OU Lógico
 * (!)NÃO Lógico 
 * ***************************
 * Operações de Comparação, aritméticos lógicos
 * (==) Igual a
 * (!=) Diferente
 * (===)Mesmo valor e tipo
 * (!==)Diferente em valor e tipo
 * (<)Menor que
 * (>)Maior que
 * (<=)Menor ou igual a
 * (>=)Maior ou igual a
 * *****************
 * ************TABELA VERDADE**************
 *    X    *    Y    *   X&&Y  *
 * ------------------------------
 *   true  *   true  *   true  *
 *   true  *  false  *  false  *
 *   false *   true  *  false  *
 *   false *  false  *  false  *
 * 
 */

//Exemplos de Operadores Lógicos em JavaScript

//Operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b;//false
const resultadoE2 = a && b;//true

console.log(`true && false: ${resultadoE1}`);; //Saida: false
console.log(`true && false: ${resultadoE2}`);; //Saida: true
console.log("-----------------------------")
//Operador OU lógico (||)
console.log(`true || false: ${resultadoE1}`);; //Saida: true
console.log(`true || false: ${resultadoE2}`);; //Saida: false
console.log("-----------------------------")
//Operador NÃO lógico (!)
console.log(`!true : ${resultadoE1}`);; //Saida: false
console.log(`!false: ${resultadoE2}`);; //Saida: true

//Combinações de operadores lógicos
const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = (a && b) || a;
console.log("-----------------------------")
console.log(`(true || false ) && !false: ${resultadoComb1}`);//Saída:True
console.log(`(true && false ) || !false: ${resultadoComb2}`);//Saída:True
