// REFERÊNCIA OS ELEMENTOS HTML
const divTitulo = document.querySelector("#divTitulo");
const imgClube = document.querySelector("#imgClube");
const opcoesClubes = document.querySelectorAll(
    `input[name="clube"]`
);

function trocarClube() {
    const clubeSelecionado = document.querySelector(
    `input[name="clube"]:checked`
    ).value;
    divTitulo.className = "row cores"+clubeSelecionado;

    imgClube.src = "imagens/" + clubeSelecionado.toLowerCase() + ".webp";
    imgClube.className = "exibe";
    imgClube.alt = `Simbolo do ${clubeSelecionado}`;
}

opcoesClubes.forEach(clube => {
    clube.addEventListener("change", trocarClube);
});