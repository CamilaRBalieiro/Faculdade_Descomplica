/**
 * FOR - (para)
 * WHILE - (enquanto)
 * DO WHILE - (faça enquanto)
 *  
 */

//Imagine que voce é um empregador de pizza em uma cidade com varias ruas numeradas de 1 a 10.
console.log("------------FOR-------------")
for(let rua = 1; rua <=10; rua++){
    console.log("Entre feita na rua :",rua)
 }
 console.log("------------WHILE-------------")
 let qtdFlexoes = 0;
 let cansaco = false;

 while(!cansaco){
    qtdFlexoes++;
    console.log("Eu fiz ", qtdFlexoes, " flexoes");
    if(qtdFlexoes === 10){
        cansaco = true;

    }
 }
 console.log("------------DO-WHILE-------------")
 let tempoDeAndar = 0;
 let caiu = false;
 do{
    tempoDeAndar++
    console.log("Andei de bicicleta por ",tempoDeAndar, "minutos....");
    if(tempoDeAndar === 3){
        caiu = true;
    }

 }while(!caiu && tempoDeAndar < 10);