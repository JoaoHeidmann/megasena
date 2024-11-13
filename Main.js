//Codigo otimizado//
function gerarNumerosMegaSena() {
    const numeros = [];
    for (let i = 1; i <= 60; i++) {
        numeros.push(i);
    }
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros.slice(0, 6);
}
console.log(gerarNumerosMegaSena());