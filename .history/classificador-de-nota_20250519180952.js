const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('nota: ', ano => {
    const nota = parseFloat(ano);
    
    if (nota < 0 || nota > 10) {
        console.log(`Nota inválida. A nota deve estar entre 0 e 10.`);
    } else if (nota >= 7) {
        console.log(`Aprovado. 🎉`);
    } else if (nota >= 5) {
        console.log(`Recuperação. 📚`);
    } else {
        console.log(`Reprovado. ❌`);
    }

    readline.close();
});