const { spawn } = require('child_process');
const readline = require('readline');

// Lista completa de programas com alinhamento correto
const programas = [
  { nome: '01- par-ou-impar.js',          desc: 'Verifica se um número é par ou ímpar' },
  { nome: '02- identificador-de-geracao.js', desc: 'Identifica geração por ano de nascimento' },
  { nome: '03- classificador-de-nota.js',  desc: 'Classifica notas em Aprovado/Recuperação/Reprovado' },
  { nome: '04- opcoes.js',                 desc: 'Menu de opções com switch-case' },
  { nome: '05- imc.js',                    desc: 'Calculadora de Índice de Massa Corporal' },
  { nome: '06 verificador-de-triangulos.js',          desc: 'Verifica e classifica triângulos' },
  { nome: '07- preco-das-macas.js',        desc: 'Calcula preço de maçãs' },
  { nome: '08- numeros-ordenados.js',      desc: 'Ordena dois números' },
  { nome: '09- contagem-regressiva.js',    desc: 'Contagem regressiva de 10 a 1' },
  { nome: '10- repetidor-de-numero.js',    desc: 'Repete um número 10 vezes' },
  { nome: '11- soma-de-numeros.js',        desc: 'Soma 5 números' },
  { nome: '12- tabuada.js',                desc: 'Mostra tabuada de um número' },
  { nome: '13- digite-zero-para-tirar-a-media.js', desc: 'Calcula média de números até digitar 0' },
  { nome: '14- fatorial.js',               desc: 'Calcula fatorial' },
  { nome: '15- fibonacci.js',              desc: 'Gera sequência de Fibonacci' }
];

function mostrarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n=== MENU DE PROGRAMAS ===\n');
  
  // Cabeçalho alinhado
  console.log('Nº  Nome do Programa               Descrição');
  console.log('-----------------------------------------------');
  
  // Lista de programas com alinhamento perfeito
  programas.forEach((prog, index) => {
    const num = (index + 1).toString().padEnd(3);
    const nome = prog.nome.padEnd(28);
    console.log(`${num} ${nome} ${prog.desc}`);
  });
  
  console.log('\n0.  Sair\n');

  rl.question('Digite o número do programa que deseja executar: ', (opcao) => {
    const escolha = parseInt(opcao);
    
    // Validação da entrada
    if (isNaN(escolha) {
      console.log('\n⚠️  Por favor, digite um número válido.');
      rl.close();
      return setTimeout(mostrarMenu, 1000);
    }
    
    if (escolha === 0) {
      console.log('\n✅ Encerrando o menu...');
      return rl.close();
    }
    
    if (escolha < 1 || escolha > programas.length) {
      console.log(`\n⚠️  Opção inválida! Digite um número entre 1 e ${programas.length} ou 0 para sair.`);
      rl.close();
      return setTimeout(mostrarMenu, 1000);
    }

    const programa = programas[escolha - 1];
    console.log(`\n🚀 Executando: ${programa.nome}\n`);
    rl.close();

    // Executa o programa selecionado
    const child = spawn('node', [programa.nome], {
      stdio: 'inherit'
    });

    // Tratamento para quando o programa terminar
    child.on('exit', (code) => {
      console.log('\n---------------------------------------');
      if (code === 0) {
        console.log('✅ Programa executado com sucesso!');
      } else {
        console.log(`⚠️  O programa encerrou com código: ${code}`);
      }
      console.log('Pressione qualquer tecla para voltar ao menu...');
      
      // Configura para voltar ao menu após qualquer entrada
      process.stdin.once('data', () => {
        mostrarMenu();
      });
    });

    // Tratamento para Ctrl+C durante a execução
    child.on('SIGINT', () => {
      console.log('\n\n🔄 Retornando ao menu...');
      mostrarMenu();
    });
  });
}

// Inicia o menu com tratamento de Ctrl+C global
console.clear();
console.log('=== BEM-VINDO AO MENU DE PROGRAMAS ===');
mostrarMenu();

process.on('SIGINT', () => {
  console.log('\n\n👋 Encerrando o programa...');
  process.exit();
});