/**
 * esse script é responsável gerencia a fila de espera. Recebe o nome,
 * cpf e telefone do paciente, valida as entradas e adiciona na fila de espera.
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-cadastro");
const inNome = document.getElementById("inNome");
const inCPF = document.getElementById("inCPF");
const inTelefone = document.getElementById("inTelefone");
const inPreferencial = document.getElementById("inPreferencial");

// variáveis globais
const listaEspera = [];
let ficha;

// adiciona "ouvinte" ao formulário
formulario.addEventListener("submit", function (e) {
    // impede que a página recarregue e limpe o código js
    e.preventDefault();

    // obtém o conteúdo dos inputs
    const nome = inNome.value.trim();
    const cpf = inCPF.value.trim();
    const telefone = inTelefone.value.trim() == "" ? "NI" : inTelefone.value.trim();
    const siPreferencial = inPreferencial.checked;

    // verifica se o nome é válido
    if (nome == "" || !nome.match(/ /g)) {
        alert("Digite o Nome Completo do Paciente");
        inNome.focus();
        return;
    }
    // verifica se o cpf é válido
    if (!cpf.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/g)) {
        alert("CPF Inválido");
        inCPF.focus();
        return;
    }
    // verifica se foi informado telefone
    if (telefone != "NI") {
        // verifica se o telefone é válido
        if (!telefone.match(/^\d{2} \d{5}-\d{4}$/g)) {
            alert("Telefone Inválido");
            inTelefone.focus();
            return;
        }
    }

    // reseta o formulário para adicionar próximo paciente
    formulario.reset();
});