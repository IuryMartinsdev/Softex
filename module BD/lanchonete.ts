interface Sanduiche {
    custo(): number
}
class SanduicheBase implements Sanduiche {
    custo(): number {
        return 0
    }
}
abstract class Ingredientes implements Sanduiche {
    protected sanduiche: Sanduiche

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche
    }
    abstract custo(): number
}

class FrangoAssado extends SanduicheBase {
    custo(): number {
        return 4.50
    }
}
class Pepperoni extends Ingredientes {
    custo(): number {
        return this.sanduiche.custo() + 0.99
    }
}
class Queijo extends Ingredientes {
    custo(): number {
        return this.sanduiche.custo() + 2.00
    }
}

// Implementação do sanduíche de carne e bacon
class CarneBacon extends SanduicheBase {
    custo(): number {
        return 5.49
    }
}

const sanduiche1: Sanduiche = new Queijo(new CarneBacon());
console.log(`Sanduíche de Carne e Bacon com o complemento Queijo Ralado custa $${sanduiche1.custo().toFixed(2)}`)

const sanduiche2: Sanduiche = new Queijo(new Pepperoni(new FrangoAssado()))
console.log(`Sanduíche de Frango Assado com os complementos Pepperoni e Queijo Ralado custa $${sanduiche2.custo().toFixed(2)}`)
