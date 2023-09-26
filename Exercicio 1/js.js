let paisA = 80000;
let paisB = 200000;
let anos = 0;

while (paisA < paisB) {
    anos += 1;
    paisA += paisA * 0.03;
    paisB += paisB * 0.015;
}

console.log('Vai demorar ' + anos + ' anos para que o país A ultrapasse o país B');
console.log('País A: ' + paisA);
console.log('País B: ' + paisB);
