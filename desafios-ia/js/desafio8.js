/**
 * esse script recebe uma senha digitada pelo usuário e valida se a senha atende aos seguintes
 * requisitos mínimos de segurança simultaneamente:
 * 1. Deve ter entre 8 e 32 caracteres.
 * 2. Deve conter pelo menos um número.
 * 3. Deve conter pelo menos uma letra maiúscula.
 * 4. Deve conter pelo menos um símbolo.
 * autor: Fabiano O.
 */

// referencia os elementos de entrada e saída do html
const formulario = document.getElementById("formulario-senha");
const inSenha = document.getElementById("inSenha");
const outResultado = document.getElementById("outResultado");

formulario.addEventListener("submit", function (e) {
    // impede que a página recarregue e reinicie o código js
    e.preventDefault();

    // obtém o conteúdo do elemenento de entrada e remove os espaços a esquerda e direita
    const senha = inSenha.value.trim();
    
    // verifica se o usuário teclou apenas espaços em branco
    if (senha === "") {
        alert("Digite uma Senha...");
        inSenha.value = "";
        inSenha.focus();
        return;
    }
    
    // chama a função que verifica a senha e armazena o retorno dela
    const statusSenha = verificaSenha(senha);

    // verifica o statusSenha
    if (statusSenha === true) {
        outResultado.innerText = "Senha Segura!"
    } else {
        outResultado.innerText = "Senha Insegura! Precisa ter: \n" + statusSenha;
    }
});

// function que verifica a senha
function verificaSenha(senha) {
    // cria um vetor de objetos com os requisitos da senha
    const requisitosSenha = [
        {
            requisito: "\\d", // nºs
            mensagemAuxencia: "Pelo menos um nº"
        },
        {
            requisito: "[A-Z]", // letra maiúscula
            mensagemAuxencia: "Pelo menos uma letra MAIÚSCULA"
        },
        {
            requisito: "[^a-zA-Z\\d\\s]", // qualquer coisa que não seja letra, nº ou espaço (são os símbolos)
            mensagemAuxencia: "Pelo menos um caractere especial (ex.: #, @, *)" /* Descobrir como remover o espaço */
        },
    ];
    let requisitosAusentes = ""; // recebe a(s) mensagen(s) dos requisitos que a senha não possui

    // verifica se a senha possui a qtd de caraceres
    if (senha.length < 8 || senha.length > 32) {
        requisitosAusentes += "Entre 8 e 32 Caracteres;\n";
    }

    // percorre o vetor de requisitos
    for (let i = 0; i < requisitosSenha.length; i++) {
        // cria a RegEx com o requisito i
        const regexSenha = new RegExp(requisitosSenha[i].requisito);

        // verifica se a senha NÃO possui o requisito i
        if (!regexSenha.test(senha)) {
            requisitosAusentes += requisitosSenha[i].mensagemAuxencia + "\n";
        }
    }

    // verifica se existe algum requisito ausente
    if (requisitosAusentes !== "") {
        return requisitosAusentes;
    } else {
        return true;
    }
}