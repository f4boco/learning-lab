/**
 * esse script recebe as informações do atleta, categoriza e exibe
 * 
 * autor: Fabiano O.
 */

// FUNÇÕES DE DOM
function obterEntradas() {
    const inNome = document.querySelector("#nome");
    const inIdade = document.querySelector("#idade");
    return {
        nome: inNome.value.trim(),
        idade: Number(inIdade.value)
    }
}

function renderizarUI(informacoes) {
    const conteinerResultado = document.querySelector("#resultado");
    conteinerResultado.innerText = `
    ${informacoes.nome}
    ${informacoes.tracos}
    Categoria: ${informacoes.categoria}
    `;
}

// FUNÇÕES AUXILIÁRES
function retornarTracos(nome) {
    return nome.split("").reduce((acc, caractere) => {
        if (caractere === " ") {
            acc += " ";
            return acc;
        }
        acc += "-";
        return acc;
    }, "");
}

function categorizarAluno(idade) {
    if (idade < 12) {
        return "Infantil";
    } else if (idade > 18) {
        return "Adulto";
    } else {
        return "Juvenil";
    }
}

// FUNÇÃO PRINCIPAL
function cadastrarAluno() {
    const aluno = obterEntradas();
    const categoria = categorizarAluno(aluno.idade);
    const tracos = retornarTracos(aluno.nome);
    renderizarUI({
        nome: aluno.nome,
        categoria: categoria,
        tracos: tracos
    });
}

// EVENTOS
document.querySelector("#formulario-cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarAluno();
});