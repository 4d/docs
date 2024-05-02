---
id: onFooterClick
title: On Footer Click
---

| Code | Puede ser llamado por                                                                                             | Definición                                              |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Se produce un clic en el pie de una columna de list box |

## Descripción

Este evento está disponible para un objeto list box o columna de list box. Se genera cuando se produce un clic en el pie de una columna del list box. In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. El evento se genera tanto para los clics izquierdos como para los derechos.

You can test the number of clicks made by the user by means of the `Clickcount` command.
