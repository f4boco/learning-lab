// REFERENCIA O ELEMENTOS HTML DA PÁGINA
const formularioAposta = document.querySelector("#formulario-aposta");
const inNome = document.querySelector("#inNome");
const inPeso = document.querySelector("#inPeso");
const outApostas = document.querySelector("#outApostas");

const KEYS_STORAGE = {
    APOSTAS: "apostas"
};

// FUNÇÕES DOM
function obterEntradas() {
    const nome = inNome.value.trim();
    const peso = Number(inPeso.value);

    return [nome, peso];
}

function mostrarVencedor(pesoCorreto, vencedor) {
    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mensagem += "\n----------------------------------------------";
    mensagem += `\nVencedor: ${vencedor.nome}`;
    mensagem += `\nAposta: ${vencedor.peso}`;
    alert(mensagem);
}

// FIUNÇÕES AUXILIÁRES
function verificarEntradas(nome, peso) {
    return !(nome === "" || peso <= 0 || isNaN(peso));
}

function solicitarPesoCorreto() {
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    if (pesoCorreto <= 0 || isNaN(pesoCorreto))
        return null;

    return pesoCorreto;
}

// FUNÇÕES DE localStorage
function toJson(value) {
    return JSON.stringify(value);
}

function fromJson(value) {
    return JSON.parse(value);
}

function getStorage(key) {
    return fromJson(localStorage.getItem(key));
}

function addStorage(key, value) {
    const valuesStorage = getStorage(key) || [];
    valuesStorage.push(value);
    localStorage.setItem(key, toJson(valuesStorage));
}

function clearStorage(key) {
    localStorage.removeItem(key);
}

// FUNÇÕES PRINCIPAIS
function incluirAposta() {
    const [nome, peso] = obterEntradas();

    if (!verificarEntradas(nome, peso)) {
        alert("Informe nome e peso da aposta");
        inNome.focus();
        return;
    }

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...");
        inPeso.focus();
        return;
    }

    const aposta = {
        id: `aposta-${crypto.randomUUID().slice(0, 4)}`,
        nome: nome,
        peso: peso
    };

    addStorage(KEYS_STORAGE.APOSTAS, aposta);

    mostrarApostas();

    formularioAposta.reset();
}

function verApostaExiste(peso) {
    const todasAsApostas = getStorage(KEYS_STORAGE.APOSTAS) || [];

    const pesoString = peso.toString();
    return todasAsApostas.some(aposta => {
        return aposta.peso === pesoString;
    });
}

function mostrarApostas() {
    const apostas = getStorage(KEYS_STORAGE.APOSTAS);
    if (!apostas) {
        outApostas.textContent = "Nenhuma Aposta Registrada!";
        return;
    }

    const relacaoApostas = apostas.map(aposta => 
        `${aposta.nome} = ${aposta.peso}gr`
    ).join("\n");

    outApostas.innerText = relacaoApostas;
}

function verificarVencedor() {
    const apostas = getStorage(KEYS_STORAGE.APOSTAS);

    if (!apostas) {
        alert("Não há apostas cadastradas");
        return;
    }

    const pesoCorreto = solicitarPesoCorreto();
    if (pesoCorreto === null)
        return;

    let vencedor = apostas[0];
    for (let i = 1; i < apostas.length; i++) {
        const difVencedor = Math.abs(Number(vencedor.peso) - pesoCorreto);
        const difAposta = Math.abs(Number(apostas[i].peso) - pesoCorreto);

        if (difAposta < difVencedor)
            vencedor = apostas[i];
    }

    mostrarVencedor(pesoCorreto, vencedor);
}

function limparApostas() {
    const confirmacao = confirm("Tem certeza que deseja excluir todas as apostas?");
    if (confirmacao) {
        clearStorage(KEYS_STORAGE.APOSTAS);
    }
    mostrarApostas();
}

// EVENTOS
formularioAposta.addEventListener("submit", function (event) {
    event.preventDefault();
    incluirAposta();
});

document.querySelector("#btVencedor").addEventListener("click", verificarVencedor);
document.querySelector("#btLimpar").addEventListener("click", limparApostas);

// INICIALIZAÇÃO
mostrarApostas();