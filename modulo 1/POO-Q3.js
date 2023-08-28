class pessoa{
    constructor(nome,idade,sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    apresentar() {
        return `Nome:${this.nome} idade:${this.idade} Sexo:${this.sexo}`
    }
}

const nome = prompt("Digite o seu nome: ")
const idade = prompt("Digite a sua idade: ")
const sexo = prompt("Digite o seu sexo: ")
const Pessoa = new pessoa(nome,idade,sexo)

console.log(Pessoa.apresentar())
