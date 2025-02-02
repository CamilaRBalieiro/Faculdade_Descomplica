/*Funções Arrow(SETA) são uma sintaxe moderna e mais concisa,
principalmente para casos de uso simples e call-backs
*/

//Exemplo básico de uma arrow function que soma dois números
let somar = (a,b)=>{
    return a+b;
};
//Chamando a função e exibindo o resultado no console
console.log(somar(5,3));
console.log("-----------------")
//Exemplo de arrow function com um único parametro(não precisa de parênteses)
let dobrar = n=> n*2;
//Chamando a função e exibindo o resultado no console
console.log(dobrar(5));
console.log("-----------------")
//Exemplo de uma arrow function usada como callback
let numeros = [1,2,3,4,5];
//Usando arrow function com o método map para dobrar os valores de array
let numerosDobrados = numeros.map(n=>n*2);
//Exibindo o array resultante no console
console.log(numerosDobrados);
console.log("-----------------")
//Arrow function com corpo de funçõ mais complexo
let saudacao = (nome, idade)=>{
    let mensagem = `Ola, meu nome é ${nome} e eu tenho ${idade} anos.`;
    return mensagem;
};
//Chamando a função e exibindo o resultado no console
console.log(saudacao("Ana",25));