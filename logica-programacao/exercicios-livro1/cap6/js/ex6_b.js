/**
 * Elaborar um programa que leia o nome de um autor de um livro. Em seguida, exiba-o no formato de
 * uma citação bibliográ ca com o sobrenome, seguido pelas iniciais do nome.
 * 
 * autor: Fabiano O.
 */

function gerarCitacao() {
    // referencia o elemento html de enetrada
    const inNome = document.getElementById("inNome");
    const nome = inNome.value.trim();

    // verifica se a entrada é um nome válido
    if(nome === "" || !nome.includes(" ") || !isNaN(nome)) {
        alert("Digite um Nome Completo...");
        inNome.focus();
        return;
    }

    // separa o nome em um vetor
    const nomeSeparado = nome.split(" ");
    const tamanho = nomeSeparado.length;

    // monta a citação
    const citacao = nomeSeparado.reduce((ac, nome, i) => {
        // se não for a última posição do vetor
        if (i < tamanho - 1) {
            ac += nome.charAt(0).toUpperCase() + ". ";
        }
        return ac;
    }, nomeSeparado[tamanho - 1].toUpperCase() + ", "); // o valorInicial é o último nome completo + ", "

    // chama a função de exibição
    exibirCitacao(citacao);
}
document.getElementById("btGerar").addEventListener("click", gerarCitacao);

// função que exibe a citação
function exibirCitacao(citacao) {
    document.getElementById("outSaida").innerText = citacao;
}