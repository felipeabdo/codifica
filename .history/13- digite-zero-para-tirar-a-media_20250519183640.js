const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CALCULADORA DE MÉDIA ===');
console.log('Digite números decimais (digite 0 para calcular a média)\n');

let soma = 0;
let quantidade = 0;

function receberNumero() {
  readline.question('Digite um número: ', (entrada) => {
    const numero = parseFloat(entrada);
    
    if (isNaN(numero)) {
      console.log('Por favor, digite um número válido.\n');
      receberNumero();
    } else if (numero !== 0) {
      soma += numero;
      quantidade++;
      receberNumero();
    } else {
      if (quantidade === 0) {
        console.log('\nNenhum número foi digitado para cálculo.');
      } else {
        const media = soma / quantidade;
        console.log(`\nMédia calculada: ${media.toFixed(2)}`);
        console.log(`(Soma: ${soma}, Quantidade: ${quantidade} números)`);
      }
      readline.close();
    }
  });
}

// Inicia o processo
receberNumero();