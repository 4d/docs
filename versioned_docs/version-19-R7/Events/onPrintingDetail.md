---
id: onPrintingDetail
title: On Printing Detail
---

|Code|Can be called by|Definition|  
|---|---|---|
|23|[4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md)|The form’s detail area is about to be printed|


## Description

The `On Printing Detail` event can only be used in the context of an **output form**. It is triggered when the detail area the output form is about to be printed, for example following a call to the `Print form` command.

The `Print form` command generates only one `On Printing Detail` event for the form method.

> This event cannot be selected for project forms, it is only available with **table forms**.

