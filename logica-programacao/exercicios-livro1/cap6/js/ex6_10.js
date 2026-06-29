const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia atraso

function calcularMultaJuros() {
    // referencia os elementos da página
    const inDataVenc = document.getElementById("inDataVenc");
    const inValor = document.getElementById("inValor");
    const outMulta = document.getElementById("outMulta");
    const outJuros = document.getElementById("outJuros");
    const outTotal = document.getElementById("outTotal");

    // obtém o conteúdo dos campos de entrada
    const dataVenc = inDataVenc.value;
    const valor = Number(inValor.value);

    // cria dois objetos (instancia dois objetos) tipo data
    const hoje = new Date();
    const vencto = new Date();

    // a data vem no formato aaaa-mm-dd
    const partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2])); // atribui o dia da dataVenc ao dia da data vencto
    vencto.setMonth(Number(partes[1]) - 1); // atribui o mês da dataVenc ao mês da data vencto
    /* subtrai um, porque a contagem de meses começa em 0 (jan: 0, fev: 1, marc: 2, ...) */
    vencto.setFullYear(Number(partes[0])); // atribui o ano da dataVenc ao ano da data vencto

    // calcula a diferença de dias entre as datas (em milissegundos)
    const atraso = hoje - vencto;

    let multa = 0; // inicializa multa e juros com 0
    let juros = 0;

    // se conta estiver em atraso ...
    if (atraso > 0) {
        // converte os milissegundos da diferença em dias
        // (1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000)
        // round(): necessário para períodos envolvendo horário de verão
        const dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA; // calcula multa e juros
        juros = (valor * TAXA_JUROS) * dias;
    }

    const total = valor + multa + juros; // calcula o total

    // exibe os valores
    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
}
// referencia o btCalcular e associa a função calcularMultaJuros ao evento click
document.getElementById("btCalcular").addEventListener("click", calcularMultaJuros);

function limparCampos() {
    // recarrega a página
    location.reload();
}
// referencia o btNovaConta e associa a função limparCapos ao evento click
document.getElementById("btNovaConta").addEventListener("click", limparCampos);