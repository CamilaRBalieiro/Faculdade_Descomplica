//Variável que representa  a previsão do tempo
//Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy"(nublado)

let weatherForecast = "rainy";

//Analogia com a vida real: Decidindo se devemos levar um guarda-chuva
if(weatherForecast === "rainy"){
    console.log("devemos levar um guarda-chuva");
}else {
    console.log("Não devemos levar um guarda-chuva");
}
console.log("---------------------------")
let weatherForecast2 = "cloudy";
if(weatherForecast2 === "rainy"){//SE
    console.log("devemos levar um guarda-chuva");
}else if(weatherForecast2 === "cloudy"){//SENÃO SE
    console.log("devemos levar um guarda-chuva, só por segurança");
}else{//SENÃO
    console.log("Não devemos levar um guarda-chuva");
}
console.log("---------------------------")
