/**
 * esse script possui diferentes funções, com diferentes manipulações de string
 * autor: Fabiano O.
 */

// referencia o elemento html de saída
const outResultado = document.getElementById("outResultado");
let conteiner = ""; // recebe tudo o que será exibido

// chamadas das funções
{
    // criarData();
    criarData();

    // criar data com padrão ISO
    criarDataISO();

    // converter uma String em data
    converterStringDate()

    // manipula os métodos
    manipularMetodos();

    // manipular os métodos get
    manipularMetodosGet();

    // manipular os métodos set
    manipularMetodosSet();

    teste();
}

// função que exibe os resultados
function exibirDates() {
    outResultado.innerText = conteiner;
}

// função de criação de objetos date de diferentes maneiras
function criarData() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- CRIAÇÃO DE OBJETOS DATE ---\n" +
        "Nessa seção, o objeto data é criado de diferentes maneiras.\n";

    let d = new Date(); // data e hora atual
    conteiner += "1. new Date(): " + d + "\n";

    d = new Date ("July 01, 2026 12:35:58"); // a partir de uma string de data
    conteiner += "2. new Date(date string): " + d + "\n";

    d = new Date(2028, 2, 15, 8, 20, 10, 500); // especificando, ano, mes, dia, ... , milissegundos
    console.log(d);
    conteiner += "3. new Date(ano, mês, dia, ...): " + d + "\n";

    const naci = "July 01, 2001 12:35:58";
    d = new Date(naci); // passando variável string
    conteiner += "4. new Date(var String): " + d + "\n\n";

    // chama a função de exibição
    exibirDates();
}

// função de criação de datas ISO
function criarDataISO() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- CRIAÇÃO DE OBJETOS DATE COM PADRÃO ISO ---\n" +
        "Nessa seção, o objeto date é criado com o padrão ISO.\n";

    let d = new Date("2001-06-18"); // passando ano, mês e dia
    conteiner += "1. new Date('dia, mes, ano'): " + d + "\n";

    d = new Date("2026"); // passando somente o ano
    conteiner += "2. new Date('ano'): " + d + "\n";

    d = new Date("2001-06-18T05:30:26-03:00"); // passando tudo
    conteiner += "3. new Date('date e Hora'): " + d + "\n\n";

    // chama a função de exinição
    exibirDates();
}

// converter String em Data
function converterStringDate() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- CONVERTER UMA STRING EM DATA ---\n" + 
        "Nessa seção, uma variável string é convertida em milissegundos, depois em data.\n";

    // converte a string para milissegundos
    const msec = Date.parse("March 21, 2012");

    // converte os milissegundos para data
    const d = new Date(msec);
    conteiner += "1. new Date('msec'): " + d + "\n\n";

    // chama a função de exibição
    exibirDates();
}

// manipulação dos métodos date
function manipularMetodos() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- MANIPULÇÃO DA DATE COM OS MÉTODOS DATE ---\n" +
        "Nessa seção, é testado os diferentes métodos date.\n";
    
    // cria um objeto com a data atual
    const date = new Date();
    conteiner += "Data do Objeto: " + date + "\n";

    // formato mais legível
    let d = date.toDateString();
    conteiner += "1. .toDateString(): " + d + "\n";

    // converte para um string usando o formato UTC
    d = date.toUTCString();
    conteiner += "2. .toUTCString(): " + d + "\n";

    // converter para uma String usando o padrão ISO
    d = date.toISOString();
    conteiner += "3. .toISOString(): " + d + "\n\n";

    // chama a função de exibição
    exibirDates();
}

// manipulação dos métodos date get
function manipularMetodosGet() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- MANIPULÇÃO DA DATE COM OS MÉTODOS GET DATE ---\n" +
        "Nessa seção, é testado os diferentes métodos GET date.\n";

    // cria um objeto com a data atual
    const date = new Date();
    conteiner += "Data do Objeto: " + date + "\n";

    // retona o ano
    let d = date.getFullYear();
    conteiner += "1. .getFullYear(): " + d + "\n";

    // retorna o mês
    d = date.getMonth();
    conteiner += "2. .getMonth(): " + d + " (0-11)\n";

    // retorna o dia
    d = date.getDate();
    conteiner += "3. .getDate(): " + d + " (1-31)\n";

    // retorna a hora
    d = date.getHours();
    conteiner += "4. .getHours(): " + d + " (0-23)\n";

    // retorna os minutos
    d = date.getMinutes();
    conteiner += "5. .getMinutes(): " + d + " (0-59)\n";

    // retorna os segundos
    d = date.getSeconds();
    conteiner += "6. .getSecounds(): " + d + " (0-59)\n";

    // retorna os milissegundos
    d = date.getMilliseconds();
    conteiner += "7. .getMilliseconds(): " + d + " (0-999)\n";

    // retorna o dia da semana
    d = date.getDay();
    conteiner += "8. .getDay(): " + d + " (0-6)\n";

    // retorna o nº de milissegundos desde 1970
    d = date.getTime();
    conteiner += "9. .getTime(): " + d + "\n";

    // retorna a diferença (em minutos) entre horário local e uma hora UTC
    d = date.getTimezoneOffset();
    conteiner += "10. .getTimezoneOffset(): " + d + "\n\n";

    // chama a função de exibição
    exibirDates();
}

// manipulação dos métodos date set
function manipularMetodosSet() {
    // prepara a seção do Conteiner de saída
    conteiner += "--- MANIPULÇÃO DA DATE COM OS MÉTODOS SET DATE ---\n" +
        "Nessa seção, é testado os diferentes métodos SET date.\n";

    // cria um objeto com a data atual
    const date = new Date();
    conteiner += "Data do Objeto: " + date + "\n";
    const d = new Date();

    // define o ano de um objeto data
    d.setFullYear(2050);
    conteiner += "1. .setFullYear(): " + d + "\n";

    // define o mês
    d.setMonth(11);
    conteiner += "2. .setMonth(): " + d + "\n";

    // define o dia
    d.setDate(25);
    conteiner += "3. .setDate(): " + d + "\n";

    // define a hora
    d.setHours(18);
    conteiner += "4. .setHours(): " + d + "\n";

    // define os minutos
    d.setMinutes(30);
    conteiner += "5. .setMinutes(): " + d + "\n";

    // define os segundos
    d.setSeconds(0);
    conteiner += "6. .setSeconds(): " + d + "\n";

    // chama a função de exibição
    exibirDates();
}

function teste() {
    const dtAtual = new Date();
    const dtVenc = new Date("2026-06-30");

    const qtdDiasTime = dtAtual.getTime() - dtVenc.getTime();
    console.log(qtdDiasTime / 86400000 + " Dias");

    const diferenca = Math.floor(
        (dtAtual - dtVenc) / (24 * 60 * 60 * 1000)
    );
    console.log(diferenca);
}