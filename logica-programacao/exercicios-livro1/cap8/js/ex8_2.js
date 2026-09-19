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

// FIUNÇÕES AUXILIÁRES
function verificarEntradas(nome, peso) {
    return nome === "" || peso === 0 || isNaN(peso);
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

// FUNÇÕES PRINCIPAIS
function incluirAposta() {
    const [nome, peso] = obterEntradas();

    if (verificarEntradas(nome, peso)) {
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
    const todasAsApostas = getStorage(KEYS_STORAGE.APOSTAS);
    if (todasAsApostas) {
        const pesoString = peso.toString();
        return todasAsApostas.some(aposta => {
            return aposta.peso === peso;
        });
    } else {
        return false;
    }
}

function mostrarApostas() {
    const apostas = getStorage(KEYS_STORAGE.APOSTAS);
    if (!apostas) {
        outApostas.innerHTML = "Nenhuma Aposta Registrada!";
        return;
    }

    let relacaoApostas = "";
    apostas.forEach(aposta => {
        relacaoApostas += `${aposta.nome} = ${aposta.peso}gr \n`;
    });

    outApostas.innerText = relacaoApostas;
}

function verificarVencedor() {
    const apostas = getStorage(KEYS_STORAGE.APOSTAS);

    if (!apostas) {
        alert("Não há apostas cadastradas");
        return;
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) 
        return;

    let vencedor = apostas[0];
    for (let i = 1; i < apostas.length; i++) {
        const difVencedor = Math.abs(Number(vencedor.peso) - pesoCorreto);
        const difAposta = Math.abs(Number(apostas[i].peso) - pesoCorreto);

        if (difAposta < difVencedor) 
            vencedor = apostas[i];
    }

    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mensagem += "\n----------------------------------------------";
    mensagem += `\nVencedor: ${vencedor.nome}`;
    mensagem += `\nAposta: ${vencedor.peso}`;
    alert(mensagem);
}

// EVENTOS
formularioAposta.addEventListener("submit", function(event) {
    event.preventDefault();
    incluirAposta();
});

document.querySelector("#btVencedor").addEventListener("click", verificarVencedor);

// INICIALIZAÇÃO
mostrarApostas();