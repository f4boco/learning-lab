# Processo do Site

## Objetivo

Obter o mês selecionado pelo usuário. Depois, gerar um novo array contendo apenas os nomes dos colaboradores que fazem aniversário no mês selecionado.

## Início

O botão `Agrupar Aniversariantes` é Clicado

## Fluxo

1. Criar uma função `agruparAniversariantes()`:  
    1.1 Obter o `mesSelecionado` pelo usuário;  
    1.2 Criar um novo vetor `aniversariantes` com os funcionários que nasceram em `mes`;  
    1.3 Criar um novo vetor com apenas os nomes dos `aniversariantes`;  
    1.4 Chamar a função `exibirAniversariantes()` passando como parâmetro o vetor `aniversariantes`;  

2. Criar a função `exibirAniversariantes(listaAniversariantes )`:  
    2.1 Referenciar o elemento html de saída;  
    2.2 Exibir no elemento o conteúdo de `listaAniversariantes`;  