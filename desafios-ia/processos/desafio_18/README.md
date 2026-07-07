# 🤖 Desafio: Agrupamento de Usuários por Aniversário

**Contexto:** O setor de RH de uma empresa quer fazer uma lista com os colaboradores que fazem aniversário no mês para preparar uma comemoração.
**O que fazer:** Solicite um mês. Depois, utilizando os métodos de array (como `filter` e `map`), gere um novo array contendo apenas os nomes dos colaboradores que fazem aniversário neste mesmo mês.
```JavaScript
const colaboradores = [
  { nome: "Ana Silva", dataNascimento: new Date("1995-07-14") },
  { nome: "Carlos Souza", dataNascimento: new Date("1988-03-22") },
  { nome: "Beatriz Costa", dataNascimento: new Date("2000-07-05") },
  { nome: "David Oliveira", dataNascimento: new Date("1992-12-25") }
];
```

## 🎯 Aprendizados Praticados
- Data (ISO e UTC);
- Vetor e Vetor de Objetos;
- Métodos de vetor (*map()* e *filter()*);
- forEach;
- Funções;
- UI no JS;

## 📝 Feedback da IA

> O script implementado no arquivo desafio18.js realiza a filtragem de coleções de objetos através do uso encadeado dos métodos funcionais .filter() e .map(). O preenchimento dinâmico dos elementos de opção do DOM foi integrado ao índice nativo de meses do JavaScript (0-11), assegurando a consistência lógica dos dados. O código demonstra excelente aplicação de manipulação de arrays e controle de fluxo voltado à interface pública. Como melhoria futura para o padrão de produção, recomenda-se a implementação de um tratamento visual na interface para os casos em que a busca retorne um array vazio.
> 

## 🔮 Melhorias Futuras

* [ ] Implementar um tratamento visual na interface para os casos em que a busca retorne um array vazio;

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**