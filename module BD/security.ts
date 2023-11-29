class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta123"
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca()
      }
      return SistemaSeguranca.instancia!
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!")
      } else {
        console.log("Acesso negado. Senha incorreta.")
      }
    }
  }
  
  
const sistemaSeguranca = SistemaSeguranca.getInstance()
  
sistemaSeguranca.acessarBaseSecreta("12345678")
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta123")
  