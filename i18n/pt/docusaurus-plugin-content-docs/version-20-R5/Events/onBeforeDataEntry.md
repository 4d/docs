---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Pode ser chamado por                                                                                              | Definição                                                            |
| ---- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Uma célula de um list box está prestes a mudar para o modo de edição |

## Descrição

Esse evento é gerado imediatamente antes de uma célula da caixa de listagem ser editada (antes de o cursor de entrada ser exibido). Esse evento permite que o desenvolvedor, por exemplo, exiba um texto diferente, dependendo de o usuário estar no modo de exibição ou de edição.

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- Se, no contexto desse evento, $0 for estabelecido a -1, a célula é considerada como não editável. If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively.
- Se $0 não for -1 (como padrão $0 é 0), a célula for editável e trocar para o modo edição.

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.
