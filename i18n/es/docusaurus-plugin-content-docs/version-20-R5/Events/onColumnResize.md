---
id: onColumnResize
title: On Column Resize
---

| Code | Puede ser llamado por                                                                                                                                                                | Definición                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 33   | [4D View Pro Area](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | El ancho de una columna es modificado directamente por el usuario o en consecuencia de un redimensionamiento de la ventana del formulario |

## Descripción

### List Box

Este evento se genera cuando el ancho de una columna en el list box es modificado por un usuario. The event is triggered "live", _i.e._, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column) is resized.

### 4D View Pro

Este evento se genera cuando el ancho de una columna es modificado por un usuario. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

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
