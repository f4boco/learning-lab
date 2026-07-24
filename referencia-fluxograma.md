# Unicode Box Drawing para Fluxogramas

Este arquivo serve como referência rápida para criar fluxogramas em texto utilizando caracteres Unicode. Basta copiar os símbolos e montar os diagramas diretamente em arquivos `.md` ou `.txt`.

---

# Regras básicas

* Mantenha a mesma largura para caixas semelhantes.
* Use espaços para alinhar os elementos.
* Sempre conecte as caixas com linhas verticais (`│`) e horizontais (`─`).
* Use setas (`▼`, `▲`, `►`, `◄`) para indicar o fluxo.
* Escreva **Sim** e **Não** próximos às ramificações de decisões.

---

# Símbolos

## Linhas

```text
─
│
```

---

## Cantos

```text
┌ ┐
└ ┘
```

---

## Junções

```text
├ ┤
┬ ┴
┼
```

---

## Cantos arredondados

```text
╭ ╮
╰ ╯
```

---

## Setas

```text
▲
▼
◄
►
```

---

## Losango (Decisão)

```text
╱
╲
```

---

## Outros úteis

```text
○
●
◆
◇
```

---

# Blocos prontos

## Início / Fim

```text
╭──────────────╮
│   INÍCIO     │
╰──────────────╯
```

ou:

```text
+------------+
|   INÍCIO   |
+------------+
```

```text
╭──────────────╮
│     FIM      │
╰──────────────╯
```

---

## Processo

```text
┌──────────────────────────┐
│ Fazer alguma operação    │
└──────────────────────────┘
```

---

## Entrada / Saída

```text
   ┌───────────────┐
  / Ler número    /
 /_______________/
 ```

 ou:

```text
╱──────────────────────────╲
│ Ler ou Mostrar dados     │
╲──────────────────────────╱
```

---

## Decisão

```text
          ╱──────────────╲
         ╱  Condição ?    ╲
         ╲                ╱
          ╲──────────────╱
```

---

# Fluxo

Vertical

```text
│
▼
```

Horizontal

```text
────────►
```

Retorno

```text
▲
│
```

---

# Ramificação

```text
            ╱────────────╲
           ╱  x > 10 ?    ╲
           ╲              ╱
            ╲──────┬─────╱
                   │
        ┌──────────┴──────────┐
        │                     │
      Sim                    Não
        │                     │
        ▼                     ▼
```

---

# Loop

```text
    ┌───────────┐
    │ Condição? │
    └───┬─────┬─┘
      Sim     Não
       │        │
       ▼        ▼
┌─────────────┐ ┌─────────┐
│ Executa     │ │   Fim   │
│ o bloco     │ └─────────┘
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Atualiza    │
└──────┬──────┘
       │
       └──────────────► (volta para "Condição?")
```

---

# Dicas

* Use uma fonte monoespaçada (Consolas, Cascadia Code, JetBrains Mono, Fira Code).
* Nunca misture tabs e espaços.
* Centralize o texto dentro das caixas quando possível.
* Para diagramas grandes, desenhe primeiro o fluxo principal e depois adicione as ramificações.
* No VS Code, ative **Render Whitespace** (`View → Appearance → Render Whitespace`) para facilitar o alinhamento.

---

# Símbolos para copiar rapidamente

```text
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼
╭ ╮ ╰ ╯
▲ ▼ ◄ ►
╱ ╲
○ ● ◆ ◇
```