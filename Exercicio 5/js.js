function calcularAreaEPerimetroDoCirculo(raio) {

    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    return {
        area: area,
        perimetro: perimetro
    };
}

const raio = 5;
const resultados = calcularAreaEPerimetroDoCirculo(raio);

console.log('Área do círculo: ' + resultados.area.toFixed(2));
console.log('Perímetro do círculo: ' + resultados.perimetro.toFixed(2));
