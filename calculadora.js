let numero1, numero2, operacao;
function calculadora(numero1, numero2, operacao) {
  switch (operacao) { 
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case 'x':
      return numero1 * numero2;
    case '%':
      if (numero2 === 0) { 
        return 'impossivel dividir por 0';}
      return numero1 / numero2;
    default:
      return 'Opção inválida! Tente +, -, x ou %.';
  }
}
do { 
  operacao = prompt('Digite qual operação deseja fazer (+, -, x ou %): ');

  numero1 = Number(prompt('Digite um número para as operações: '));
  numero2 = Number(prompt('Digite o segundo número para as operações: '));

  const resultado = calculadora(numero1, numero2, operacao);
  console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);
  
  while (true) {
    finalizar = prompt('Deseja sair? (s/n): ');
    
    if (finalizar === 's') {
      break;
    } else if (finalizar === 'n') {
      break;
    } else {
      console.log('Opção inválida! Digite "s" ou "n".');
    }
  }
} while (finalizar !== 's');
