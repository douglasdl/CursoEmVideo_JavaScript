function gerarTabuada() {
    var numero = document.getElementById("numerotxt");
    var tabuada = document.getElementById("tabuada");
    var resultado;
    var num;
    if (numero.value.length == 0) {
        tabuada.innerHTML = "<p>Insira um número.<p>";
    } else {
        tabuada.innerHTML = "";
        num = Number(numero.value);
        for (var i = 0; i <= 10; i ++) {
            resultado = i * num;
            //tabuada.innerHTML += `<option value = ${i}>${num} x ${i} = ${resultado}</option>`;
            let item = document.createElement('option');
            item.text = `${num} x ${i} = ${i * num}`;
            item.value = `tabuada${i}`;
            tabuada.appendChild(item);
        }
    }
}