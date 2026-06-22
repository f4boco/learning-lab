# Processo do site

## Objetivo

Contar quantas vezes uma determinada palavra aparece em um texto

## Início

O Botão `Contar Palavra` é clicado

## Fluxo

1. Referenciar os elementos HTML;
2. Adicionar um Ovinete de eventos submit ao `formulário`;
3. Obter em `texto` e `palavraBuscada` o conteúdo dos elementos de entrada;
4. Verificar se as entradas são válidas;
5. Criar um function `contarPalavras(texto, palavra)`;
    5.1 Referenciar o elemento html de saída;
    5.2 Salvar em `contadorPalavras` as ocorrências da `palavras`na string `texto`;
    5.3 Retonar `contadorPalavras` no elemento de saída do hmtl;