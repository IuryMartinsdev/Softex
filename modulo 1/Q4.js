class calculadora {
    constructor(num1,num2) {
    this.num1 = num1
    this.num2 = num2
    }
    soma() {
        return `${this.num1} + ${this.num2} = ${this.num1+this.num2}`
    }
    subtracao() {
        return `${this.num1} - ${this.num2} = ${this.num1-this.num2}`
    }
    multiplicacao() {
        return `${this.num1} * ${this.num2} = ${this.num1*this.num2}`
    }
    divisao() {
        return `${this.num1} / ${this.num2} = ${this.num1/this.num2}`
    }
}
num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite p segundo número: "))
operacao = prompt("Escoha entre uma das 4 operações: (+) (-) (*) (/): ")
Calculadora = new calculadora(num1,num2)
if(operacao == "+"){
    console.log(Calculadora.soma())
} else if(operacao == "-"){
    console.log(Calculadora.subtracao())
} else if(operacao == "*"){
    console.log(Calculadora.multiplicacao())
} else if(operacao == "/"){
    console.log(Calculadora.divisao())
} else {
    console.log("Parâmetro inválido!")
}
