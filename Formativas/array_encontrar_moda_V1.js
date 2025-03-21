var numeroVezes;
var numeroVezesAnterior = 0;
var moda = null; // Usando null para indicar ausência de moda
var vetor = [5, 5, 2, 3, 1, 3, 8];

for (var i = 0; i < vetor.length; i++) {
    numeroVezes = 0;
    for (var j = 0; j < vetor.length; j++) { // Utiliza j++
        if (vetor[j] === vetor[i]) { // Verifica se são iguais
            numeroVezes++;
        }
    }

    if (numeroVezes > numeroVezesAnterior) {
        moda = vetor[i];
        numeroVezesAnterior = numeroVezes;
    } else if (numeroVezes === numeroVezesAnterior && vetor[i] !== moda) {
        moda = "Não há moda"; // Indica que há mais de um número com a mesma frequência máxima
    }
}

console.log("Moda:", moda);
