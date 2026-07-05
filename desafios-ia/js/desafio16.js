/**
 * Transformar data no formato brasileiro (DD/MM/AAAA às HH:MM) e exibir a string final site.
 * autor: Fabiano O.
 */

// cria o objeto de log
const logSeguranca = {
    usuario: "desconhecido",
    dataHora: new Date("2026-07-04T14:35:00")
};

// Bloco de exibição
{
    // referencia o elemento de saída
    const outSaida = document.getElementById("outSaida");

    // Monta a saída
    const resultado = `Manual: ${formatarDataManual()} \nAutomático: ${formatarDataAutomaticamente()}`;

    outSaida.innerText = resultado;
}

// função que formata a data do log manualmente
function formatarDataManual() {
    let dataLog = ""; // receberá a data e hora

    // concatena dia, mes, ... , Minutos
    dataLog += 
        logSeguranca.dataHora.getDate() // obtém o dia
        .toString().padStart(2, "0") // conveter para string e adiciona o zero a esquerda (se preciso)
        + "/"
    ;
    dataLog += 
        (logSeguranca.dataHora.getMonth() + 1) // adiciona + 1, pois a o mês vai de 0 a 11
        .toString().padStart(2, "0")
        + "/"
    ;
    dataLog +=
        logSeguranca.dataHora.getFullYear()
        .toString().padStart(2, "0")
        + " às "
    ;
    dataLog +=
        logSeguranca.dataHora.getHours()
        .toString().padStart(2, "0")
        + ":"
    ;
    dataLog +=
        logSeguranca.dataHora.getMinutes()
        .toString().padStart(2, "0")
        + ":"
        ;
    dataLog +=
        logSeguranca.dataHora.getSeconds()
        .toString().padStart(2, "0")
    ;

    return dataLog;
}

// função que formata a data automaticamente
function formatarDataAutomaticamente() {
    return (logSeguranca.dataHora.toLocaleString("pt-BR").toString().replace(",", " às"));
}