/**
 * esses script é responsável pela manipulação das entradas e geração da lista de compras.
 * 
 * autor: Fabiano O.
 */

// REFERÊNCIA AOS ELEMENTOS HTML
const formulario = document.querySelector("#formulario-lista");
const inProduto = document.querySelector("#inProduto");
const outLista = document.querySelector("#outLista");

// CONSTANTES E OBJETOS DE ESTADOS
const KEYS_STORAGE = {
    PRODUTOS: "produtos"
};

// FUNÇÕES DE localStorage
function toJson(value) {
    return JSON.stringify(value);
}

function fromJson(value) {
    return JSON.parse(value);
}

function setStorage(key, value) {
    localStorage.setItem(key, toJson(value));
}

function getStorage(key) {
    return fromJson(localStorage.getItem(key));
}

function removeStorage(key) {
    localStorage.removeItem(key);
}

// FUNÇÕES DE DOM
function obterEntradaProduto() {
    return inProduto.value;
}

function exibirLista(lista) {
    outLista.textContent = lista;
}

// FUNÇÕES AUXILIÁRES
function validarNomeProduto(nomeProduto) {
    const nome = nomeProduto.trim();
    return !(nome === "" || !isNaN(nome));
}

function ordenarVetor(vetor) {
    return vetor.sort();
    /* A função receberá uma referência para o vetor, logo o vetor original será ordenado e
    será retornado uma referência a ele */
}

function montarLista(produtos) {
    if (produtos.length === 0) {
        return `Não há produtos cadastrados`;
    }

    return produtos.reduce((acc, produto) => {
        return acc += `\n${produto}`;
    }, `Produtos Adicionados\n------------------------`);
}

// FUNÇÕES PRINCIPAIS
function adicionarProduto(produto) {
    const localProdutos = getStorage(KEYS_STORAGE.PRODUTOS) || [];

    if (!validarNomeProduto(produto))
        return;

    localProdutos.push(produto);
    ordenarVetor(localProdutos);
    setStorage(KEYS_STORAGE.PRODUTOS, localProdutos);
    
    exibirLista(montarLista(localProdutos));

    formulario.reset();
}

function limparLista() {
    removeStorage(KEYS_STORAGE.PRODUTOS);
    exibirLista(montarLista([]));
}

// EVENTOS
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const produto = obterEntradaProduto()
    adicionarProduto(produto);
});

document.addEventListener("DOMContentLoaded", () => {
    const localProdutos = getStorage(KEYS_STORAGE.PRODUTOS) || [];
    exibirLista(montarLista(localProdutos));
});

document.querySelector("#btnLimpar").addEventListener("click", limparLista);