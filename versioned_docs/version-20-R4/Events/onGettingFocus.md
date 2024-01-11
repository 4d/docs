---
id: onGettingFocus
title: On Getting focus
---

|Code|Can be called by|Definition|  
|---|---|---|
|15|[4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Web area](FormObjects/webArea_overview.md)|A form object is getting the focus|


## Description

The `On Getting Focus` event, along with the [`On losing Focus`](onLosingFocus.md) event, are used to detect and handle the change of focus for [focusable](FormObjects/properties_Entry.md#focusable) objects.

With [subform objects](FormObjects/subform_overview.md), this event is generated in the method of the subform object when they it is checked. It is sent to the form method of the subform, which means, for example, that you can manage the display of navigation buttons in the subform according to the focus. Note that subform objects can themselves have the focus.
