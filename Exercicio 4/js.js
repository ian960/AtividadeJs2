let salarioInicial = parseFloat(prompt('Digite o salário inicial do funcionário: '));
let anoContratacao = 1995;
let percentualAumento = 1.5; 

let anoAtual = new Date().getFullYear();

for (let ano = 1997; ano <= anoAtual; ano++) {
    percentualAumento *= 2; 
    salarioInicial += (salarioInicial * (percentualAumento / 100));
}

console.log('O salário atual do funcionário em ' + anoAtual + ' é R$ ' + salarioInicial.toFixed(2));
