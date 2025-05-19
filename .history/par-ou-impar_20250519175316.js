const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número inteiro: ', numero => {
    if (parseInt(numero) % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
    readline.close();
});