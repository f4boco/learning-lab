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
    document.querySelector(`#${idRadio}`).checked = true;
}

function trocarClube() {
    const clubeSelecionado = document.querySelector(
    `input[name="clube"]:checked`
    ).value;

    if (clubeSelecionado === "") {
        divTitulo.className = "row";
        imgClube.className = "oculta";
        imgClube.alt = "";
        removeLocalStorage(STORAGE_KEYS.CLUBE);
        return;
    }

    divTitulo.className = "row cores"+clubeSelecionado;

    imgClube.src = "imagens/" + clubeSelecionado.toLowerCase() + ".webp";
    imgClube.className = "exibe";
    imgClube.alt = `Simbolo do ${clubeSelecionado}`;

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