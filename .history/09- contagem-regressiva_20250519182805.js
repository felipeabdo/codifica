console.log("=== CONTAGEM REGRESSIVA ===");

for (let i = 10; i >= 1; i--) {
  console.log(i);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
}

console.log("Fogo!");