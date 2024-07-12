---
id: onOpenDetail
title: On Open Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                                   |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 25   | Formulario - [List Box](FormObjects/listbox_overview.md) | The detail form associated with the output form or with the list box is about to be opened. |

## Descrição

El evento `On Open Detail` puede utilizarse en los siguientes contextos:

- **Formularios de salida**: un registro está a punto de ser mostrado en el formulario detallado asociado al formulario de salida. Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).

### Número de linha apresentado

El comando 4D `Número de línea mostrado` funciona con el evento formulario `On Open Detail`. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
