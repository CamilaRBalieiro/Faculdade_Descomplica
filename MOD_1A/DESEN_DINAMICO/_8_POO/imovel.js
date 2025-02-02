//Classe BASE "Imovel"
class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;
    }
    //Método abstrato para descrever o imóvel (será implementado nas classes filhas/subclasses)
    descrever() {
        throw new Error("Este método deve ser implementado nas classes filhas!");
    }

}
//Classe derivada "Casa" que herda de "Imovel"
class Casa extends Imovel {
    constructor(endereco, tamanho, cor,  numQuartos, temGaragem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem
    }
    //Implementação do método abstrato "descrever" da classe base
    descrever() {
        let descricao = `Casa localizada em : ${this.endereco}, 
        de cor ${this.cor}, com ${this.numQuartos} quartos, de tamanho ${this.tamanho}m²`;

        //operador ternário para verificar se tem garagem TRUE : FALSE
        descricao += this.temGaragem ? ", com garagem" : ", sem garagem";

        return descricao;
    }
}
//Classe derivada "Apartamento" que herda de "Imovel"
class Apartamento extends Imovel {
    constructor(endereco, tamanho, andar, possuiElevador) {
        super(endereco, tamanho);
        this.andar = andar;
        this.possuiElevador = possuiElevador;
    }

    //Implementação do método abstrato "descrever" da classe base
    descrever() {

        let descricao = `Apartamento localizado em : ${this.endereco},
        no ${this.andar}º andar, de tamanho ${this.tamanho}m²`;
        descricao += this.possuiElevador ? ", com elevador" : ", sem elevador";

        return descricao;
    }
}
//Funcão para descrever um imóvel (Polimorfismo)
function descreverImovel(imovel) {
    console.log(imovel.descrever());
}

//Criação de objetos (Instancia das classes)
const minhaCasa = new Casa("Rua das Flores, 123", 100, "Azul", 3, true);
const meuApartamento = new Apartamento("Av. Brasil, 456", 50, 10, true);

//Manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);