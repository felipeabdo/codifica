const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite seu ano de nascimento: ', ano => {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(ano);
    
    if (idade < 12) {
        console.log(`Você é uma criança. 👶🏾`);
    } else if (idade >= 12 && idade < 18) {
        console.log(`Você é adolescente. 👧`);
    } else {
        console.log(`Você é idoso.`);
    }
    
    readline.close();
}