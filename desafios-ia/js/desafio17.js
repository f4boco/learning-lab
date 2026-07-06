/**
 * esse script calcula a diferença em dias entre a `dataPagamento` e a `dataVencimento`.
 * Em seguida, multiplica esses dias pelo valor da multa e exibi o valor total final
 * que o cliente deve pagar (Valor original + Multa).
 * autor: Fabiano O.
 */

// cria o objeto global do boleto
const boleto = {
    valorOriginal: 150.00,
    dataVencimento: new Date("2026-06-25"),
    dataPagamento: new Date("2026-06-30")
}

// bloco de exibição
{
    // referencia o elemento de saída
    const outSaida = document.getElementById("outSaida");

    let resultado = "CALCULO DO BOLETO:\n"; // irá concatenar a saída
    resultado += "Valor Original: R$ " + boleto.valorOriginal + "\n";

    // obtém a quantidade de dias de atraso e a multa por atraso
    const diasAtraso = calcularDias();
    const multa = calcularMulta(diasAtraso);

    // verifica se existe atraso
    if (diasAtraso > 0) {
        resultado += "Multa P/Atraso: R$ " + multa + "\n";
    }

    // calcula o valor final
    resultado += "Valor Final: R$ " + calcularValor(multa);

    outSaida.innerText = resultado;
}

// função que calcula a quantidade de dias de atraso
function calcularDias() {
    // zera as horas (evita erros na comparação)
    boleto.dataVencimento.setHours(0, 0, 0);
    boleto.dataPagamento.setHours(0, 0, 0);

    // obtendo a quantidade de milissegundos
    const qtdMilissegVenc = boleto.dataVencimento.getTime();
    const qtdMilissegPag = boleto.dataPagamento.getTime();

    // obtém a quantidade de dias da diferença
    const diasAtraso = Math.floor((qtdMilissegPag - qtdMilissegVenc) / 86400000);
    return diasAtraso;
}

// função que calcula o valor da multa
function calcularMulta(qtdDias) {
    // verifica se há atraso (qtdDias > 0)
    if (qtdDias > 0) {
        // retorna o valor da multa
        return qtdDias * 2.00;
    } else {
        // retorna 0 (não atraso)
        return 0.00;
    }
}

// função que calcula a o valor a pagar
function calcularValor(multa) {
    // retorna o valor total
    return boleto.valorOriginal + multa;
}