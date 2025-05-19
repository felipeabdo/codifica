console.log("=== SEQUÊNCIA DE FIBONACCI (10 primeiros números) ===");

let a = 0;
let b = 1;

console.log(a);
console.log(b);

// Gera os próximos 8 números (totalizando 10)
for (let i = 2; i < 10; i++) {
  const proximo = a + b;
  console.log(proximo);
  
  // Atualiza os valores para a próxima iteração
  a = b;
  b = proximo;
}