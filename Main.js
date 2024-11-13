function gerarNumerosMegaSena() {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    const numerosGerados = [];

    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        numerosGerados.push(numeros[indiceAleatorio]);
        numeros.splice(indiceAleatorio, 1);
    }

    return numerosGerados;
}
console.log(gerarNumerosMegaSena());