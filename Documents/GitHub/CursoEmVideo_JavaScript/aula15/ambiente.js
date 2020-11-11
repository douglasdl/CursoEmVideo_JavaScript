let num = [5, 8, 2, 9, 3];      // Criar vetor
num.push(7);                    // Inserir item no final do vetor
var comprimento = num.length;   // Comprimento do vetor
num.sort();                     // Ordenar itens do vetor
console.log(num);
console.log(`O vetor tem ${comprimento} posições.`);

// Método For
for (let pos = 0; pos < comprimento; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

// Método For in
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

var valor = 44;
var busca = num.indexOf(valor);     // Procura elemento e retorna a posição
if (busca == -1) {
    console.log(`O valor ${valor} não foi encontrado.`)
} else {
    console.log(`O valor ${valor} está na posição ${busca}`);
}