//Codigo original do professor//
function gerarAleatorios() {
    const vetor = [];
    while (vetor.length < 6) {
        const aleatorio = Math.floor(Math.random() * 60 + 1);
        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        }
    }
    return vetor;
}

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

//Medidor de tempo utilizado pelos codigos//
function comparardesempenho(iteracoes = 1000) {
    let tempoTotalOriginal = 0;
    let tempoTotalOtimizado = 0;

    for (let i = 0; i < iteracoes; i++) {
        const inicioOriginal = performance.now();
        gerarAleatorios();
        tempoTotalOriginal += (performance.now() - inicioOriginal);
        const inicioOtimizado = performance.now();
        gerarNumerosOtimizado();
        tempoTotalOtimizado += (performance.now() - inicioOtimizado);
    }

    const tempoMedioOriginal = tempoTotalOriginal / iteracoes;
    const tempoMedioOtimizado = tempoTotalOtimizado / iteracoes;
    const economiaPercentual = ((tempoMedioOriginal - tempoMedioOtimizado) / tempoMedioOriginal) * 100;

    console.log(`Tempo da versão original: ${tempoMedioOriginal.toFixed(4)} ms`);
    console.log(`Tempo da versão otimizada: ${tempoMedioOtimizado.toFixed(4)} ms`);
    console.log(`Economia de tempo que obeteve o codigo: ${economiaPercentual.toFixed(2)}%`);

    return economiaPercentual;
}
comparardesempenho(1000);