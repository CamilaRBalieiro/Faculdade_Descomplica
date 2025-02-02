/**
 * Agrupar instruções
 * Delimitar {}
 *  * 
 */
//Imagine que voce está organizando uma festa de aniversario
{
    //area para dançar
    console.log("Hora de Dançar!")
}
{
    console.log("Vamos jogar");
    //Aqui  vao ser as instruções
}
{
    console.log("Hora de comer!");
}

danca:
for(let i=0; i<3;i++){
    jogos:
    for(let j=0 ;j<3 ;j++){
        if(i === 1 && j === 1){
            console.log("A competição de danca foi interrompida!");
            break danca;
        }
        console.log("competidor "+(i+1) + "esta dançando enquanto o competidor "+(j+1)+"esta jogando")
    }
}