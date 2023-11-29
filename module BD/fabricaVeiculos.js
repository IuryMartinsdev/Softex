class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  
    represent() {
      return `Veículo: ${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    represent() {
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
  }
  
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    represent() {
      return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
  }

  class Aplicacao {
    constructor() {
      this.veiculos = [
        new Carro('Civic', 'Honda', 'Preto', 4, 4),
        new Moto('Ninja', 'Kawasaki', 'Vermelho', 2, 600),
        new Carro('Corolla', 'Toyota', 'Branco', 4, 2),
        new Moto('Monster', 'Ducati', 'Azul', 2, 1200),
        new Carro('Gol', 'Volkswagen', 'Prata', 4, 2),
        new Moto('CBR', 'Honda', 'Amarelo', 2, 1000),
      ];
    }
  
    cloneVeiculos() {
      return this.veiculos.map((veiculo) => veiculo.clone());
    }
  
    representClones() {
      const clones = this.cloneVeiculos();
      clones.forEach((clone) => {
        console.log(clone.represent());
      });
    }
  }

  const app = new Aplicacao();
  app.representClones();
  