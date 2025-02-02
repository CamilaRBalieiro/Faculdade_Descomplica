//Definição da classe "Casa"

class Casa {
    //Construtor define as propriedades da classe
    constructor(cor,numQuarto,temGaragem) {
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;

    }
    //Método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this.cor}, e tem ${this.numQuarto} quartos.`;
        if (this.temGaragem) {
            descricao += " Tem garagem.";
        } else {
            descricao += " Não tem garagem.";
        }

        return descricao;
    }
}

//Criação de objetos (Instâncias da classe casa)
const minhaCasa = new Casa("azul", 3, true);
const suaCasa = new Casa("verde", 2, false);

//Manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());
