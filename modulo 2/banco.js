var banco = {
    conta: 8003021,
    saldo: 3200,
    tipo: "Conta Corrente",
    Agência: "Brazesco"
}

function caixaeletronico(opcao, valor) {
    switch(opcao){
        case 1:
            saldoatual = banco.saldo
            return `Seu saldo atual é de R$ ${saldoatual}`
            break
        case 2:
            return `Deposito no valor de ${valor} reais realizado com sucesso. Seu novo saldo é de R$ ${banco.saldo += valor}`
            break
        case 3: 
            if(valor > 3200){
                return `Saldo insuficiente`
            } else{
            return `Saque no valor de ${valor} reais retirado com sucesso. Seu novo saldo é de R$ ${banco.saldo -= valor}`
            }
            break
        case 4:
            numconta = banco.conta
            return `O N° da sua conta é: ${numconta}`
            break
    }
} 
console.log("Buscar saldo(1); Depositar(2); Saque(3); Mostrar N° de conta(4)")
opcao = Number(prompt("Escolha uma das opções acima: "))
if(opcao == 2 || opcao == 3){
    valor = Number(prompt("Digite o valor que deseja: "))
} else {
    valor = null
}
console.log(caixaeletronico(opcao,valor))


