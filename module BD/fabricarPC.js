class computador {
        constructor(ram, hdd, cpu, type) {
            this.ram = ram
            this.hdd = hdd
            this.cpu = cpu
            this.type = type
        }
    
        toString() {
            return `Tipo: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`
        }
    }

    class fabricaPc {
    montarComputador(type, ram, hdd, cpu) {
            switch (type) {
            case 'pc':
                return new PC(ram, hdd, cpu)
            case 'Servidor':
                return new Server(ram, hdd, cpu)
            default:
                throw new Error('Tipo de computador inválido')
            }
        }
    }

    class PC extends computador {
        constructor(ram, hdd, cpu) {
            super(ram, hdd, cpu, 'PC')
        }
    }
    class Server extends computador {
        constructor(ram, hdd, cpu) {
            super(ram, hdd, cpu, 'servidor')
    }
}

fabrica = new fabricaPc()

const pc = fabrica.montarComputador('pc', 8, 500, 2.5)
const servidor = fabrica.montarComputador('Servidor', 16, 1000, 3.0)

console.log(pc.toString())
console.log(servidor.toString())
