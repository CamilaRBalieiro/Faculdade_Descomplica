//Classe BASE "Casa"

class Casa {
    //Construtor define as propriedades da classe
    constructor(cor,numQuarto,temGaragem) {
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;

    }
    //Métodos getters e setters para acessar e modificar as propriedades
    //Recuperar valores
    get cor() {
        return this._cor;
    }
    //Alterações 
    set cor(novaCor) {
        this._cor = novaCor;
    }
    get numQuarto() {
        return this._numQuarto;
    }
    set numQuarto(novoNumQuarto) {
        this._numQuarto = novoNumQuarto;
    }
    get temGaragem() {
        return this._temGaragem;
    }
    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }
    //Método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this._cor}, e tem ${this._numQuarto} quartos.`;
        if (this._temGaragem) {
            descricao += " Tem garagem.";
        } else {
            descricao += " Não tem garagem.";
        }

        return descricao;
    }
}
//Classe derivada "CasaLuxuosa" que herda de "Casa"
class CasaLuxuosa extends Casa {
    constructor(cor,numQuarto,temGaragem,temPiscina) {
        //Chama o construtor da classe base
        super(cor,numQuarto,temGaragem);
        //Adiciona a nova propriedade
        this._temPiscina = temPiscina;
    }
    //Getter e setter para a nova propriedade
    get temPiscina() {
        return this._temPiscina;
    }
    set temPiscina(novoTemPiscina) {
        this._temPiscina = novoTemPiscina;
    }
    //Sobrescreve o método da classe base
    descrever() {
        let descricao = super.descrever();//Chama o método da classe base
        if (this._temPiscina) {
            descricao += " Tem piscina.";
        } else {
            descricao += " Não tem piscina.";
        }

        return descricao;
    }
}
//Criação de objetos (Instâncias das classes)
const minhaCasa = new Casa("azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("verde", 2, true, true);

//Manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());