/**
 * esse script valida senha. para ser válida, uma senha deve possuir as
 * seguintes regras de composição: a) possuir entre 8 e 15 caracteres; b)
 * possuir, no mínimo, 1 número; c) possuir, no mínimo, 1 letra minúscula;
 * d) possuir, no mínimo, 2 letras maiúsculas; e) possuir, no mínimo, 1
 * símbolo.
 *
 * autor: Fabiano O.
 */

// referencia elementos do html
const formulario = document.getElementById("formulario-senha");
const inSenha = document.getElementById("inSenha");
const outResultado = document.getElementById("outResultado");

// adiciona "ouvinte de eventos" ao formulario
formulario.addEventListener("submit", function (evento) {
    // impede que a página recarregue e limpe o código js
    evento.preventDefault();

    // obtém o conteúdo do campo de entrada da senha
    const senha = inSenha.value;

    const erros = []; // vetor para receber os erros

    // verifica se a senha possui entre 8 e 15 caracteres
    if (senha.length < 8 && senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

    // verifica se não possui nº
    if (senha.match(/\d/g) == null) {
        erros.push("possuir números (no mínimo 1)");
    }

    // verifica se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)) {
        /* Se entrar nacondição, significa que o retorno fou null, que é !(false) */
        erros.push("possuir letras minúsculas (no mínimo 1)");
    }

    // verifica se não possui letras maiúsculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("pussuir letras maiúsculas (no mínimo 2)");
    }

    // verifica se não possui símbolos ou "_"
    if (!senha.match(/\W|_/)) {
        erros.push("possuir símbolos (no mínimo 1)");
    }

    // se o vetor está vazio, significa que não foram encontrados erros
    if (erros.length == 0) {
        outResultado.innerText = "Ok! Senha Válida";
    } else {
        outResultado.innerText = "Erro... A senha deve " + erros.join(" - ");
    }
});