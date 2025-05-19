console.log("=== CONTAGEM REGRESSIVA ===");

for (let i = 10; i >= 1; i--) {
  console.log(i);
  
  // Adiciona um pequeno delay para melhor visualização (opcional)
  // Descomente as linhas abaixo se quiser ver a contagem com pausas de 1 segundo
  // await new Promise(resolve => setTimeout(resolve, 1000));
}

console.log("Fogo!");