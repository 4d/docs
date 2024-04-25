---
id: onOpenDetail
title: On Open Detail
---

| Code | Puede ser llamado por                              | Definición                                                                                                      |
| ---- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 25   | Form - [List Box](FormObjects/listbox_overview.md) | El formulario detallado asociado al formulario de salida o al list box está a punto de abrirse. |

## Descripción

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).

### Número de línea mostrado

The `Displayed line number` 4D command works with the `On Open Detail` form event. Devuelve el número de la línea que se está procesando mientras se visualiza en pantalla una lista de registros o de líneas de list box.
