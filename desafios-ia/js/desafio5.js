/**
 * esse script recebe um bloco de texto contendo vários endereços de e-mail misturados e extrai apenas os e-mails
 * que pertencem ao domínio corporativo da empresa (@empresa.com.br).
 * autor: Fabiano O.
 */

function filtrarEmails() {
    // referencia os elementos html de entrada
    const inTexto = document.getElementById("inTexto");

    // obtém o conteúdo da entrada e remove possíveis espaços a esquerda e a direita
    const texto = inTexto.value.trim();

    // cria a RegEx usada para validação, separação e filtro
    const regExFilter = /[a-z], ?[a-z0-9]/i;

    // verifica se a entrada é válida
    if (texto == "") { 
        alert("Nenhumtexto digitado...");
        inTexto.value = "";
        inTexto.focus();
        return;
    }
    if (texto.match(regExFilter.test(texto))) {
        
    }
}