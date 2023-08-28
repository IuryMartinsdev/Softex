var rodas, quant_pessoas, peso_bruto;


rodas = Number(window.prompt('Digite a quantidade de rodas'));
peso_bruto = Number(window.prompt('Digite o peso bruto em Kg do carro'));
quant_pessoas = window.prompt('Digite a quantidade de pessoas');
window.alert('o veiculo que melhor se enquadra é:');
if (rodas <= 3) {
  window.alert('Veículos com duas ou três rodas');
} else if (rodas == 4 && quant_pessoas <= 8 && peso_bruto == 3500) {
  window.alert('Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg');
} else if (rodas >= 4 && peso_bruto >= 3500 && peso_bruto <= 6000) {
  window.alert('Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg');
} else if (rodas >= 4 && quant_pessoas > 8) {
  window.alert('Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas');
} else if (rodas >= 4 && peso_bruto > 6000) {
  window.alert('Veículos com quatro rodas ou mais e com mais de 6000 kg.');
}

