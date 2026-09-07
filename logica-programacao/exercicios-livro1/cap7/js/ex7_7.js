/**
 * esse script é responsável pela lógica do sistema de pedidos.
 * 
 * autor: Fabiano O.
 */
const inPizza = document.querySelector("#inPizza");
const inBebida = document.querySelector("#inBebida");
const outPedido = document.querySelector("#outPedido");

const ITENS = [];

function trocarItem() {
    if (rbPizza.checked) {
        inBebida.className = "oculta";
        inPizza.className = "exibe";
    } else {
        inPizza.className = "oculta";
        inBebida.className = "exibe";
    }
}
const rbPizza = document.querySelector("#rbPizza");
rbPizza.addEventListener("change", trocarItem);

const rbBebida = document.querySelector("#rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarSabores() {
    if (rbPizza.checked) {
        const pizza = inPizza.value;
        const num = (pizza === "media") ? 2 : (pizza === "grande") ? 3 : 4;
        inDetalhes.placeholder = `Até ${num} sabores`;
    }
}
const inDetalhes = document.querySelector("#inDetalhes");
inDetalhes.addEventListener("focus", mostrarSabores);

inDetalhes.addEventListener("blur", function () {
    inDetalhes.placeholder = "";
});

inDetalhes.addEventListener("keypress", function (tecla) {
    if (tecla.keyCode === 13) {
        adicionarItem();
    }
});

function adicionarItem() {
    let produto;
    if (rbPizza.checked) {
        const num = inPizza.selectedIndex;
        produto = inPizza.options[num].text;
    } else {
        const num = inBebida.selectedIndex;
        produto = inBebida.options[num].text;
    }
    const detalhes = inDetalhes.value;
    ITENS.push(`${produto} (${detalhes})`);
    outPedido.innerText = ITENS.join("\n");
    // limparCampos();
}
const btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();
}