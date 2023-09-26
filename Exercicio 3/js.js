let lista = [];
let op = 's';
let soma = 0;

while (op.toLowerCase() === 's') {
    let n1 = parseInt(prompt('Digite um número: '));
    lista.push(n1);
    soma += n1;
    op = prompt('Deseja continuar? s/n: ');
}

console.log('Os números: ' + lista);
console.log('O menor valor é: ' + Math.min(...lista)); 
console.log('O maior valor é: ' + Math.max(...lista)); 
console.log('A soma dos valores é: ' + soma);
