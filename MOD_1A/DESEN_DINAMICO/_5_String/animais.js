//Criação e String com nomes de animais
let animal1="Elefante";
let animal2="Girafa";
let animal3="Zebra";

//Exemplo do método subtring()
let parteAnimal1 = animal1.substring(3,7);
console.log("Resultado substring(): ", parteAnimal1);
//Exemplo do método replace()
let novoAnimal2 = animal2.replace("ra","re");
console.log("Resultado replace(): ", novoAnimal2);

//Exemplo do método concat()
let animaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado concat(): ", animaisJuntos);