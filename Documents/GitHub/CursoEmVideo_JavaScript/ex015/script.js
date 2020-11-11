function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anoDeNascimento = document.getElementById("txtano");
    var resultado = document.getElementById("res");
    var sexo = document.getElementsByName("radsex");
    var idade;
    var genero = "";
    var imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');
    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > ano) {
        window.alert("Verifique os dados e tente novamente.");
    } else {
        idade = Number(ano - anoDeNascimento.value);
        if (sexo[0].checked) {
            genero = "homem";
            if (idade >= 0 && idade < 12) {
                // Criança
                imagem.setAttribute('src', 'foto-bebe-m.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto.png');
            } else {
                // Idoso
                imagem.setAttribute('src', 'foto-idoso.png');
            }
        } else {
            genero = "mulher";
            if (idade >= 0 && idade < 12) {
                // Criança
                imagem.setAttribute('src', 'foto-bebe-f.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulta.png');
            } else {
                // Idoso
                imagem.setAttribute('src', 'foto-idosa.png');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`;
        resultado.appendChild(imagem);
    }
}