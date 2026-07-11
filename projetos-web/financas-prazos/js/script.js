/**
 * esse script obtém as entradas/transações digitadas pelo usuário, exibe um histórico
 * de transações, ...
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

    // chama a função de exibição
    exibirHistorico(transacoes);

    // chama a função de atualização dos cards
    atualizarCards(transacoes);

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

// função que exibe os histórico de transações
function exibirHistorico(vetorTransacoes) {
    // referencia o elemento de exibição
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    // verifica se o vetor está vazio
    if (vetorTransacoes.lenght === 0) {
        corpoTabela.innerHTML = `<small>Nenhuma Transação!</small>`;
        return;
    }

    // para cada transação do vetor trasações ...
    vetorTransacoes.forEach(transacao => {
        // cria um elemento de tr
        const trTransacao = document.createElement("tr");

        // obtém a data atual para comparação
        let hoje = new Date();
        hoje.setHours(0, 0, 0, 0); // zera a hora

        // define o status, comparando por milissegundos
        let status = "";
        if (transacao.vencimento.getTime() < hoje.getTime()) {
            status = "prazo-atraso";
        } else if (transacao.vencimento.getTime() === hoje.getTime()) {
            status = "prazo-critico";
        } else {
            status = "prazo-ok";
        }

        // monta o html
        trTransacao.innerHTML = `
            <td>${transacao.descricao}</td>
            <td class="status-${transacao.tipo}"> R$ ${transacao.valor.toFixed(2)}</td>
            <td>${transacao.vencimento.toLocaleDateString("pt-BR")}</td>
            <td><span class="status-${status}">${status.match(/(?<=-)\w+/gi)}</span></td>
            <td>
                <button class="botao-deletar" data-id="1">Excluir</button>
            </td>
        `;

        // adiciona o elemento da transacao ao elemento de exibição
        corpoTabela.appendChild(trTransacao);
    });
}

// função que retorna um novo objeto data hoje
function novoHoje() {
    // obtém a data atual
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // zera a hora

    return hoje;
}

// função que atualiza os cards
function atualizarCards(vetorTransacoes) {
    // referencia os elementos html dos cards
    const totalSaldo = document.getElementById("total-saldo");
    const totalAtencao = document.getElementById("total-atencao");
    const totalAtraso = document.getElementById("total-atraso");

    // obtém a data atua
    const hoje = novoHoje().getTime();

    // entrada - saida
    const saldo = vetorTransacoes.reduce((ac, transacao) => {
        // seleciona apenas as transacoes de entrada
        if (transacao.tipo === "entrada") {
            ac += transacao.valor;
        } else {
            ac -= transacao.valor;
        }
        return ac;
    }, 0);

    // filtra apenas as transacoes do tipo saida
    const transacSaida = vetorTransacoes.filter(transacao => transacao.tipo === "saida");

    // conta as contas que estão a vencer
    const atencao = transacSaida.filter(transacao => {
        // cria uma nova data com mais 7 dias a frente
        const hojeMaisSete = new Date(hoje + (7 * 86400000)).getTime();

        // verifica se o vencimento está no período dos 7 dias
        const venc = transacao.vencimento.getTime();
        if (venc >= hoje && venc <= hojeMaisSete) {
            return true;
        }
    }).length;

    // conta as contas que estã vencidas
    const atraso = transacSaida.filter(transacao => {
        const venc = transacao.vencimento.getTime();
        if (venc < hoje) {
            return true;
        }
    }).length;

    // adiciona os valores aos elementos html
    totalSaldo.innerText = saldo.toFixed(2);
    totalAtencao.innerText = atencao;
    totalAtraso.innerText = atraso;
}