---
id: onDataChange
title: On Data Change
---

|Code|Can be called by|Definition|  
|---|---|---|
|20|[4D Write Pro area](FormObjects/writeProArea_overview) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md)|An object data has been modified|


## Description

When the `On Data Change` event property is selected for an object, you can detect and handle the change of the data source value, using the `FORM Event` command. 

The event is generated as soon as the variable associated with the object is updated internally by 4D (i.e., in general, when the entry area of the object loses the focus).

> With [subforms](FormObjects/subform_overview.md), the `On Data Change` event is triggered when the value of the variable of the subform object has been modified.

