const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CALCULADORA DE IMC ===\n');

readline.question('Digite seu peso em kg (ex: 70): ', (peso) => {
  readline.question('Digite sua altura em metros (ex: 1.75): ', (altura) => {
    // Converte as entradas para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    // Verifica se os valores são válidos
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
      console.log('\nErro: Valores inválidos. Digite números positivos.');
      readline.close();
      return;
    }
    
    // Calcula o IMC
    const imc = pesoNum / (alturaNum * alturaNum);
    
    // Determina a categoria
    let categoria;
    if (imc < 18.5) {
      categoria = 'Baixo peso';
    } else if (imc < 25) {
      categoria = 'Peso normal';
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obesidade';
    }
    
    // Exibe os resultados
    console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${categoria}`);
    
    // Tabela de referência
    console.log('\nTabela de referência:');
    console.log('IMC < 18.5: Baixo peso');
    console.log('IMC 18.5-24.9: Peso normal');
    console.log('IMC 25-29.9: Sobrepeso');
    console.log('IMC ≥ 30: Obesidade');
    
    readline.close();
  });
});