console.log("=== SEQUÊNCIA DE FIBONACCI (10 primeiros números) ===");

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
  const proximo = a + b;
  console.log(proximo);
  
  a = b;
  b = proximo;
}