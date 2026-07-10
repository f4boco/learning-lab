/**
 * esse script obtém as entradas digitadas pelo usuário, ...
 * 
 * autor: Fabiano O.
 */

// vetor global que armazena as transações
const transacoes = [];

// referencia os elementos html
const formulario = document.getElementById("formulario-transacao");
const inDescricao = document.getElementById("descricao");
const inValor = document.getElementById("valor");
const inTipo = document.getElementById("tipo");
const inVencimento = document.getElementById("vencimento");

formulario.addEventListener("submit", function (event) {
    // impede a página de atualizar e recarregar o código js
    event.preventDefault();

    // obtém os valores das entradas
    const descricao = inDescricao.value.trim();
    const valor = Number(inValor.value);
    const tipo = inTipo.value;
    let vencimento = inVencimento.value;

    // verifica se a entrada é válida
    if (descricao === "") {
        alert("Descrição Inválida!");
        inDescricao.value = "";
        inDescricao.focus();
        return;
    }
    if (valor <= 0) {
        alert("O valor deve ser MAIOR QUE ZERO");
        inValor.value = "";
        inValor.focus();
        return;
    }

    // prepara a data de vencimento
    const dataQuebrada = vencimento.split("-")
        .map(dat => Number(dat));
    vencimento = new Date(dataQuebrada[0], dataQuebrada[1] - 1, dataQuebrada[2]);

    // cria o objeto da transação
    const transacao = {
        id: gerarID(),
        descricao: descricao,
        valor: valor,
        tipo: tipo,
        vencimento: vencimento
    }

    // adiciona o objeto ao final do vetor transacoes
    transacoes.push(transacao);

    formulario.reset();
});

// função que gera o ID
function gerarID() {
    const instanteAtual = Date.now();
    const letrasAleatorias = []; // receberá duas letras aleatórias

    // gera as duas letras aleatorias
    for (let i = 0; i < 2; i++) {
        letrasAleatorias[i] = String.fromCharCode(gerarNum(0, 25) + 65);
    }

    // retorna o id
    return letrasAleatorias[0] + (instanteAtual + gerarNum(1000, 2000) - gerarNum(100, 500))
        + letrasAleatorias[1];
}

// função que gera número aleatórios com intervalos definidos
function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}