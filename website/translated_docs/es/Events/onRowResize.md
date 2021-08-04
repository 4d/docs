---
id: onRowResize
title: On Row Resize
---

| Code | Puede ser llamado por                                   | Definición                                               |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Descripción

This event is generated when the height of a row is modified by a user in a 4D View Pro document. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propriedad  | Tipo         | Descripción                                                                               |
| ----------- | ------------ | ----------------------------------------------------------------------------------------- |
| code        | entero largo | 60                                                                                        |
| description | texto        | "On Row Resize"                                                                           |
| objectName  | texto        | Nombre del área 4D View Pro                                                               |
| sheetName   | texto        | Nombre de la hoja del evento                                                              |
| range       | objeto       | Rango de celdas de las líneas cuyo alto ha cambiado                                       |
| header      | booleano     | True si la línea de la columna de encabezado (primera línea) se redimensiona, si no false |

#### Ejemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```