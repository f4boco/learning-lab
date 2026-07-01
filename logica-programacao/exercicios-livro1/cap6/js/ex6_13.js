/**
 * esse script possui diferentes funções, com diferentes manipulações de string
 * autor: Fabiano O.
 */

// chamadas das funções
{
    // criarData();
    criarDataISO();
}

// função de criação de objetos date de diferentes maneiras
function criarData() {
    let d = new Date(); // data e hora atual
    console.log(d);

    d = new Date ("July 01, 2026 12:35:58"); // a partir de uma string de data
    console.log(d);

    d = new Date(2028, 2, 15, 8, 20, 10, 500); // especificando, ano, mes, dia, ... , milissegundos
    console.log(d);

    const naci = "July 01, 2001 12:35:58";
    d = new Date(naci);
    console.log(d);
}

// função de criação de datas ISO
function criarDataISO() {
    let d = new Date("2001-06-18");
    console.log(d);

    d = new Date("2026");
    console.log(d);

    d = new Date("2001-06-18T05:30:26-03:00");
    console.log(d);
}