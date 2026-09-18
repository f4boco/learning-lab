// REFERENCIA O ELEMENTOS HTML DA PÁGINA
const formularioAposta = document.querySelector("#formulario-aposta");
const inNome = document.querySelector("#inNome");
const inPeso = document.querySelector("#inPeso");

function incluirAposta() {
    const nome = inNome.value.trim();
    const peso = Number(inPeso.value);

    if (nome === "" || peso === 0 || isNaN(peso)) {
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

    const apostas = JSON.parse(localStorage.getItem("aposta")) || [];
    apostas.push(aposta);
    localStorage.setItem("apostas", JSON.stringify(aposta));

    // mostrarApostas(apostas);
    
    formularioAposta.reset();
}