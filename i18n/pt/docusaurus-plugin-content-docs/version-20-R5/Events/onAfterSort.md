---
id: onAfterSort
title: On After Sort
---

| Code | Pode ser chamado por                                                                                                 | Definição                                                                 |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma ordenação standard acaba de ser efectuada numa coluna de um list box. |


## Descrição

Esse evento é gerado logo após a execução de uma classificação padrão (*, ou seja,* , NÃO é gerado se $0 retornar -1 no evento [`On Header Click`](onHeaderClick.md)). Esse mecanismo é útil para armazenar as direções da última classificação realizada pelo usuário. Nesse caso, o comando `Self` retorna um ponteiro para a variável do cabeçalho da coluna classificada.
