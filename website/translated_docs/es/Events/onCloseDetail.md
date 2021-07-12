---
id: onCloseDetail
title: On Close Detail
---

| Code | Puede ser llamado por                              | Definición                                                     |
| ---- | -------------------------------------------------- | -------------------------------------------------------------- |
| 26   | Form - [List Box](FormObjects/listbox_overview.md) | You left the detail form and are going back to the output form |


## Descripción

The `On Close Detail` event can be used in the following contexts:

- **Output forms**: the detail form is closed and the user goes back to the list form. Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.
- List box [**de tipo selección**](FormObjects/listbox_overview.md#selection-list-boxes): este evento se genera cuando un registro mostrado en el [formulario detallado](FormObjects/properties_ListBox.md#detail-form-name) asociado a un list box de tipo selección está a punto de cerrarse (independientemente de que el registro se haya modificado o no).

