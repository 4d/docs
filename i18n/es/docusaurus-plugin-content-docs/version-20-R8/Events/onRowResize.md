---
id: onRowResize
title: On Row Resize
---

| Code | Puede ser llamado por                                   | Definición                                                       |
| ---- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| 60   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | La altura de una línea es modificada por un usuario con el ratón |

## Descripción

Este evento se genera cuando la altura de una línea es modificada por un usuario en un documento 4D View Pro. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

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
