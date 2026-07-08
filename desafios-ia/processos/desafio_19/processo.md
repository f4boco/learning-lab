# Processo do Site

## Objetivo

Escrever um código que recebe uma data informada pelo usuário, analisae exibe no console: *"Agendamento inválido: data no passado"*, se a data for anterior ao momento atual. *"Agendamento inválido: a clínica não abre aos finais de semana"*, se o dia da semana for sábado ou domingo. *"Agendamento confirmado com sucesso!"*, se passar nas duas validações.

## Início

O botão **Agendar Atendimento** é Clicado

## Fluxo

1. Referenciara o elemento html de entrada (`inData`);  
2. Criar uma função `criarAgendamento()`;  
    2.1 Obter o conteúdo de `inData` em uma constante `dataAgendamento`;  
    DECISÃO:  
    2.2 Verificar se a `dataAgendamento` é menor que hoje (`new Date()`);  

    SIM:  
    Exibir a Mensagem: *"Agendamento inválido: data no passado"*;  

    NÃO:  
    DECISÃO:  
    2.3 Verificar se o dia da semana de `dataAgendamento` é um domingo(0) ou sábado (6);  

    SIM:  
    Exibir a mensagem: *"Agendamento inválido: a clínica não abre aos finais de semana"*;  

    NÃO:  
    Exibir a mensagem: *"Agendamento confirmado com sucesso!"*;  
3. Referenciar o `btAgendar` e associar a função `criarAgendamento` ao evento click

## Regras de Negócio

* 