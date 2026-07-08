# 🤖 Desafio: Validador de Agendamento

**Contexto:** Uma clínica médica não permite agendamentos retroativos (no passado) e também não abre aos finais de semana (sábado e domingo).
**O que fazer:** Escreva uma estrutura condicional (if/else) que analise a constante dataDesejada. O código deve exibir no console:
* "Agendamento inválido: data no passado", se a data for anterior ao momento atual.
* "Agendamento inválido: a clínica não abre aos finais de semana", se o dia da semana for sábado ou domingo.
* "Agendamento confirmado com sucesso!", se passar nas duas validações.

## 🎯 Aprendizados Praticados
- Objeto Date e Métodos Date;
- Strings e Métodos Strings;
- Vetor;
- Condicionais;
- Funções.

## 📝 Feedback da IA

> O script implementado no arquivo desafio19.js gerencia regras de validação cronológica para um fluxo de agendamentos, impedindo registros em datas pretéritas ou em finais de semana. A lógica de desestruturação e conversão de strings de entrada foi executada com métodos nativos funcionais, demonstrando boa modularidade de escopo. A revisão técnica identificou uma assimetria na intenção de uso do fuso horário, onde o construtor numérico padrão instanciou o objeto no fuso local do cliente, gerando possíveis inconsistências com o método .getDay().
> 

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**