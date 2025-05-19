const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CALCULADORA DE PREÇO DE MAÇÃS ===\n');
console.log('Preços:');
console.log('- Até 11 maçãs: R$ 0,30 cada');
console.log('- 12 maçãs ou mais: R$ 0,25 cada\n');

readline.question('Digite a quantidade de maçãs compradas: ', (quantidade) => {
  // Converte a entrada para número inteiro
  const qtd = parseInt(quantidade);
  
  // Verifica se o valor é válido
  if (isNaN(qtd) || qtd <= 0) {
    console.log('\nErro: Digite um número inteiro positivo válido.');
    readline.close();
    return;
  }
  
  // Calcula o preço total
  const precoUnitario = qtd < 12 ? 0.30 : 0.25;
  const total = qtd * precoUnitario;
  
  // Exibe o resultado formatado
  console.log(`\nQuantidade: ${qtd} maçã(s)`);
  console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2).replace('.', ',')}`);
  console.log(`Total da compra: R$ ${total.toFixed(2).replace('.', ',')}`);
  
  readline.close();
});