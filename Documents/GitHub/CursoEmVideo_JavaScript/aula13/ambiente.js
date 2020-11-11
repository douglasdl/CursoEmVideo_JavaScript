// Estrutura de repetição com teste lógico no começo
var contador = 1;
var limite = 5;
while (contador <= limite) {
    console.log(`Passo ${contador}`);
    contador++;
}

contador = 1;
// Estrutura de repetição com teste lógico no final
do {
    console.log(`Passo ${contador}`);
    contador++;
} while (contador <= limite);