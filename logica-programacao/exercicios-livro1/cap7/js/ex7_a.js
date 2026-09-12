/**
 * esse script recebe as informações do aluno, categoriza e exibe
 * 
 * autor: Fabiano O.
 */

// REFERÊNCIAS AOS ELEMENTOS HTML
const inNome = document.querySelector("#nome");
const inIdade = document.querySelector("#idade");

// FUNÇÕES DE DOM
function obterEntradas() {
    return {
        nome: inNome.value.trim(),
        idade: Number(inIdade.value)
    }
}

function renderizarUI(dadosAluno) {
    const conteinerResultado = document.querySelector("#resultado");
    conteinerResultado.innerText = `
    ${dadosAluno.nome}
    ${dadosAluno.tracos}
    Categoria: ${dadosAluno.categoria}
    `;
}

// FUNÇÕES AUXILIÁRES
function retornarTracos(nome) {
    return nome.split("").map(caractere => {
        if (caractere === " ") {
            return " ";
        }
        return "-";
    }).join("");
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
        categoria,
        tracos
    });
}

// EVENTOS
document.querySelector("#formulario-cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarAluno();
});