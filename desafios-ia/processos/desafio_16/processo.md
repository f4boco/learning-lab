# Processo do Site

## Objetivo

Transformar data no formato brasileiro (DD/MM/AAAA às HH:MM) e exibir a string final site.

## Início

O site é carregado

## Fluxo

1_ Criar o objeto `logSeguranca` global:
```JavaScript
const logSeguranca = {
  usuario: "admin_master",
  dataHora: new Date("2026-07-02T14:35:00") // 02 de Julho de 2026, às 14:35
};
```

2_ Criar uma função `formatarDataManual()`:

    2.1 Criar uma variável `dataLog` para receber a data e hora;
    2.3 Concatenar em `dataLog` o retorno de `logSeguranca.datahora.getDate() + "/"`;
    2.4 Concatenar em `dataLog` o retorno de `logSeguranca.datahora.getMonth() + "/"`;
    2.5 Concatenar em `dataLog` o retorno de `logSeguranca.datahora.getFullYear() + " às "`;
    2.6 Concatenar em `dataLog` o retorno de `logSeguranca.datahora.getHours() + ":"`;
    2.7 Concatenar em `dataLog` o retorno de `logSeguranca.datahora.getMinutes()`;
    2.8 Retornar `dataLog`;

3_ Criar uma função `formatarDataAutomatica()`:

    3.1 Retornar o resultado de `logSeguranca.dataHora.toLocaleString();`;

4_ Criar uma função `exibirLog()`:

    4.1 Referenciar o elemento html de saída;
    4.2 Criar uma constante com o `resultado = "Manual: "+ formatarDataManual() + "\n Automático: " + formatarDataAutomatico()`;
    4.3 Exibir no elemento html de saída o conteúdo de `resultado`;