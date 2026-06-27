# Processo de Geração do vetor de Produtos

## Objetivo

Criar um vetor de objetos representando x produtos importados. Cada objeto possui as propriedades nome (string), precoDolar (número) e preReal (número), que deve, inicialmente se 0.

## Início

O site é carregado.

## Fluxo

1. Criar uma função `gerarProdutos(qtdProdutos)`:
    1.1 Criar um vetor `listaProdutosGerados`;
    1.2 Criar um vetor `nomesAleatorios` que receberá nomes de produtos aleatórios `["Mini Ventilador USB Portátil Recarregável", "Organizador de Gaveta Dobrável Multifuncional", "Luminária LED Touch com Sensor de Movimento", "Suporte Ajustável para Celular de Mesa", "Fone Bluetooth Esportivo Sem Fio", "Escova Elétrica Facial Recarregável", "Kit Potes Herméticos para Cozinha 5 Peças", "Mochila Impermeável Casual Antifurto", "Massageador Cervical Portátil com Vibração", "Tapete Antiderrapante Absorvente para Banheiro"]`;
    1.3 Criar um loop que repete `qtdProdutos`;
        1.3.1 Gerar um nº aleatório `indexNomeProduto` para pegar um nome aleatório;
        1.3.2 Criar um `produtoObjeto` com as propriedades:
            * id: palavra "prod-" concatenada a um nº aleatório entre 1000 e 2000
            * nome: `nomesAleatorios[indexNomeProduto]`;
            * precoDolar: string "$ " + nº aleatório, entre 1.99 e 9.99;
        1.3.3 Adicionar `produtoObjeto` ao final do vetor `listaProdutosGerados`;
    1.4 Retornar `listaProdutosGerados`;

2. Criar um vetor Global `listaProdutos` que recebe `gerarProdutos()`;