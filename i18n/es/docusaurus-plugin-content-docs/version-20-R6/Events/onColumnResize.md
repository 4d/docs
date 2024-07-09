---
id: onColumnResize
title: On Column Resize
---

| Code | Puede ser llamado por                                                                                                                                                                     | Definición                                                                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 33   | [Área 4D View Pro](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [Columna de List Box ](../FormObjects/listbox_overview.md#list-box-columns) | El ancho de una columna es modificado directamente por el usuario o en consecuencia de un redimensionamiento de la ventana del formulario |

## Descripción

### List Box

Este evento se genera cuando el ancho de una columna en el list box es modificado por un usuario. El evento se activa "en directo", _es decir_, se envía continuamente durante el evento, mientras se redimensiona el list box o la columna en cuestión. Este redimensionamiento es realizado manualmente por un usuario, o puede ocurrir como resultado de que el list box y su(s) columna(s) sean redimensionados junto con la propia ventana del formulario (ya sea que el formulario sea redimensionado manualmente

> El evento `On Column Resize` no se activa cuando se redimensiona una [falsa columna](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column).

### 4D View Pro

Este evento se genera cuando el ancho de una columna es modificado por un usuario. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propiedad   | Tipo         | Descripción                                                                                                  |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| code        | entero largo | On Column Resize                                                                                             |
| description | text         | "On Column Resize"                                                                                           |
| objectName  | text         | Nombre del área 4D View Pro                                                                                  |
| sheetName   | text         | Nombre de la hoja del evento                                                                                 |
| range       | object       | Rango de celdas de las columnas cuyo ancho ha cambiado                                                       |
| header      | boolean      | True si la columna de encabezado de línea (primera columna) se redimensiona, si no, false |

#### Ejemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```
