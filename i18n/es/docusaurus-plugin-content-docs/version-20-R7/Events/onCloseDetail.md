---
id: onCloseDetail
title: On Close Detail
---

| Code | Puede ser llamado por                                    | Definición                                                                 |
| ---- | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 26   | Formulario - [List Box](FormObjects/listbox_overview.md) | Ha dejado el formulario detallado y está volviendo al formulario de salida |

## Descripción

El evento `On Close Detail` puede utilizarse en los siguientes contextos:

- **Formularios de salida**: el formulario detallado se cierra y el usuario vuelve al formulario listado. Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.
- List box de [**tipo de selección**](FormObjects/listbox_overview.md#selection-list-boxes): este evento se genera cuando un registro mostrado en el [formulario detallado](FormObjects/properties_ListBox.md#detail-form-name) asociado a un list box de tipo de selección está a punto de cerrarse (independientemente de que el registro se haya modificado o no).
