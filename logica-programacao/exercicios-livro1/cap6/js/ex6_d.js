/**
 * Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias.
 * Elaborar um programa que leia a data de uma infração e o valor da multa. Informe qual a data
 * limite do pagamento com desconto (até 90 dias) e o valor a ser pago até essa data 
 * (com 20% de desconto).
 * 
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-multa");
const inData = document.getElementById("inData");
const inValor = document.getElementById("inValor");
const outData = document.getElementById("outData");
const outValor = document.getElementById("outValor");

formulario.addEventListener("submit", function (event) {
    // impede que a página atualize e recarregue o código js
    event.preventDefault();

    // chama a função que calcula os valores
    calcularMulta();
});

// função que calcula a multa
function calcularMulta() {
    // obtém os valores das entradas
    const [ano, mes, dia] = inData.value.split("-");
    const valor = inValor.value;

    // chama a função que exibe a multa, passando
    exibirMulta(
        calcularDataVencimento(new Date(ano, mes - 1, dia)), // o retorno da função calcularDataVencimento
        calcularValor(valor, 0.20) // e o retorno da função calcularValor
    );

}

// função que calcula a data de vencimento
function calcularDataVencimento(data) {
    // cria uma data para o calculo do vencimento
    const dataPrazo = new Date(data.getTime());
    dataPrazo.setDate(dataPrazo.getDate() + 90); // adiciona 90 dias

    return dataPrazo;
}

// funcção que calcula o valor da multa (com desconto)
function calcularValor(valor, descontoPCento) {
    return valor - (valor * descontoPCento);
}

// função que exibe
function exibirMulta(data, valor) {
    outData.innerText = data.toLocaleDateString("pt-BR");
    outValor.innerText = `R$ ${valor.toFixed(2)}`;
}