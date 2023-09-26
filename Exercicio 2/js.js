let pares = 0;
let impares = 0;

for (let i = 0; i < 5; i++) {
    var n1 = parseInt(prompt('Digite um número: '));
    if (n1 % 2 === 0) {
        pares += 1;
    } else {
        impares += 1;
    }
}

console.log('Números pares: ' + pares);
console.log('Números ímpares: ' + impares);
