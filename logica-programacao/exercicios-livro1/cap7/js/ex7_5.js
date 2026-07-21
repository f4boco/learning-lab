// REFERENCIA OS ELEMENTOS HTML
const outListaTodos = document.getElementById("outListaTodos");
const outMedia = document.getElementById("outMedia");

let pedidos;

// FUNÇÕES AUXILIÁRES
function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarPedidos() {
    const pedidos = [];
    for (let i = 0; i < gerarNum(5, 10); i++) {
        const pedidoGerado = {
            dia: "Dia " + (i + 1),
            numPedidos: gerarNum(50, 999)
        };
        pedidos.push(pedidoGerado);
    }
    return pedidos;
}

function atualizarHtml(listaPedidos, media) {
    if (listaPedidos !== undefined) {
        outListaTodos.innerText = listaPedidos;
    }
    outMedia.innerText = media === undefined ? "Média Pedidios:" : `Média Pedidios: ${media}`;
}

// BLOCOS E FUNÇÕES PRINCIPAIS
{ // bloco de inicialização
    pedidos = gerarPedidos();
    atualizarHtml(prepararStringLista(pedidos));
}

function calcularMedia(pedidos) {
    return Number.parseInt(pedidos.reduce((acc, pedido) => {
        acc += pedido.numPedidos;
        return acc;
    }, 0) / pedidos.length);
}

function prepararStringLista(pedidos) {
    let lista = "";
    for (let i = 0; i < Math.ceil(pedidos.length / 2); i++) {
        let numFinal = pedidos.length - i - 1;
        lista += `${pedidos[i].dia}: ${pedidos[i].numPedidos}`;
        if (numFinal >= Math.ceil(pedidos.length / 2)) {
            lista += " . ".repeat(10) + `${pedidos[numFinal].dia}: ${pedidos[numFinal].numPedidos}\n`;
        }
    }
    return lista;
}

document.getElementById("btMedia").addEventListener("click", () => {
    const mediaPedidos = calcularMedia(pedidos);
    atualizarHtml(undefined, mediaPedidos);
})