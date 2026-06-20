# Processo do site

## Objetivo

Validar se uma senha digitada pelo usuário atende aos seguintes requisitos mínimos de segurança simultaneamente:
    1. Deve ter entre 8 e 32 caracteres.
    2. Deve conter pelo menos um número.
    3. Deve conter pelo menos uma letra maiúscula.
    4. Deve conter pelo menos um símbolo.
    
Resultado: Exiba "Senha Forte" se passar nos testes, ou "Senha Insegura" caso falhe em algum.

## Início

O botão `Verificar Senha` é clicado

## Entradas e Saídas

**Entradas:** Uma Senha;
**Saídas:** Nível de Segurança da Senha;

## Fluxo

1. Referenciar os elementos html de entradas e saídas de dados;
2. Criar o ouvinte de eventos do formulário;
3. Obter a `senha` (conteúdo do elemento html de entrada);

4. Criar a função `verificarSenha(senha)`:
    5. Criar um vetor de objetos com a regex de `requisitosSenha` e a `mensagemAusencia` desse requisito;
    6. Criar uma variável `statusSenha` que receberá a(s) `mensagemAusencia`;

    DECISÃO:
    7. Verificar se a `senha` NÃO possui entre 8 e 32 caracteres;
        SIM:
        `statusSenha += "Entre 8 e 32 carcateres;\n`

    8. Criar um `for` para verificar os `requisitosSenha` na `senha` digitada;
        DECISÃO:
        8.1 Verificar se `senha` NÃO possui o `requisitosSenha[i].requisito`;
            SIM:
            `statusSenha += requisitosSenha[i].mensagemAusencia + "\n"`
    
    DECISÃO:
    9. Verificar se `statusSenha !== ""`
        SIM:
        returnar `true`;

        NÃO:
        retornar `statusSenhas`;

10. Criar uma variável `statusSenha` para receber o retono da function `verificarSenha(senha)`;

DECISÃO:
11. Verificar se `statusSenha === true`;
    SIM:
    Exibir a Mensagem: "Senha Segura";

    NÃO:
    Exibir: "Senha Insegura! Para ser segura, precisa ter: \n " + `verificarSenha(senha)`;