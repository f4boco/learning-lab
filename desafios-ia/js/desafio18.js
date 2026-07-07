/**
 * esse script gera as opções de meses. Depois, gerar um novo array contendo apenas os nomes
 * dos colaboradores que fazem aniversário no mês selecionado pelo usuário.
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

// bloco que gera as opções do select inMes
{
    // meses de opções
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mesAtual = new Date().getMonth(); // Obtém o mês atual (0-11)

    // pera cada elemento de meses
    meses.forEach((mes, i) => {
        // cria e monta o elemento html de opção
        const novaOpcao = document.createElement("option");
        novaOpcao.value = i;
        novaOpcao.text = mes;
        // verifica se é o mês atual
        if (i === mesAtual)
            novaOpcao.selected = true;

        // adiciona a opção criada o select
        inMes.appendChild(novaOpcao);
    });
}

// função que gera o vetor com os aniversariantes do mês
function agruparAniversariantes() {
    // obtém o mês selecionado pelo usuário
    const mesSelecionado = Number(inMes.value);

    // filtra os colaboradores que o mes de nascimento é igual ao mes selecionado
    const aniversariantes = colaboradores.filter(colaborador => {
        const mesColaborador = colaborador.dataNascimento.getMonth();
        return mesColaborador === mesSelecionado;
    });
    // cria um novo vetor coma os nomes dos colaboradores
    const nomesAniversariantes = aniversariantes.map(funcionario => funcionario.nome);

    // chama a função de exibição
    exibirAniversariantes(nomesAniversariantes);
}
// referencia o btAgrupar e associa a função agruparAniversariantes ao evento click
document.getElementById("btAgrupar").addEventListener("click", agruparAniversariantes);

// função que exibe os aniversariantes
function exibirAniversariantes(listaAniversariantes) {
    // referencia o elemento html de saída e exibe os nomes da lista
    document.getElementById("outSaida").innerText = listaAniversariantes.join(" - ");
}