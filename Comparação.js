function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        if (vetor.includes(aleatorio)) {
            continue;
        } else {
            vetor.push(aleatorio);
        }
    }
    return vetor;
}
function gerarNumerosOtimizado() {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    const numerosGerados = [];

    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        numerosGerados.push(numeros[indiceAleatorio]);
        numeros.splice(indiceAleatorio, 1);
    }

    return numerosGerados;
}

function compararDesempenho(iteracoes = 1000) {
    let tempoTotalOriginal = 0;
    let tempoTotalOtimizado = 0;
    for (let i = 0; i < iteracoes; i++) {
        const inicioOriginal = performance.now();
        gerarAleatorios();
        const fimOriginal = performance.now();
        tempoTotalOriginal += (fimOriginal - inicioOriginal);
        const inicioOtimizado = performance.now();
        gerarNumerosOtimizado();
        const fimOtimizado = performance.now();
        tempoTotalOtimizado += (fimOtimizado - inicioOtimizado);
    }
    const tempoMedioOriginal = tempoTotalOriginal / iteracoes;
    const tempoMedioOtimizado = tempoTotalOtimizado / iteracoes;
    const economiaPercentual = ((tempoMedioOriginal - tempoMedioOtimizado) / tempoMedioOriginal) * 100;

    console.log(`Tempo médio da versão original: ${tempoMedioOriginal.toFixed(4)} ms`);
    console.log(`Tempo médio da versão otimizada: ${tempoMedioOtimizado.toFixed(4)} ms`);
    console.log(`Economia de tempo: ${economiaPercentual.toFixed(2)}%`);

    return economiaPercentual;
}
compararDesempenho(1000);
