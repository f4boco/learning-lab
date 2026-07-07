# Processo de Gerar Opções

## Objetivo

Obter o Elemento html de entrada, gerar as opções de meses e definir o mês atual como autoselecionado.

## Início

O Site é Carregado

## Fluxo

1. Referenciar o elemento html `inMes`;  
2. Criar uma função `listarOpcoes`:  
    2.1 Criar um vetor `meses` com todos os meses do ano;  
    2.2 Obter o `mesAtual` com `new Data().getMonth()`;  
    2.3 Percorrer todos os elementos do vetor `meses` com `forEach()`;  
    2.4 Para cada `mes`:  
        2.4.1 Criar um novo Elemento html `novaOpcao` que recebe uma `<option>`
        2.4.2 Definir o `novaOpcao.value` como as três primerias letras de `mes`;  
        2.4.3 Definir o `novaOpcao.text` como `mes`;  
        DECISÃO:  
        2.4.4 Verifica se `i === mesAtual`;  
            SIM:  
            2.4.4.1 Definir `novaOpcao.selected = true`;  
        2.4.5 Adicionar `novaOpcao` a `inMes`;  

## Regras de Negócio

* A lista de opções de meses deve ser introduziada ao html;
* O mês pré-marcador deve ser o mês atual;