//exemplo de uso do metodo slice()
//Temos uma string com varias frutas
let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("Frutas:",frutas)
console.log("Tamanho da string: ",frutas.length)
//Queremos obter uma parte da string
let parteFrutas = frutas.slice(5, 21)
console.log("Resultado do slice(): ", parteFrutas)

//exemplo do uso do metodo trim()
let frutaComEspaco = "        Abacate          ";
let frutaSemEspaco = frutaComEspaco.trim();
console.log("Resultado do trim(): ", frutaSemEspaco)

//exemplo do uso do metodo split()
let listaDeFrutas = "maçã,banana,laranja,uva,abacaxi";
let arrayDeFrutas = listaDeFrutas.split(",");
console.log ("Resultado do split(): ", arrayDeFrutas)


let saudacao = "Olá, mundo!"
let partSaudacao = saudacao.slice(5, 10)
console.log("Parte Saudação: ", partSaudacao)
