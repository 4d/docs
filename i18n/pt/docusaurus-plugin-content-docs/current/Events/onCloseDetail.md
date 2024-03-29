---
id: onCloseDetail
title: On Close Detail
---

| Code | Pode ser chamado por                                     | Definição                                                       |
| ---- | -------------------------------------------------------- | --------------------------------------------------------------- |
| 26   | Formulário - [List Box](FormObjects/listbox_overview.md) | Deixou o formulário detalhado e regressa ao formulário de saída |


## Descrição

O evento `On Close Detail` pode ser usado nos seguintes contextos:

- **Output forms**: the detail form is closed and the user goes back to the list form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record displayed in the [detail form](FormObjects/properties_ListBox.md#detail-form-name) associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).

