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
    return inProduto.value.trim();
}

function exibirLista(lista) {
    outLista.textContent = lista;
}

// FUNÇÕES AUXILIÁRES
function validarNomeProduto(nomeProduto) {
    return nomeProduto !== "" && isNaN(nomeProduto);
}

function ordenarVetor(vetor) {
    vetor.sort();
    /* A função receberá uma referência para o vetor, logo o vetor original será ordenado e
    será retornado uma referência a ele */
}

function montarLista(produtos) {
    if (produtos.length === 0) {
        return `Não há produtos cadastrados`;
    }

    return `Produtos Adicionados
------------------------
${produtos.join("\n")}`;
}

// FUNÇÕES PRINCIPAIS
function adicionarProduto(produto) {
    if (!validarNomeProduto(produto))
        return;

    const localProdutos = getStorage(KEYS_STORAGE.PRODUTOS) || [];

    localProdutos.push(produto);
    ordenarVetor(localProdutos);
    setStorage(KEYS_STORAGE.PRODUTOS, localProdutos);
    
    exibirLista(montarLista(localProdutos));

    formulario.reset();
}

function limparLista() {
    if (confirm("Realmente deseja apagar a Lista?")) {
        removeStorage(KEYS_STORAGE.PRODUTOS);
        exibirLista(montarLista([]));
    }
}

function inicializarEventos () {
    const localProdutos = getStorage(KEYS_STORAGE.PRODUTOS) || [];
    exibirLista(montarLista(localProdutos));
}

// EVENTOS
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const produto = obterEntradaProduto()
    adicionarProduto(produto);
});

document.querySelector("#btnLimpar").addEventListener("click", limparLista);

// INÍCIO
inicializarEventos();