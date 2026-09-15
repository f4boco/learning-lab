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
    return entrada > 0 && !isNaN(entrada);
}

// FUNÇÕES DE DOM
function exibirValores(desconto, valorFinal) {
    outDesconto.textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
    outValorPagar.textContent = `A Pagar: R$ ${valorFinal.toFixed(2)}`;
}

function obterValor() {
    return Number(inValor.value);
}

function obterConvenioSelecionado() {
    return document.querySelector(
        'input[name="possui-convenio"]:checked'
    );
}

// FUNÇÕES PRINCIPAIS
function calcularDesconto(valor, taxaDesconto) {
    return valor * (taxaDesconto / 100);
}

function calcularValor(valor, desconto) {
    return valor - desconto;
}

function definirDesconto(opcaoConvenio, convenio) {
    if (opcaoConvenio === "nao")
        return 10;
    
    if (convenio === "amigo") 
        return 20;

    return 50;
}

function processarVenda() {
    const valor = obterValor();

    if (!verificarEntrada(valor)) {
        alert("Informe o Valor");
        inValor.focus();
        inValor.value = "";
        return;
    }

    const opcaoSelecionada = obterConvenioSelecionado();

    if (!opcaoSelecionada) {
        alert("Selecione a informação sobre convênio");
        return;
    }

    const convenio = inConvenio.value;
    
    const desconto = definirDesconto(
        opcaoSelecionada.value,
        convenio
    );

    const valorDesconto = calcularDesconto(valor, desconto);
    const valorFinal = calcularValor(valor, valorDesconto);
    exibirValores(valorDesconto, valorFinal);
}

// EVENTOS
possuiConvenio.forEach(opcao => {
    opcao.addEventListener("change", function () {
        if (opcao.value === "sim")
            inConvenio.className = "exibe";
        else
            inConvenio.className = "oculta";
    });
});

formularioVenda.addEventListener("submit", function(event) {
    event.preventDefault();
    processarVenda();
});