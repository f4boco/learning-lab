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
const outEspera = document.getElementById("outEspera");

// variáveis globais
const listaEspera = [];
let ficha = 0;

// adiciona "ouvinte" ao formulário
formulario.addEventListener("submit", function (e) {
    // impede que a página recarregue e limpe o código js
    e.preventDefault();
    
    // obtém o conteúdo dos inputs
    const nome = inNome.value.trim();
    const cpf = inCPF.value.trim();
    const telefone = inTelefone.value.trim() == "" ? "NI" : inTelefone.value.trim();
    const isPreferencial = inPreferencial.checked;

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

    // verifica se a pessoa já está na lista de espera
    if (verificarFila(cpf)) {
        alert("Esta pessoa já está na fila de espera");
    } else {
        ficha++; // adiciona a próxima ficha para essa pessoa

        // cria o objeto de pessoa.
        const pessoa = {
            id: "espera-" + Date.now(),
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            preferencial: isPreferencial,
            ficha: (isPreferencial == true ? "Pref-: " : "Norm-: ") + (ficha.toString().padStart(3, "0")) // converte a ficha para string e coloca ficha com o padrão de 0 a esquerda
        }

        // adiciona a pessoa a lista
        addFila(pessoa);

    }

    // chama a function de exibir lista de espera
    exibirEspera();

    // reseta o formulário para adicionar próximo paciente
    formulario.reset();
});

// functio que verifica se o vetor está vazio
function verificarVazio() {
    let isVazio = false;
    if (listaEspera.length == 0)
        isVazio = true;
    return isVazio;
}

// function que verifica se a pessoa já está na fila (vetor)
function verificarFila(cpf) {
    let naFila = false;
    // verifica se o vetor não está vazio.
    if (!verificarVazio()) {
        // percorre os elementos do vetor
        for (const pessoa of listaEspera) {
            // verifica se os cpfs são iguais
            if (pessoa.cpf == cpf) {
                naFila = true;
                break;
            }
        }
    }
    return naFila;
}

// function que adiciona um objeto de pessoa ao vetor
function addFila(objetoPessoa) {
    // verifica se a pessoa é preferencial
    if (objetoPessoa.preferencial) {
        // busca a posição da última pessoa preferencial
        const ultimoPreferencial = listaEspera.findLastIndex(pessoa => pessoa.preferencial == true);

        // verifica se o retorno da busca retornou -1 (Não encontrou nenhum preferencial)
        if (ultimoPreferencial == -1) {
            listaEspera.unshift(objetoPessoa); // adiciona a pessoa ao início da lista
        } else {
            listaEspera.splice(ultimoPreferencial + 1, 0, objetoPessoa);  // adiciona a pessoa após o último preferencial
        }
    } else {
        listaEspera.push(objetoPessoa); // adiciona a pessoa ao final da lista
    }

    // exibe a ficha da pessoa na tela
    alert("Ficha:\n" + objetoPessoa.ficha);
}

// function que exibe a lista de espera
function exibirEspera() {
    let lista = "___ Lista de Espera ___\n\n"; // variável para receber alista de espera
    
    // verifica se o vetor está vazio
    if (verificarVazio()) {
        lista += "Não há fila de espera";
    } else {
        // percorre o vetor
        for (const pessoa of listaEspera) {
            // concatena a ficha + nome e cpf com LGPD
            lista += prepararLGPD(pessoa.nome, pessoa.cpf) + " - Ficha: " + pessoa.ficha  + "\n";
        }
    }

    // exibe lista na outEspera
    outEspera.innerText = lista;
}
// chama a função no carregamento do site
exibirEspera();

// function para preparar retornar o 1º nome e o CPF com **
function prepararLGPD(nomeCompleto, cpf) {
    // obtém o primeiro nome da pessoa
    const primEspaco = nomeCompleto.indexOf(" "); // obtém a posição do primeiro espaço
    const nome = nomeCompleto.slice(0, primEspaco); // extrai parte da string, até o espaço -1;
    
    // busca a combinação ".000.000.", no cpf e substitui por ".***.***."
    const cpfLGPD = cpf.replace(/\.\d{3}\.\d{3}/, ".***.***");

    return nome + " (" + cpfLGPD + ")";
}