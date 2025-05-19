const { exec } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de programas disponíveis
const programas = [
  { nome: '01-par-ou-impar.js', desc: 'Verifica se um número é par ou ímpar' },
  { nome: '02-identificador-de-geracao.js', desc: 'Identifica geração por ano de nascimento' },
  { nome: '03-classificador-de-nota.js', desc: 'Classifica notas em Aprovado/Recuperação/Reprovado' },
  { nome: '04-opcoes.js', desc: 'Menu de opções com switch-case' },
  { nome: '05-juncis.js', desc: 'Programa não especificado' },
  { nome: '06-de-triangulos.js', desc: 'Verifica e classifica triângulos' },
  { nome: '07-preco-das-macas.js', desc: 'Calcula preço de maçãs' },
  { nome: '08-numeros-ordenados.js', desc: 'Ordena dois números' },
  { nome: '09-contagem-regressiva.js', desc: 'Contagem regressiva de 10 a 1' },
  { nome: '10-repetidor-de-numero.js', desc: 'Repete um número 10 vezes' },
  { nome: '11-soma-de-numeros.js', desc: 'Soma 5 números' },
  { nome: '12-tabuada.js', desc: 'Mostra tabuada de um número' },
  { nome: '13-digite-zero-para-tirar-a-media.js', desc: 'Calcula média de números até digitar 0' },
  { nome: '14-fatorial.js', desc: 'Calcula fatorial' },
  { nome: '15-fibonacci.js', desc: 'Gera sequência de Fibonacci' }
];

function mostrarMenu() {
  console.log('\n=== MENU DE PROGRAMAS ===');
  programas.forEach((prog, index) => {
    console.log(`${index + 1}. ${prog.nome} - ${prog.desc}`);
  });
  console.log('0. Sair\n');

  readline.question('Digite o número do programa que deseja executar: ', (opcao) => {
    const escolha = parseInt(opcao);
    
    if (isNaN(escolha) || escolha < 0 || escolha > programas.length) {
      console.log('\nOpção inválida!');
      mostrarMenu();
    } else if (escolha === 0) {
      console.log('\nSaindo...');
      readline.close();
    } else {
      const programaSelecionado = programas[escolha - 1];
      console.log(`\nExecutando: ${programaSelecionado.nome}\n`);
      
      exec(`node "${programaSelecionado.nome}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao executar: ${error.message}`);
        }
        if (stderr) {
          console.error(`Erro: ${stderr}`);
        }
        console.log(stdout);
        
        readline.question('\nPressione ENTER para voltar ao menu...', () => {
          mostrarMenu();
        });
      });
    }
  });
}

// Inicia o menu
mostrarMenu();