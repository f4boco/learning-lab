/**
 * esse script recebe as informações do atleta, categoriza e exibe
 * 
 * autor: Fabiano O.
 */

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

function obterEntradas() {
    const inNome = document.querySelector("#nome");
    const inIdade = document.querySelector("#idade");
    return {
        nome: inNome.value.trim(),
        idade: Number(inIdade.value)
    }
}

function inicializar() {
    const aluno = obterEntradas();
    const categoriza = categorizarAluno(aluno.idade);
    const tracos = retornarTracos(aluno.nome);
}

function tester () {
    console.log(categorizarAluno(18));
}
tester();