/**Instruções condicionais Switch
 * 
 * É uma estutura de controle que permite slecionar um dos vários blocos de codigo
 * baseado no valor de uma expressão(escolha).
 * É uma aleternativa mais organizada ao invés do IF...ELSE repetidamente
 * 
 * */
//Função que receba a cor do semáforo e decide a acao do pedestre
function checkTrafficLight(lighColor){
    switch(lighColor){
        case 'verde':
            console.log("Pode atravessar a rua.");
            break;
        case 'amarelo':
            console.log("Prepare-se para prarar.");
            break;
        case 'vermelho':
            console.log("Pare! Não atravesse a rua:");
            break;
        default:
            console.log("Cor invalida")
    }
}

//Exemplos de uso
checkTrafficLight('verde');
console.log("-------------")
checkTrafficLight('amarelo');
console.log("-------------")
checkTrafficLight('vermelho');
console.log("-------------")
checkTrafficLight('azul');
