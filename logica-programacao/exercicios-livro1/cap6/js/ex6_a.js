/**
 * esse script recebe uma mensagem enviado por um usuário, criptografa ela e exibe. Também
 * possibilita a descriptografia da mensagem.
 * 
 * autor: Fabiano O.
 */


// função que criptografa a mensagem
function criptografarMensagem() {
    // referencia o elemento html de entrada
    const inMensagem = document.getElementById("inMensagem");
    const mensagem = inMensagem.value.trim(); // obtém o conteúdo e remove os espaços dos extremos

    // verifica se a entrada é uma mensagem válida
    if (mensagem === ""  || mensagem.length < 2) {
        alert("Mensagem inválida ou muito curta.");
        inMensagem.value = "";
        inMensagem.focus();
        return;
    }

    // cria uma nova string com apenas os carcteres dos index pares
    const mensagemCripto = 
        mensagem.split("")
        .filter((caractere, i) => {
            if (i % 2 === 0) {
               return caractere;
            }
        });
    
    // chama a função de exibir mensagem
    exibirMensagem(mensagemCripto.join(""), "Criptografada");
}
// referencia o btCriptografar
const btCriptografar = document.getElementById("btCriptografar");
btCriptografar.addEventListener("click", criptografarMensagem); // associa a função criptografarMensagem ao evento click

// função que exibe a mensagem
function exibirMensagem(mensagem, criptografadaSN) {
    document.getElementById("outSaida").innerHTML = `Mensagem ${criptografadaSN}:\n${mensagem}`;
}