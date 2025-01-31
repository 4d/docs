---
id: onFooterClick
title: On Footer Click
---

| Code | Puede ser llamado por                                                                                                 | Definición                                              |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Se produce un clic en el pie de una columna de list box |

## Descripción

Este evento está disponible para un objeto list box o columna de list box. Se genera cuando se produce un clic en el pie de una columna del list box. En este contexto, el comando `OBJECT Get pointer` devuelve un puntero a la variable del pie de página que se ha presionado. El evento se genera tanto para los clics izquierdos como para los derechos.

Puede probar el número de clics realizados por el usuario mediante el comando `Clickcount`.
