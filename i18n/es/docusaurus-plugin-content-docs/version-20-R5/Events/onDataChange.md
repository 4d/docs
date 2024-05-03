---
id: onDataChange
title: On Data Change
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Definición                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 20   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) | Se han modificado los datos de un objeto |

## Descripción

When the `On Data Change` event property is selected for an object, you can detect and handle the change of the data source value, using the `FORM Event` command.

El evento se genera en cuanto la variable asociada al objeto es actualizada internamente por 4D (es decir, en general, cuando la zona de entrada del objeto pierde el foco).

> With [subforms](FormObjects/subform_overview.md), the `On Data Change` event is triggered when the value of the variable of the subform object has been modified.
