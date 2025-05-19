const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== GERADOR DE TABUADA ===\n');

readline.question('Digite um número para ver sua tabuada (1 a 10): ', (numero) => {
  const num = parseInt(numero);
  
  // Verifica se o número é válido
  if (isNaN(num) || num < 1 || num > 10) {
    console.log('\nPor favor, digite um número inteiro entre 1 e 10.');
  } else {
    console.log(`\nTabuada do ${num}:`);
    // Loop for para gerar a tabuada
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  
  readline.close();
});