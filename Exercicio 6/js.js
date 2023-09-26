function calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses) {
    taxaJuros = taxaJuros / 100;
    
    const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoMeses);
    
    const montanteArredondado = montante.toFixed(2);
    
    return parseFloat(montanteArredondado);
}

const capitalInicial = parseFloat(prompt('Digite o capital inicial: '));
const taxaJuros = parseFloat(prompt('Digite a taxa de juros mensal (em percentual): '));
const tempoMeses = parseInt(prompt('Digite o tempo do investimento em meses: '));

const montante = calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses);

console.log('O montante do investimento é: R$ ' + montante);
