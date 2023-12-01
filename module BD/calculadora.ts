interface Strategy {
    executar(num1: number, num2: number): number
}

class Soma implements Strategy {
    constructor() {}

    executar(valor1: number, valor2: number): number {
        return valor1 + valor2
    }
}
class Subt implements Strategy {
    constructor() {}
    
    executar(valor1: number, valor2: number): number {
        return valor1 - valor2
    }
}
class Multi implements Strategy {
    constructor() {}
    
    executar(valor1: number, valor2: number): number {
        return valor1 * valor2
    }
}

class Calculadora {
    private num1: number = 0
    private num2: number = 0
    private Strategy: Strategy | null = null

    definirNumeros(num1: number, num2: number): void {
        this.num1 = num1
        this.num2 = num2
    }

    definirStrategy(Strategy: Strategy): void {
        this.Strategy = Strategy
    }

    operacao(op: string): void {
        switch(op) {
            case '+':
                this.definirStrategy(new Soma())
                break
            case '-':
                this.definirStrategy(new Subt())
                break
            case '*':
                this.definirStrategy(new Multi())
                break;
            default:
                console.log("Operação inválida.")
        }
    }

    executarOperacao(): void {
        if (this.Strategy) {
            const resultado = this.Strategy.executar(this.num1, this.num2)
            console.log(`Resultado da operação: ${resultado}`)
        } else {
            console.log("Nenhuma estratégia configurada.")
        }
    }
}

const calculadora = new Calculadora()

calculadora.definirNumeros(20,3)
calculadora.operacao('-')
calculadora.executarOperacao()

calculadora.definirNumeros(7,3)
calculadora.operacao('+')
calculadora.executarOperacao()

calculadora.definirNumeros(5,3)
calculadora.operacao('*')
calculadora.executarOperacao()