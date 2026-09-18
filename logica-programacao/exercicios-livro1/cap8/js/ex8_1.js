// REFERÊNCIA OS ELEMENTOS HTML
const divTitulo = document.querySelector("#divTitulo");
const imgClube = document.querySelector("#imgClube");
const opcoesClubes = document.querySelectorAll(
    `input[name="clube"]`
);

const STORAGE_KEYS = {
    CLUBE: "clube"
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
    if (clube) {
        marcarRadio(`rb${clube}`);
        trocarClube();
    }
}

opcoesClubes.forEach(clube => {
    clube.addEventListener("change", trocarClube);
});

verificarClube();