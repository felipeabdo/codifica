const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== REPETIDOR DE NÚMERO ===\n');

readline.question('Digite um número inteiro: ', (numero) => {
  const numInteiro = parseInt(numero);
  
  if (isNaN(numInteiro)) {
    console.log('\nErro: Por favor, digite um número inteiro válido.');
  } else {
    console.log('\nExibindo o número 10 vezes:');
    // Repete o número 10 vezes usando um loop for
    for (let i = 0; i < 10; i++) {
      console.log(numInteiro);
    }
  }
  
  readline.close();
});