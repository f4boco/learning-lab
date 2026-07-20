// FUNÇÕES AUXILIÁRES
function classificarVeiculo(ano) {
    const anoAtual = new Date().getFullYear();
    let classif;

    /** Tem erro de Lógica aqui */
    if (ano >= anoAtual) {
        classif = "Novo";
    } else if (ano >= anoAtual - 2) {
        classif = "Seminovo";
    } else {
        classif = "Usado";
    }

    return classif;
}

function calcularVenda(valor, classificacao) {
    return (classificacao === "Novo") ? valor * 1.08 : valor * 1.10;
}

// FUNÇÕES PRINCIPAIS
function mostrarDados() {
    const inModelo = document.getElementById("inModelo");
    const inAno = document.getElementById("inAno");
    const inPreco = document.getElementById("inPreco");
    const outClassif = document.getElementById("outClassif");
    const outPrecoVenda = document.getElementById("outPrecoVenda");
    
    const modelo = inModelo.value.trim();
    const ano = Number(inAno.value);
    const preco = Number(inPreco.value);

    if (modelo === "" || ano <= 0 || preco <= 0 || isNaN(ano) || isNaN(preco) || !isNaN(modelo)) {
        alert("Informe corretamente os dados do veículo");
        inModelo.focus();
        return;
    }

    const classificacao = classificarVeiculo(ano);
    const precoVenda = calcularVenda(preco, classificacao);

    outClassif.innerText = `${modelo} - ${classificacao}`;
    outPrecoVenda.innerText = `Preço de Venda R$: ${precoVenda.toFixed(2)}`;
}
document.getElementById("btCalcular").addEventListener("click", mostrarDados);