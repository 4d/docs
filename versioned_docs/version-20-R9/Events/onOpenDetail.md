---
id: onOpenDetail
title: On Open Detail
---

|Code|Can be called by|Definition|  
|---|---|---|
|25|Form - [List Box](FormObjects/listbox_overview.md)|The detail form associated with the output form or with the list box is about to be opened.|


## Description

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with **table forms**.  
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).


### Displayed line number

The `Displayed line number` 4D command works with the `On Open Detail` form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
