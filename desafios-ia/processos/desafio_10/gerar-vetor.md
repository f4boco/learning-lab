# Processo do site

## Objetivo

Gerar um vetor com x voos de um aeroporto.

## Início

O site é carregado

## Fluxo

1. Criar um vetor global `listaVoos`, que vai receber o vetor gerado por `gerarVoos(qtdVoos)`;
2. Criar uma função `gerarNúmeros(valorMin, valorMax)`, para gerar nºs aleatórios, em um intervalo definido;
3. Criar uma função `gerarVoos(qtdVoos)` para gerar um vetor com um nº aleatório de objetos voos;
    3.1 Criar um vetor temporário com `nomesDestino = ["São Paulo", "Rio de Janeiro", "Brasília", "Recife", "Salvador", "Fortaleza", "Manaus", "Porto Alegre", "Belo Horizonte", "Curitiba", "Lisboa", "Madrid", "Paris", "Londres", "Roma", "Berlim", "Amsterdã", "Nova York", "Toronto", "Buenos Aires"]`;
    3.2 Criar um vetor local `listaLocalVoos`
    3.3 Criar um loop com `qtdVoos` repetição:
    ```JavaScript
    let vControle = 0;
    while (vControle < qtdVoos)
    ```
    3.3.1 Criar uma variável `statusVoo = gerarNúmeros(valorMin, valorMax)` o nº gerado pela função;

    DECISÃO:
    3.3.2 Verificar o nº `statusVoo` e, de acordo com o nº atribuir a ela mesma "Confirmado", "Atrasado" ou "Cancelado";
    ```JavaScript
    if (statusVoo === 0) {
        statusVoo = "Confirmado";
    } else if (statusVoo === 1) {
        statusVoo = "Atrasado";
    } else {
        statusVoo = "Cancelado";
    }
    ```
    3.3.3 Criar um objeto `vooGerado` com um `codigoVoo` único, `nomeDestino` aleatório, e `statusVoo`;
    3.3.4 Adicionar `vooGerado` a `listaLocalVoos`;
    3.4 Retonar o vetor `listaLocalVoos`;
    
