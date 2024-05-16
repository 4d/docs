---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Pode ser chamado por                                                                                                  | Definição                                                            |
| ---- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma célula de um list box está prestes a mudar para o modo de edição |

## Descrição

Esse evento é gerado imediatamente antes de uma célula da caixa de listagem ser editada (antes de o cursor de entrada ser exibido). Esse evento permite que o desenvolvedor, por exemplo, exiba um texto diferente, dependendo de o usuário estar no modo de exibição ou de edição.

Cuando el cursor llega a la celda, se genera el evento `On Before Data Entry` en el list box o método de la columna.

- Se, no contexto desse evento, $0 for estabelecido a -1, a célula é considerada como não editável. Si el evento se generó después de presionar **Tab** o **Mayús+Tab**, el foco pasa a la siguiente celda o a la anterior, respectivamente.
- Se $0 não for -1 (como padrão $0 é 0), a célula for editável e trocar para o modo edição.

Ver también la sección [Gestión de entradas](FormObjects/listbox_overview.md#managing-entry).
