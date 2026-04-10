---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Pode ser chamado por                                                                                                 | Definição                                                            |
| ---- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma célula de um list box está prestes a mudar para o modo de edição |


## Descrição

Esse evento é gerado imediatamente antes de uma célula da caixa de listagem ser editada (antes de o cursor de entrada ser exibido). Esse evento permite que o desenvolvedor, por exemplo, exiba um texto diferente, dependendo de o usuário estar no modo de exibição ou de edição.

Quando o cursor chega à célula, o evento `On Before Data Entry` é gerado na caixa de listagem ou no método de coluna.

- Se, no contexto desse evento, $0 for estabelecido a -1, a célula é considerada como não editável. Se o evento for gerado depois de  **Tab** ou **Shift+Tab** ter sido pressionado, o foco vai para a próxima célula ou para a célula anterior, respectivamente.
- Se $0 não for -1 (como padrão $0 é 0), a célula for editável e trocar para o modo edição.

Ver também a secção [Gestão da entrada](FormObjects/listbox_overview.md#managing-entry).