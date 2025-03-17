// Captura elementos do DOM
const form = document.getElementById('form-copa');
const inputAnoInicial = document.getElementById('ano-inicial');
const inputAnoLimite = document.getElementById('ano-limite');
const mensagemErro = document.getElementById('erro');
const resultado = document.getElementById('resultado');
const botao = document.getElementById('botao');

// Função para verificar se o ano é de Copa do Mundo
function isAnoCopaValido(ano) {
    const anoAtual = new Date().getFullYear();
    if (ano < 1930 || ano > anoAtual + 4) {
        return false; // Fora do intervalo válido
    }
    // Verifica se o ano é um ano de Copa (1930, 1934, 1938, ..., exceto 1942 e 1946)
    if ((ano - 1930) % 4 === 0 && ano !== 1942 && ano !== 1946) {
        return true;
    }
    return false;
}

// Função para listar os anos de Copa no intervalo
function listarAnosCopas(anoInicial, anoLimite) {
    let anosCopas = [];
    for (let ano = anoInicial; ano <= anoLimite; ano++) {
        if (isAnoCopaValido(ano)) {
            anosCopas.push(ano);
        }
    }
    return anosCopas;
}

// Validação no envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const anoInicial = parseInt(inputAnoInicial.value);
    const anoLimite = parseInt(inputAnoLimite.value);
    const anoAtual = new Date().getFullYear();

    // Limpa mensagens anteriores
    mensagemErro.textContent = '';
    mensagemErro.style.display = 'none';
    resultado.textContent = '';

    // Validação dos anos
    if (isNaN(anoInicial) || isNaN(anoLimite)) {
        mensagemErro.textContent = 'Por favor, insira anos válidos.';
        mensagemErro.style.display = 'block';
    } else if (anoInicial < 1930 || anoLimite < 1930) {
        mensagemErro.textContent = 'Os anos devem ser a partir de 1930.';
        mensagemErro.style.display = 'block';
    } else if (anoInicial > anoLimite) {
        mensagemErro.textContent = 'O ano inicial não pode ser maior que o ano limite.';
        mensagemErro.style.display = 'block';
    } else {
        // Lista os anos de Copa no intervalo
        const anosCopas = listarAnosCopas(anoInicial, anoLimite);
        if (anosCopas.length > 0) {
            resultado.innerHTML = anosCopas.map(ano => `<p>${ano} tem Copa do Mundo!</p>`).join('');
        } else {
            resultado.textContent = 'Nenhum ano de Copa do Mundo encontrado no intervalo especificado.';
        }
    }
});

// Validação em tempo real para o ano inicial
inputAnoInicial.addEventListener('input', function () {
    const anoInicial = parseInt(this.value);
    if (anoInicial < 1930) {
        mensagemErro.textContent = 'O ano inicial deve ser a partir de 1930.';
        mensagemErro.style.display = 'block';
        botao.disabled = true;
    } else {
        mensagemErro.style.display = 'none';
        botao.disabled = false;
    }
});

// Validação em tempo real para o ano limite
inputAnoLimite.addEventListener('input', function () {
    const anoLimite = parseInt(this.value);
    if (anoLimite < 1930) {
        mensagemErro.textContent = 'O ano limite deve ser a partir de 1930.';
        mensagemErro.style.display = 'block';
        botao.disabled = true;
    } else {
        mensagemErro.style.display = 'none';
        botao.disabled = false;
    }
});