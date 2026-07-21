// REFERENCIA OS ELEMENTOS HTML
const outListaTodos = document.getElementById("outListaTodos");
const outMedia = document.getElementById("outMedia");

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
    outListaTodos.innerText = listaPedidos;
    outMedia.innerText = media;
}

// FUNÇÕES PRINCIPAIS
function calcularMedia(pedidos) {
    return pedidos.reduce((acc, pedido) => {
        acc += pedido.numPedidos;
        return acc / pedidos.length;
    }, 0).toFixed(0);
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
    const listaPedidos = gerarPedidos();
    const mediaPedidos = calcularMedia(listaPedidos);
    
    atualizarHtml(prepararStringLista(listaPedidos), mediaPedidos);
})