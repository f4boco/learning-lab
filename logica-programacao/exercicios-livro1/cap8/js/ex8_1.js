// REFERÊNCIA OS ELEMENTOS HTML
const divTitulo = document.querySelector("#divTitulo");
const imgClube = document.querySelector("#imgClube");
const opcoesClubes = document.querySelectorAll(
    `input[name="clube"]`
);
const outVisitas = document.querySelector("#outVisitas");

const STORAGE_KEYS = {
    CLUBE: "clube",
    VISITAS: "visitas"
};

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function marcarRadio(idRadio) {
    [...opcoesClubes].find(radio => {
        return radio.id === idRadio;
    }).checked = true;
}

function obterClubeSelecionado() {
    return document.querySelector(
        `input[name="clube"]:checked`
    ).value;
}

function exibirClube(clube) {
    divTitulo.className = "row cores" + clube;
    imgClube.src = "imagens/" + clube.toLowerCase() + ".webp";
    imgClube.className = "exibe";
    imgClube.alt = `Simbolo do ${clube}`;
}

function exibirBoasVindas(mensagem) {
    outVisitas.textContent = mensagem;
}

function ocultarClube() {
    divTitulo.className = "row";
    imgClube.className = "oculta";
    imgClube.alt = "";
}

function trocarClube() {
    const clubeSelecionado = obterClubeSelecionado();

    if (clubeSelecionado === "") {
        ocultarClube();
        removeLocalStorage(STORAGE_KEYS.CLUBE);
        return;
    }

    exibirClube(clubeSelecionado);
    setLocalStorage(STORAGE_KEYS.CLUBE, clubeSelecionado);
}

function verificarClube() {
    const clube = getLocalStorage(STORAGE_KEYS.CLUBE);
    contarVisitas();
    if (clube) {
        marcarRadio(`rb${clube}`);
        trocarClube();
    }
}

function contarVisitas() {
    let numVisita = Number(getLocalStorage(STORAGE_KEYS.VISITAS));
    numVisita++;

    if (numVisita === 1)
        exibirBoasVindas(`Muito Bem Vido(a)! Esta é a sua primeira visita ao nosso site.`);
    else
        exibirBoasVindas(`Que bom que você voltou! Esta é a sua visita de número ${numVisita} ao nosso site.`);

    setLocalStorage(STORAGE_KEYS.VISITAS, numVisita);
}

opcoesClubes.forEach(clube => {
    clube.addEventListener("change", trocarClube);
});

verificarClube();