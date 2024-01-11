---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Pode ser chamado por                                                                                                 | Definição                                                            |
| ---- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma célula de um list box está prestes a mudar para o modo de edição |


## Descrição

This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode.

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- Se, no contexto desse evento, $0 for estabelecido a -1, a célula é considerada como não editável. Se o evento for gerado depois de  **Tab** ou **Shift+Tab** ter sido pressionado, o foco vai para a próxima célula ou para a célula anterior, respectivamente.
- Se $0 não for -1 (como padrão $0 é 0), a célula for editável e trocar para o modo edição.

Ver também a secção [Gestão da entrada](FormObjects/listbox_overview.md#managing-entry).