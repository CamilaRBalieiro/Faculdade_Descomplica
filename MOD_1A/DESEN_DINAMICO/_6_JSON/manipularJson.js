//Exmplo: Manipulação de Dados JSON

//Objeto JSON inicial
let pessoa = {
    "nome":"Camila",
    "idade":30,
    "endereco":{
        "rua":"Rua Primaria",
        "numero":"1"
    },
    "telefone":["(92) 98123 4567"]
};
console.log(pessoa);
console.log("**************************")
//Acessar Dados
console.log("\nAcessar Dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefone"][0]);

//Adicionar Dados
console.log("\nAdicionar Dados:");
pessoa.email = "camilarodriguesbalieiro@exemplo.com";
console.log(pessoa);

//Modificar Dados
console.log("\nModificar Dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua Secundaria"
console.log(pessoa)

//Remover Dados
console.log("\nRemover Dados:");
delete pessoa.telefone;
console.log(pessoa)

/*Existência da Propriedade: Se a propriedade não existirno objeto
o operador dele não causará um erro, apenas não fara nada
*/

//Operações com Arrays
console.log("\nOperações com Arrays:");
pessoa.hobbies = ["leitura","esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

//Iterar sobre as Propriedades do Objeto:
console.log("\nIterar sobre as Propriedades do Objeto:");
//for..in não deve ser usado para iterar sobre arrays se a ordem dos elementos for importante
//pois a ordem de iteração não é garantida.
for(let chave in pessoa){
    console.log(chave + ":" + pessoa[chave]);
}
//Converter de e para JSON:
console.log("\nConverter de e para JSON:");
let jsonTexto = JSON.stringify(pessoa);

console.log(jsonTexto);
let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);