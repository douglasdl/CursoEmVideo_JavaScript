var numero = document.getElementById("fnum");
var lista = document.getElementById("flista");
var resultado = document.getElementById("resultado");
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value)); // Adicionar elemento no vetor
        let item = document.createElement('option');
        item.text = `valor ${numero.value} adicionado`;
        lista.appendChild(item);
    } else {
        window.alert("Valor inválido ou já encontrado na lista.");
    }
    numero.value = "";
    numero.focus(); 
}
function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar.");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = -0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];  
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / total;
        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo, temos ${total} itens cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor informado, foi ${maior}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado, foi ${menor}.</p>`;
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
        resultado.innerHTML += `<p>A média dos valores é ${media}.</p>`;
    }
    
}