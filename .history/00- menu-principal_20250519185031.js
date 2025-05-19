const { exec } = require('child_process');
const readline = require('readline');

// Lista de programas (manter igual)

function mostrarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n=== MENU DE PROGRAMAS ===');
  programas.forEach((prog, index) => {
    console.log(`${index + 1}. ${prog.nome} - ${prog.desc}`);
  });
  console.log('0. Sair\n');

  rl.question('Digite o número do programa que deseja executar: ', (opcao) => {
    const escolha = parseInt(opcao);
    
    if (isNaN(escolha) || escolha < 0 || escolha > programas.length) {
      console.log('\nOpção inválida!');
      rl.close();
      mostrarMenu();
    } else if (escolha === 0) {
      console.log('\nSaindo...');
      rl.close();
    } else {
      const programaSelecionado = programas[escolha - 1];
      console.log(`\nExecutando: ${programaSelecionado.nome}\n`);
      
      // Fecha a interface atual antes de executar
      rl.close();
      
      const child = exec(`node "${programaSelecionado.nome}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao executar: ${error.message}`);
        }
        if (stderr) {
          console.error(`Erro: ${stderr}`);
        }
        console.log(stdout);
        
        // Restaura o menu após execução
        mostrarMenu();
      });

      // Redireciona a entrada padrão para o processo filho
      process.stdin.pipe(child.stdin);
    }
  });
}

// Inicia o menu
mostrarMenu();