function contar() {
    var inicio = document.getElementById("iniciotxt");
    var fim = document.getElementById("fimtxt");
    var passo = document.getElementById("passotxt");
    var resultado = document.getElementById("res");

    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert("ERRO: faltam dados.");
        resultado.innerHTML = "Impossível contar.";
    } else {
        resultado.innerHTML = "Contando...<br>"
        if (p <= 0) {
            resultado.innerHTML = "Passo inválido. Considerando passo = 1.";
            p = 1;
        }
        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `\u{1F449} ${c} `;
            }
        } else {
            // Contagem Decrescente
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `\u{1F449} ${c} `;
            }
        }
        resultado.innerHTML += `\u{1F3c1}`;
    }
}
