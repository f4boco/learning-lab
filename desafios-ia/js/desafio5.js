/**
 * esse script recebe um bloco de texto contendo vários endereços de e-mail misturados e extrai apenas os e-mails
 * que pertencem ao domínio corporativo da empresa (@empresa.com.br).
 * autor: Fabiano O.
 */

function filtrarEmails() {
    // referencia os elementos html de entrada e saída
    const inTexto = document.getElementById("inTexto");
    const outLista = document.getElementById("outLista");

    // obtém o conteúdo da entrada e remove possíveis espaços a esquerda e a direita
    const texto = inTexto.value.trim();

    // cria a RegEx usada para validação, separação e filtro
    const regexFilter = /@[a-z]{2,}\.[a-z]{2,}(\.[a-z]{2,})?, ?/i;

    // verifica se a entrada é válida
    if (texto == "") { 
        alert("Nenhumtexto digitado...");
        inTexto.value = "";
        inTexto.focus();
        return;
    }
    // verifica se existe ocorrências do padrão no texto (retorna true or false)
    if (!regexFilter.test(texto)) {
        alert("Erro!\nConfira a formatação do Texto...");
        inTexto.focus();
        return;
    }

    // armazena o resultado do filtro por emials empresariais
    const emailsEmpresariais = filtrarCorporativos(texto, new RegExp("@empresa.com.br", "i"));

    // verifica se algum email passou no filtro
    if (emailsEmpresariais.length == 0) {
        outLista.innerText = "Nenhum e-mail da lista possui o domínio @empresa.com.br";
    } else {
        outLista.innerText = emailsEmpresariais.join(",");
    }
}
// referencia o bt filtrar e associa a functio filtrarEmails ao evento click
document.getElementById("btFiltrar").addEventListener("click", filtrarEmails);

function filtrarCorporativos(texto, regex) {
    // separa o texto em um vetor
    const listaEmails = texto.split(",");

    // retorna um vetor com apenas o elementos que possum o "@empresa.com.br"
    return listaEmails.filter(email => 
        email.match(regex)
    );
}