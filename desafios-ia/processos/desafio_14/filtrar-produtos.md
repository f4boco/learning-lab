# Processo de Filtro dos Produtos

## Objetivo

Exibir filtrar os produtos e exibir apenas os produtos que possuem valor dentro do intervalo definido pelo usuário.

## Início

O `botão Filtrar` é clicado;

## Entradas e Saídas

**Saídas:** Produtos filtrados

## Fluxo

1. Refrenciar os elementos html;
2. Criar um ouvinte de `submit` ao `formulario`;
DECISÃO:
3. Verificar se as entradas são válidas (`valores numéricos >= 0 && min > max`);

NÃO:
Exibir a mensagem: "Valores Inválidos para Filtro"

4. Criar uma função `filtrarProdutos(min, max)`:
    4.1 Filtrar a `listaProdutosReal` e criar um novo vetor `listaFiltrada` com apenas os produtos que o `precoReal` está dentro do intervalo `min e max`;
    4.2 Chamar a função `exibirProdutos` passando o `listaFiltrada` como parâmetro;

5. Criar uma função `limparFiltro`:
    5.1 Chama a função `exibirProdutos` passando como parâmetros o vetor `listaProdutosReal`;
    5.2 Executa o método de recarregar formulário;

6. Associa a função `limparFiltro` ao evento click do `btLimpar`;
