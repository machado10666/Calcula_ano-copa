function mostrarCopas() {
    // Limpa o conteúdo anterior
    document.getElementById("resultado").innerHTML = "";

    // Obtém os valores dos inputs
    var anoInicial = parseInt(document.getElementById("anoInicial").value);
    var anoLimite = parseInt(document.getElementById("anoLimite").value);

    // Verifica se os valores são válidos
    if (isNaN(anoInicial) || isNaN(anoLimite)) {
        alert("Por favor, insira valores válidos para os anos.");
        return;
    }

    // Loop para calcular e exibir os anos de Copa
    while (anoInicial <= anoLimite) {
        var paragrafo = document.createElement("p");
        paragrafo.textContent = anoInicial + " tem Copa do Mundo!";
        document.getElementById("resultado").appendChild(paragrafo);
        anoInicial += 4;
    }

    // Mensagem final
    var mensagemFinal = document.createElement("p");
    mensagemFinal.textContent = "Ufa! Esses foram os anos de Copa até " + anoLimite + ".";
    document.getElementById("resultado").appendChild(mensagemFinal);
}