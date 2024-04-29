---
id: onCloseDetail
title: On Close Detail
---

| Code | Peut être appelé par                               | Définition                                                                        |
| ---- | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| 26   | Form - [List Box](FormObjects/listbox_overview.md) | Vous avez quitté le formulaire détaillé et vous retournez au formulaire de sortie |

## Description

The `On Close Detail` event can be used in the following contexts:

- **Output forms**: the detail form is closed and the user goes back to the list form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record displayed in the [detail form](FormObjects/properties_ListBox.md#detail-form-name) associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).
