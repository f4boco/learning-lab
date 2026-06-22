# Processo do site

## Objetivo

Exibir as informações dos Voos no Painel

## Início

O site é carregado

## Fluxo

1. Criar uma função `exibirVoos(voos)`;
2. Referenciar o `elemento de saída` no hmtl e limpar o conteúdo dele;

DECISÃO: 
3. Verificar se `voos !== 0`:

SIM:
4. Criar um looop para percorrer `voos`;
    4.1 Criar uma `divVoo` contendo as informações do voo;
    4.2 Adicionar a `divVoo` ao `elemento de saída`;

NÃO:
Exibir a mensagem: "Não há Voos a ser Exibido!";

5. Chamar a função `exibirVoos()` após a geração do `listaVoos`;