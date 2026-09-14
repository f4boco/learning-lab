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

// FUNÇÕES DE DOM
function exibirValores(desconto, valorFinal) {
    outDesconto.textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
    outValorPagar.textContent = `A Pagar: R$ ${valorFinal.toFixed(2)}`;
}

// FUNÇÕES PRINCIPAIS
function calcularDesconto(valor, taxaDesconto) {
    return valor * (taxaDesconto / 100);
}

function calcularValor(valor, desconto) {
    return valor - desconto;
}

// EVENTOS
possuiConvenio.forEach(opcao => {
    opcao.addEventListener("change", function(event) {
        const opcaoSelecionada = document.querySelector(
            `input[name="possui-convenio"]:checked`
        );
        console.log(opcaoSelecionada.value);
    });
});