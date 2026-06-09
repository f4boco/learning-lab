/**
 * esse script ler o nome completo de um participante, e exibe apenas
 * o nome e sobrenome.
 * autor: Fabiano O.
 */

function gerarCracha() {
    // referencia os elementos da página
    const inNome = document.getElementById("inNome");
    const outCracha = document.getElementById("outCracha");

    // obtém o conteúdo do campo de entrada e...
    const nome = inNome.value.trim(); // remove possíveis espaços a esquerda e direita

    // verifica se vazio, ou foi digitado apenas um nome (sem espaços)
    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o Nome Completo do participante...");
        inNome.value = "";
        inNome.focus();
        return;
    }

    const priEspaco = nome.indexOf(" "); // obtém a posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" "); // obtém a posição do último espaço

    let cracha = nome.slice(0, priEspaco); // obtém o primeiro nome (pega da posição 0 até o 1º espaço)
    cracha += nome.slice(ultEspaco); // Obtém o restante da string (último nome)
    /** Não preciso fazer ultEspaco+1 (para ignorar o espaço), porque aproveito o esaço */

    // altera o texto de outCracha
    outCracha.innerText = cracha;

    // prepara o campo de entrada para o próximo nome
    inNome.value = "";
    inNome.focus();
}
// referencia o btGerar
const btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha); // associa a function gerarCracha() ao evento click do btGerar