# Processo de Geração dos Produtos

## Objetivo

Criar um vetor de objetos com x produtos de supermercado. Cada objeto possui as propriedades id (string), nome (string), preco (número) e dataVenc (data).

## Início

O site é carregado.

## Fluxo

1. Criar uma função `gerarProdutos(qtdProdutos)`:
    1.1 Criar um vetor local `produtosGerados[]`, para armazenar os produtos gerados;
    1.2 Criar um vetor local `produtosAleatorios = ["Arroz Integral 1kg", "Feijão Carioca 1kg", "Macarrão Espaguete 500g", "Leite Integral 1L", "Café Solúvel 200g", "Açúcar Refinado 1kg", "Óleo de Soja 900ml", "Farinha de Trigo 1kg", "Biscoito Recheado 140g", "Sabão em Pó 800g", "Detergente Líquido 500ml", "Papel Higiênico 12 rolos", "Margarina 500g", "Molho de Tomate 340g", "Achocolatado em Pó 400g"]`;
    1.3 Criar um objeto `const dataProd = new Date()` para receber as datas;
    1.4 Criar um Loop `for` para repetir `qtdProdutos` vezes;
        1.4.1 Criar uma variável `nomeProduto`, que recebe um index aleatório de `produtosAleatorios`;
        1.4.2 Criar uma variável `preco` que recebe um preço aleatório entre 0.90 à 20;
        1.4.3 Definir o dia de `dataProd` aleatoriamente (1-31);
        1.4.4 Definir o mês de `dataProd` aleatoriamente (0-11);
        1.4.5 Definir o ano de `dataProd` aleatoriamente (ano atual ou ano seguinte);
        1.2.6 Criar um novo objeto `produto` com essas informações;
        1.4.7 Adicionar `produto` ao final da lista `produtosGerados`;
    1.5 Retornar `produtosGerados`;
2. Criar uma vetor global `listaProdutos` para receber `gerarProdutos(10, 15)`;