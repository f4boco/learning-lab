# Processo geral do site

## Objetivo

Receber uma mensagem e sensurar as palavras "bobo", "feio" e "chato" e exibir a mensagem

## Início

o botão enviado é clicado

## Fluxo

1. Criar uma variável global `chat` para concatenar o chat;
2. Criar uma função `sensurarChat()`;
2. Verificar se o usuário digitou alguma mensagem;
3. Obter o conteúdo da mensagem;
4. Criar uma função `verificarMesagem()` e passar como parâmetros a mensagem e um vetor com as palavras para sensurar;
    1. Com expressão regular e o método string de substituir texto, buscar as palavras no texto e sensurálas, se existir;
    2. Adicionar a mensagem sensurada a variável chat;

5. Exibir a variável `chat`;