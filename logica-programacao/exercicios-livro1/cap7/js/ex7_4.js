// REFERENCIA OS ELEMENTOS HTML
const inPreco = document.getElementById("inPreco");
const btExibir = document.getElementById("btExibir");
const outParcelas = document.getElementById("outParcelas");

function exibirFormasPagto(formas) {
    outParcelas.innerText = formas;
}

btExibir.addEventListener("click", function () {
    const preco = Number(inPreco.value);

    let lista = `1x de R$: ${(preco / 1).toFixed(2)}`;
    for (let i = 2; i <= 10; i++) {
        lista += `\n${i}x de R$: ${(preco / i).toFixed(2)}`;
    }

    exibirFormasPagto(lista);
});