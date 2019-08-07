---
id: propertiesDisplay
title:Display
---
## Alpha Format

This property controls the way the alphanumeric fields and variables appear when displayed or printed.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textFormat|string|"### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", custom formats|

#### Objects Supported

[Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md)





## Not rendered

The object is not drawn on the form.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|display| boolean|"true", "false"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) 






## Number Format

This property controls the way numbers appear when displayed or printed.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|numberFormat|string|Numbers (including a decimal point or minus sign if necessary)|

#### Objects Supported

[Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md)






## Three-States

Allows a check box object to accept a third state.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|threeState| boolean|"true", "false"

#### Objects Supported

[Check box](checkbox_overview.md)






## Visibility

This property allows hiding the object in the Application environment. 

#### Buttons
Invisible button objects are designed to be placed on top of graphic objects. They remain invisible and do not highlight when clicked. It is the resulting action, such as the display of a different page, which indicates that it has been activated. 

#### List box
A list box row may be invisible when a form is loaded and visible after certain condition(s) are met. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|visibility|string|"visible", "hidden", "selectedRows", "unselectedRows"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)








