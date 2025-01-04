/** 
a) Função swap, com o objetivo de trocar os valores de duas posições de um vetor,
tendo como parâmetros de entrada o vetor e as posições
 */
const swap = (vetor, pos1, pos2) => {
    if (
        Array.isArray(vetor) &&
        pos1 >= 0 && pos1 < vetor.length &&
        pos2 >= 0 && pos2 < vetor.length
    ) {
        [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
    } else {
        throw new Error('Erro: [swap] parâmetros não são válidos');
    }
};

/** 
b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo
como parâmetros de entrada o vetor e a quantidade de trocas
*/
const shuffle = (vetor, trocas) => {
    if (!Array.isArray(vetor) || trocas < 1) {
        throw new Error('Erro: [shuffle] parâmetros não são válidos');
    }

    for (let i = 0; i < trocas; i++) {
        const index1 = Math.floor(Math.random() * vetor.length);
        const index2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, index1, index2);
    }
};

/**
c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble
Sort, tendo como parâmetro de entrada o vetor de inteiros
 */
const bubble_sort = (vetor) => {
    if (!Array.isArray(vetor) || vetor.some(isNaN)) {
        throw new Error('Erro: [bubble_sort] parâmteros não são válidos');
    }

    const length = vetor.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

/**
d) Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo
Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros
*/
const selection_sort = (vetor) => {
    if (!Array.isArray(vetor) || vetor.some(isNaN)) {
        throw new Error('Erro: [selection_sort] parâmetros não são válidos');
    }

    const length = vetor.length;

    for (let i = 0; i < length - 1; i++) {
        let minInd = i;
        for (let j = i + 1; j < length; j++) {
            if (vetor[j] < vetor[minInd]) {
                minInd = j; // Pega o índice do menor elemento
            }
        }
        if (minInd !== i) {
            swap(vetor, i, minInd);
        }
    }

    return vetor;
};

/**
e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort,
recursivo, tendo como parâmetros o vetor, posição inicial e posição final 
Referência: https://www.geeksforgeeks.org/quick-sort-algorithm/
*/
// Particionamento
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, j, i);//, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
};

// Quick Sort
const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = particionamento(arr, low, high); // Particiona o array
        quick_sort(arr, low, pi - 1);        // Ordena o lado esquerdo
        quick_sort(arr, pi + 1, high);       // Ordena o lado direito
    }
};
