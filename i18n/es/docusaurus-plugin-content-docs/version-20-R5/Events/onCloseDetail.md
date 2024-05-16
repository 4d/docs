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
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record displayed in the [detail form](FormObjects/properties_ListBox.md#detail-form-name) associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).
