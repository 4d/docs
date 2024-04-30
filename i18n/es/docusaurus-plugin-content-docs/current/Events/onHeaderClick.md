---
id: onHeaderClick
title: On Header Click
---

| Code | Puede ser llamado por                                                                                                                                                       | Definición                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 42   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Se produce un clic en el encabezado de columna |

## Descripción

### List Box

Este evento se genera cuando se hace clic en el encabezado de una columna de list box. In this case, the `Self` command lets you find out the header of the column that was clicked.

If the [Sortable](FormObjects/properties_Action.md#sortable) property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the `$0` variable:

- If `$0` equals 0, a standard sort is performed.
- If `$0` equals -1, a standard sort is not performed and the header does not display the sort arrow. El desarrollador puede seguir generando una ordenación de columnas basada en criterios de ordenación personalizados utilizando el lenguaje 4D.

If the [Sortable](FormObjects/properties_Action.md#sortable) property is not selected for the list box, the `$0` variable is not used.

### 4D View Pro

Este evento se genera cuando el usuario hace clic en el encabezado de una columna o línea en un documento 4D View Pro. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propiedad   | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | entero largo | 42                                                                                                                                                                                                                                                                                                                                                                                                             |
| description | text         | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                              |
| objectName  | text         | Nombre del área 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                    |
| sheetName   | text         | Nombre de la hoja del evento                                                                                                                                                                                                                                                                                                                                                                                   |
| range       | object       | Rango de celdas                                                                                                                                                                                                                                                                                                                                                                                                |
| sheetArea   | entero largo | The sheet location where the event took place:<br/><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li> |

#### Ejemplo

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```
