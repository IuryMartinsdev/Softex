interface Passaro {
    som(): void
    voar(): void
}
class Pato implements Passaro {
    som(): void {
        console.log("Qack Quack!")
    }
    voar(): void {
        console.log("Voando ao vento...")
    }
}

class Galinha implements Passaro {
    som(): void {
        console.log("Cocoricoo!")
    }
    voar(): void {
        console.log("Minhas assas não foram feitas para voar...")
    }
}
class AdaptadorGalinha implements Passaro {
    private galinha: Galinha

    constructor(galinha: Galinha) {
        this.galinha = galinha
    }

    voar(): void {
        this.galinha.voar()
    }

    som(): void {
        this.galinha.som()
    }
}

class AdaptadorPato implements Passaro {
    private pato: Pato
    constructor(pato: Pato) {
        this.pato = pato
    }
    voar(): void {
        this.pato.voar()
    }
    som(): void {
        this.pato.som()
    }
}
class AdaptadorGalinhaDemo {
    static demonstrar(ave: Passaro): void {
        console.log("Galinha fazendo som: ")
        ave.som()

        console.log("Galinha voando: ")
        ave.voar()
    }
}
class AdaptadorPatoDemo {
    static demonstrar(ave: Passaro):void {
        console.log("Pato fazendo som: ")
        ave.som();

        console.log("Pato voando: ")
        ave.voar()
    } 
}

const pato = new Pato()
const galinha = new Galinha()

console.log("Pato:")
AdaptadorPatoDemo.demonstrar(pato)

console.log("\nGalinha:")
AdaptadorGalinhaDemo.demonstrar(galinha)
