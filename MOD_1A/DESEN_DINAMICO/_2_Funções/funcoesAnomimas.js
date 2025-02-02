/*Funções Animinas:
    Não possuem um nome diretamente associado a elas
*/

//Declaração de uma variavel chamada resultado e atribuição de uma função anônima a ela
let somarParametros = function(parametro1,parametro2){
    console.log ("Parâmetro [1]: " + parametro1);
    console.log ("Parâmetro [2]: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log ("Resultado: "+resultado);

    return resultado;

};
//Chamada da função anônima através da variável
let resultado = somarParametros(5,10)
console.log("Resuldado da chamada da Função somarParametros: "+resultado);

//Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutando a funcao passada com argumento: ");
    return funcao(valor1,valor2)
}
//Passando a funcão anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 7 , 3)
console.log ("Resultado da execução da função passada com argumento: "+resultadoExecucao)

//Definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a,b){
    console.log("\nFuncão de chamanda imediata: ");
    return a*b
}(4,6))
console.log("Resultado da funcão anônima chamada imediatamente: " + resultadoImediato)