/**
 * esse script é responsável pela dinâmica de triagem:
 * capturar os dados do html, tratar e adicionar ao vetor.
 * autor: Fabiano O.
 */

// referencia os elementos do html de "triagem.html"
const formularioTriagem = document.getElementById("formulario-triagem");
const inNome = document.getElementById("nome");
const inCpf = document.getElementById("cpf");
const inTelefone = document.getElementById("telefone");
const inPreferencia = document.getElementById("preferencial");

// vetor para guardar as pesoas da fila
const fila = [];

// adiciona "ouvinte de eventos" ao formulario
formularioTriagem.addEventListener("submit", function (e) {
    // impede que a página recarregue e limpe os códigos js
    e.preventDefault();

    // obter os conteúdos dos elementos de entrada
    const nome = inNome.value.trim();
    const cpf = inCpf.value.trim();
    const telefone = inTelefone.value.trim();
    const isPreferencial = inPreferencia.checked;

    // verifica se o nome é válido (precisa de nome e sobrenome)
    if (!nome.match(" ")) { // se a busca por " " retornar null (false), não tem sobrenomes
        alert("Digite o Nome Completo...");
        inNome.focus();
        return;
    }
    // verica se o cpf é válido
    if (!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        // Engenharia do padrão de CPF:
        // \d{3} -> 3 números grudados      \.     -> seguidos por um ponto
        // \d{3} -> 3 números grudados      \.     -> seguidos por um ponto
        // \d{3} -> 3 números grudados       -     -> seguidos por um ifen
        // \d{2} -> seguidos por mais 2 números grudados    (^ e $ são âncoras)
        alert("CPF Inválido...");
        inCpf.focus();
        return;
    }
    // verifica se foi digitado algum telefone
    if (telefone != "") {
        // verifica se o telefone é válido
        if (!telefone.match(/^\d{2} \d{5}-\d{4}$/)) {
            alert("Telefone Inválido...");
            inTelefone.focus();
            return;
        }
    }

    // adiciona a pessoa na fila
    adicionarFila(isPreferencial, nome, cpf, telefone);

});

// function para adicionar pessoal ao vetor fila
function adicionarFila(isPreferencial, nome, cpf, telefone) {
    let cll = telefone;
    // transforma o telefone para "NI", se não tiver digitado
    if (telefone == "") {
        cll = "NI";
    }

    // cria o objeto da pessoa
    const pessoa = {
        id: Date.now(), // cria um ID único com base no tempo atual
        nome: nome,
        cpf: cpf,
        telefone: cll,
        preferencial: isPreferencial
    }

    // se for preferencial...
    if (isPreferencial) { // adiciona ao início da fila
        fila.unshift(pessoa);
    } else { // adiciona ao final
        fila.push(pessoa);
    }
}