/**
 * esse script valida o nome do aluno e gera senha inicial.
 * 
 * autor: Fabiano O.
 */

// REFERENCIA OS ELEMENTOS HTML
const inNome = document.querySelector("#nome");
const outSenha = document.querySelector("#senha");

function exibirAlerta(alerta) {
    alert(alerta);
}

function renderizarSenha(senha) {
    outSenha.textContent = senha;
}

function validarNome(nome) {
    const regExNome = new RegExp("^[A-Za-z]{3,} ([A-Za-z]{2,3} )*([A-Za-z]{3,})+", "i");
    return regExNome.test(nome);
}

function obterSobrenome(nome) {
    const vetorNomes = nome.trim().split(" ");
    const qtdNomes = vetorNomes.length;
    return vetorNomes[qtdNomes - 1].toLowerCase();
}

function contarVogais(nome) {
    return nome.match(/[aeiou]/gi).length
    .toString().padStart(2, "0");
}

function gerarSenha() {
    const nome = inNome.value;
    if (!validarNome(nome)) {
        exibirAlerta("Nome Inválido. Por Favor, exibir informe o nome completo.");
        return;
    }

    const sobreNome = obterSobrenome(nome);
    const numVogais = contarVogais(nome);
    
    const senha = sobreNome + numVogais;
    renderizarSenha(senha);
}

document.querySelector("#formulario-senha").addEventListener("submit", function(event) {
    event.preventDefault();
    gerarSenha();
});