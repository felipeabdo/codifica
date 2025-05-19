const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== ORDENADOR DE VALORES ===\n');

function lerValores() {
  readline.question('Digite o primeiro valor: ', (valor1) => {
    readline.question('Digite o segundo valor (diferente do primeiro): ', (valor2) => {
      // Converte para números
      const num1 = parseFloat(valor1);
      const num2 = parseFloat(valor2);
      
      // Verifica se os valores são válidos e diferentes
      if (isNaN(num1) || isNaN(num2)) {
        console.log('\nErro: Digite valores numéricos válidos.');
      } else if (num1 === num2) {
        console.log('\nErro: Os valores não podem ser iguais.');
      } else {
        // Ordena e exibe os valores
        const menor = Math.min(num1, num2);
        const maior = Math.max(num1, num2);
        console.log(`\nValores em ordem crescente: ${menor}, ${maior}`);
      }
      
      readline.close();
    });
  });
}

lerValores();