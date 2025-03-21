function encontrarModa(vetor) {
    let frequencia = {}; // Objeto para armazenar as contagens
    let moda = null;
    let maxFrequencia = 0;
    let contadorModa = 0;

    // Contar a frequência de cada número
    for (let num of vetor) {
        frequencia[num] = (frequencia[num] || 0) + 1;

        // Atualiza a moda se a frequência atual for maior
        if (frequencia[num] > maxFrequencia) {
            moda = num;
            maxFrequencia = frequencia[num];
            contadorModa = 1; // Reinicia o contador de moda
        } else if (frequencia[num] === maxFrequencia) {
            contadorModa++; // Conta quantos números têm a mesma frequência máxima
        }
    }

    // Se houver mais de um número com a mesma frequência máxima, não há moda
    return contadorModa > 1 ? "Não há moda" : moda;
}

// Testando a função
let vetor = [5, 5, 2, 3, 1, 3, 8];
console.log("Moda:", encontrarModa(vetor));
