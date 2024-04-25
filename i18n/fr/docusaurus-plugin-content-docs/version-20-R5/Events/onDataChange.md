---
id: onDataChange
title: On Data Change
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Définition                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 20   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) | Une donnée a été modifiée |

## Description

When the `On Data Change` event property is selected for an object, you can detect and handle the change of the data source value, using the `FORM Event` command.

L'événement est généré dès que la variable associée à l'objet est mise à jour en interne par 4D (c'est-à-dire, en général, lorsque la zone de saisie de l'objet perd le focus).

> With [subforms](FormObjects/subform_overview.md), the `On Data Change` event is triggered when the value of the variable of the subform object has been modified.
