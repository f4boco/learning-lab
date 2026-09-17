// REFERÊNCIA OS ELEMENTOS HTML
const divTitulo = document.querySelector("#divTitulo");
const imgClube = document.querySelector("#imgClube");
const opcoesClubes = document.querySelectorAll(
    `input[name="clube"]`
);

const KEY_LOCAL_STORAGE = "clube";

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
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
    divTitulo.className = "row cores"+clubeSelecionado;

    imgClube.src = "imagens/" + clubeSelecionado.toLowerCase() + ".webp";
    imgClube.className = "exibe";
    imgClube.alt = `Simbolo do ${clubeSelecionado}`;

    setLocalStorage(KEY_LOCAL_STORAGE, clubeSelecionado);
}

function verificarClube() {
    const clube = getLocalStorage(KEY_LOCAL_STORAGE);
    if (clube) {
        switch (clube) {
            case "Brasil" :
                marcarRadio(`rb${clube}`);
                break;
            case "Pelotas" :
                marcarRadio(`rb${clube}`);
                break;
            case "Farroupilha" :
                marcarRadio(`rb${clube}`);
        }
        trocarClube();
    }
}

opcoesClubes.forEach(clube => {
    clube.addEventListener("change", trocarClube);
});

verificarClube();