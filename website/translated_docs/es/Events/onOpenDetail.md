---
id: onOpenDetail
title: On Open Detail
---

| Code | Puede ser llamado por                              | Definición                                                                                  |
| ---- | -------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 25   | Form - [List Box](FormObjects/listbox_overview.md) | The detail form associated with the output form or with the list box is about to be opened. |


## Descripción

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).


### Número de línea mostrado

The `Displayed line number` 4D command works with the `On Open Detail` form event. Devuelve el número de la línea que se está procesando mientras se visualiza en pantalla una lista de registros o de líneas de list box.
