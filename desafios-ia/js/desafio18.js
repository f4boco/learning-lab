/**
 * esse script gera as opções de meses...
 * autor: Fabiano O.
 */

// referencia o elemento de Entrada/Saída
const inMes = document.getElementById("inMes");

// vetor de colaboradores
const colaboradores = [
  { nome: "Ana Silva", dataNascimento: new Date("1995-07-14") },
  { nome: "Carlos Souza", dataNascimento: new Date("1988-03-22") },
  { nome: "Beatriz Costa", dataNascimento: new Date("2000-07-05") },
  { nome: "David Oliveira", dataNascimento: new Date("1992-12-25") }
];

// bloco de Execução
{
    // executa a função para gerar as opções do select
    gerarOpcoes();
}

// função que gera as opções do select inMes
function gerarOpcoes() {
    // meses de opções
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mesAtual = new Date().getMonth(); // Obtém o mês atual (0-11)

    // pera cada elemento de meses
    meses.forEach((mes,i) => {
        // cria e monta o elemento html de opção
        const novaOpcao = document.createElement("option");
        novaOpcao.value = mes.slice(0, 3); // define apenas as três primeiras letras
        novaOpcao.text = mes;
        // verifica se é o mês atual
        if (i === mesAtual)
            novaOpcao.selected = true;

        // adiciona a opção criada o select
        inMes.appendChild(novaOpcao);
    });
}