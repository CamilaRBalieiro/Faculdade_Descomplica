//Exemplo de uso de VAR,LET e CONST

const externo = "Eu sou uma constante global";
console.log(externo)

//
function exemploVar(){
    if(true){
        var mensagem = "Ola,Faculdade Eu sou uma var";
    }
    console.log(mensagem);
}
exemploVar();
var mensagem = "Var Externo"
console.log(mensagem);

function exemploLet(){
    if(true){
        let mensagem = "Ola,Faculdade Eu sou uma Let";
        console.log(mensagem);
    }
   
}
exemploLet()

function exemploConstante(){
    const mensagem = "Ola, eu sou uma constante...";
    console.log(mensagem);
}
exemploConstante();
console.log(externo);

/**
  comentario
  de varias linhas 
  */


/**
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 
 * @example
 * 
 */

function somar(a,b){
    return a+b;
}
function subtrair(a,b){
    return a-b;
}

let resultadoSoma = somar(40,2);
console.log(resultadoSoma);

let resultadoSubtracao = subtrair(10,5);
console.log(resultadoSubtracao);