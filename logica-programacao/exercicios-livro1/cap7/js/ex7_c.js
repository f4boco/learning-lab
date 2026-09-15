/**
 * esse script recebe o valor de uma vacina e as informações de convênio e calcular o
 * desconto e o valor a pagar.
 * 
 * autor: Fabiano O.
 */

// REFERENCIA OS ELEMENTOS HTML
const formularioVenda = document.querySelector("#formulario-venda");
const inValor = document.querySelector("#valor-vacina");
const possuiConvenio = document.querySelectorAll(
    `input[name="possui-convenio"]`
);
const inConvenio = document.querySelector("#convenio");
const outDesconto = document.querySelector("#desconto");
const outValorPagar = document.querySelector("#pagar");

// FUNÇÕES AUXILIÁRES
function verificarEntrada(entrada) {
    return entrada !== 0 || !isNaN(entrada);
}

// FUNÇÕES DE DOM
function exibirValores(desconto, valorFinal) {
    outDesconto.textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
    outValorPagar.textContent = `A Pagar: R$ ${valorFinal.toFixed(2)}`;
}

function exibirAlerta(alerta) {
    alert(alerta);
}

// FUNÇÕES PRINCIPAIS
function calcularDesconto(valor, taxaDesconto) {
    return valor * (taxaDesconto / 100);
}

function calcularValor(valor, desconto) {
    return valor - desconto;
}

function iniciarCalculos() {
    const valor = Number(inValor.value);
    let desconto;
    if (!verificarEntrada(valor)) {
        alert("Informe o Valor");
        inValor.focus();
        inValor.value = "";
        return;
    }

    const convenio = document.querySelector(
        'input[name="possui-convenio"]:checked'
    );

    if (!convenio) {
        alert("Selecione a informação sobre convênio");
        return;
    }
    
    if (convenio.value === "sim") {
        const convenioSecionado = inConvenio.value;
        if (convenioSecionado === "") {
            alert("Selecione o Convênio.");
            inConvenio.focus();
            return;
        }
        if (convenioSecionado === "amigo")
            desconto = 20;
        else
            desconto = 50;
    } else {
        desconto = 10;
    }

    const valorDesconto = calcularDesconto(valor, desconto);
    const valorFinal = calcularValor(valor, valorDesconto);
    exibirValores(valorDesconto, valorFinal);
}

// EVENTOS
possuiConvenio.forEach(opcao => {
    opcao.addEventListener("change", function (event) {
        const opcaoSelecionada = document.querySelector(
            `input[name="possui-convenio"]:checked`
        );
        if (opcaoSelecionada.value === "sim")
            inConvenio.className = "exibe";
        else
            inConvenio.className = "oculta";
    });
});

formularioVenda.addEventListener("submit", function(event) {
    event.preventDefault();
    iniciarCalculos();
});