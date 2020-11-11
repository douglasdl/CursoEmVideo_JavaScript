// Função com 1 parâmetro
function parImpar(n) {
    if (n%2 == 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

var retorno = parImpar(9);
console.log(retorno);

// Função com 2 parâmetros
function somar(n1=0, n2=0) {
    return n1 + n2;
}

var soma = somar(11, 3);
console.log(soma);

// Variável Funcional
let dobro = function(x) {
    return x * 2;
}

console.log(dobro(8));