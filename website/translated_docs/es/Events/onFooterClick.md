---
id: onFooterClick
title: On Footer Click
---

| Code | Puede ser llamado por                                                                                                 | Definición                                        |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | A click occurs in the footer of a list box column |


## Descripción

This event is available for a list box or list box column object. It is generated when a click occurs in the footer of a list box column. In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. El evento se genera tanto para los clics izquierdos como para los derechos.

Puede probar el número de clics realizados por el usuario mediante el comando `Clickcount`.
