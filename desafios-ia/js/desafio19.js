/**
 * esse script recebe uma data informada pelo usuário, analisae exibe no console: 
 * "Agendamento inválido: data no passado", se a data for anterior ao momento atual. 
 * "Agendamento inválido: a clínica não abre aos finais de semana", se o dia da semana for sábado ou domingo.
 * "Agendamento confirmado com sucesso!", se passar nas duas validações.
 * 
 * autor: Fabiano O.
 */

// referencia os elementos html de entrada da data
const formulario = document.getElementById("formulario-data");
const inData = document.getElementById("inData");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // chama a função de agendamento
    criarAgendamento();

    formulario.reset();
});

// função que realiza a verificação e agendamento
function criarAgendamento() {
    const dataDigitada = inData.value;

    // quebra a data de entrada em um vetor de numeros
    const dataQuebrada =
        dataDigitada.split("-")
            .map(element => Number(element));

    // cria um novo objeto data com horário local 00:00 (para evitar problema de horário e fuso)
    const dataAgendamento = new Date(dataQuebrada[0], dataQuebrada[1] - 1, dataQuebrada[2]);
    
    // cria um objeto data atual... 
    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0); // e zera as horas (00:00) para comparação correta

    // Verifica a validade do agendamento
    if (dataAgendamento < dataAtual) {
        exibirStatus(true, "data no passado");
    } else if (dataAgendamento.getDay() === 0 || dataAgendamento.getDay() === 6) {
        exibirStatus(true, "a clínica não abre aos finais de semana");
    } else {
        exibirStatus();
    }
}

// função que exibe mensagem de Status do Agendamento
function exibirStatus(isInvalido = false, mensagem = "") {
    const outSaida = document.getElementById("outSaida");

    if (isInvalido) {
        alert(`Agendamento Inválido: ${mensagem}.`);
        inData.value = "";
        inData.focus();
        outSaida.innerText = "";
        return;
    } else {
        outSaida.innerText = "Agendamento Confirmado com Sucesso!\n" +
            "AGUARDE NOSSO CONTATO VIA WHATSAPP";
        inData.focus();
        return;
    }
}