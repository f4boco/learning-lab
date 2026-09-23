/**
 * esse script é responsável por toda a operação do site.
 * 
 * autor: Fabiano O.
 */

// REFERENCIA OS ESLEMENTOS HTML
const formulario = document.querySelector("#formulario-servico");
const inServico = document.querySelector("#inServico");
const outPendentes = document.querySelector("#outPendentes");
const outServico = document.querySelector("#outServico");

// CONSTANTES E ESTADOS
const KEYS_STORAGE = {
    SERVICOS: "sevicos"
};

// FUNÇÕES DE STORAGE
function toJson(value){
    return JSON.stringify(value);
}

function fromJson(value) {
    return JSON.parse(value);
}

function getStorage(key) {
    return fromJson(localStorage.getItem(key));
}

function setStorage(key, value) {
    localStorage.setItem(key, toJson(value));
}

// FUNÇÕES DE DOM
function obterEntradaServico() {
    return inServico.value.trim();
}

function atualizarServicosPendentes(numServicos) {
    outPendentes.textContent = numServicos;
}

function exibirEmExecucao(servico) {
    outServico.textContent = servico;
}

// FUNÇÕES AUXILIÁRES
function validarEntradaTexto(entrada) {
    return entrada !== "" && isNaN(entrada);
}

function contarServicos(vetor) {
    return vetor.length;
}

// FUNÇÕES PRINIPAIS
function adicionarServico(servico) {
    if (!validarEntradaTexto(servico)) {
        alert("Informe o 'Serviço - Veículo'");
        return;
    }

    const localServicos = getStorage(KEYS_STORAGE.SERVICOS) || [];
    localServicos.push(servico);
    setStorage(KEYS_STORAGE.SERVICOS, localServicos);

    atualizarServicosPendentes(contarServicos(localServicos));
    formulario.reset();
}

function executarServico() {
    const localServicos = getStorage(KEYS_STORAGE.SERVICOS);
    const servicoExecutado = localServicos.shift();
    exibirEmExecucao(servicoExecutado);

    setStorage(KEYS_STORAGE.SERVICOS, localServicos);
    atualizarServicosPendentes(contarServicos(localServicos));
}

function inicializarEventos() {
    const localServicos = getStorage(KEYS_STORAGE.SERVICOS) || [];
    atualizarServicosPendentes(contarServicos(localServicos));
}

// EVENTOS
formulario.addEventListener("submit",function (event) {
    event.preventDefault();
    const servico = obterEntradaServico();
    adicionarServico(servico);
});

document.querySelector("#btnExecutarServico").addEventListener("click", executarServico);

// INICIALIZAÇÃO
inicializarEventos();