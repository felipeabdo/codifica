const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CALCULADORA DE FATORIAL ===\n');

readline.question('Digite um número inteiro não negativo: ', (numero) => {
  const n = parseInt(numero);
  
  // Validação da entrada
  if (isNaN(n) || n < 0) {
    console.log('\nErro: Por favor, digite um número inteiro não negativo válido.');
  } else {
    let fatorial = 1;
    let contador = n;
    
    // Cálculo do fatorial usando while
    while (contador > 1) {
      fatorial *= contador;
      contador--;
    }
    
    // Exibe o resultado
    console.log(`\n${n}! = ${fatorial}`);
    
    // Mostra a conta completa (opcional)
    if (n > 1) {
      let conta = '';
      for (let i = n; i >= 1; i--) {
        conta += i + (i > 1 ? ' × ' : ' = ');
      }
      console.log(conta + fatorial);
    }
  }
  
  readline.close();
});