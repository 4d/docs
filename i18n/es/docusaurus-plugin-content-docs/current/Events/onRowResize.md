---
id: onRowResize
title: On Row Resize
---

| Code | Puede ser llamado por                                   | Definición                                                       |
| ---- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| 60   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | La altura de una línea es modificada por un usuario con el ratón |

## Descripción

Este evento se genera cuando la altura de una línea es modificada por un usuario en un documento 4D View Pro. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propiedad   | Tipo         | Descripción                                                                                                  |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| code        | entero largo | 60                                                                                                           |
| description | text         | "On Row Resize"                                                                                              |
| objectName  | text         | Nombre del área 4D View Pro                                                                                  |
| sheetName   | text         | Nombre de la hoja del evento                                                                                 |
| range       | object       | Rango de celdas de las líneas cuyo alto ha cambiado                                                          |
| header      | boolean      | True si la línea de la columna de encabezado (primera línea) se redimensiona, si no false |

#### Ejemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```
