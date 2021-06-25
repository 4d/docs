---
id: onColumnResize
title: On Column Resize
---

| Code | Puede ser llamado por                                                                                                                                                       | Definición                                                                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 33   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | The width of a column is modified directly by the user or consequently to a form window resize |


## Descripción

### List Box

This event is generated when the width of a column in the list box is modified by a user. The event is triggered "live", *i.e.*, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column) is resized.

### 4D View Pro

This event is generated when the width of a column is modified by a user. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedad  | Tipo         | Descripción                                                         |
| ----------- | ------------ | ------------------------------------------------------------------- |
| code        | entero largo | On Column Resize                                                    |
| description | texto        | "On Column Resize"                                                  |
| objectName  | texto        | Nombre del área 4D View Pro                                         |
| sheetName   | texto        | Nombre de la hoja del evento                                        |
| range       | objeto       | Cell range of the columns whose widths have changed                 |
| header      | booleano     | True if the row header column (first column) is resized, else false |

#### Ejemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```