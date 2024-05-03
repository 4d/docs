---
id: onSelectionChange
title: On Selection Change
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                 | Definición                            |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 31   | [4D View Pro area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | La selección en el objeto se modifica |

## Descripción

Este evento puede generarse en diferentes contextos.

### 4D View Pro

Se modifica la selección actual de líneas o columnas. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propiedad     | Tipo         | Descripción                      |
| ------------- | ------------ | -------------------------------- |
| code          | entero largo | 31                               |
| description   | text         | "On Selection Change"            |
| objectName    | text         | Nombre del área 4D View Pro      |
| sheetName     | text         | Nombre de la hoja del evento     |
| oldSelections | object       | Rango de celdas antes del cambio |
| newSelections | object       | Rango de celdas luego del cambio |

#### Ejemplo

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### Formulario listado

El registro actual o la selección actual de líneas se modifica en un formulario listado.

### Lista jerárquica

Este evento se genera cada vez que se modifica la selección en la lista jerárquica tras un clic del ratón o una presión del teclado.

### Input & 4D Write Pro

La selección de texto o la posición del cursor en el área se modifica tras un clic o una presión de tecla.

### List box

Este evento se genera cada vez que se modifica la selección actual de líneas o de columnas del list box.
