---
id: propertiesDisplay
title:Display
---
## Alpha Format

This property controls the way the alphanumeric fields and variables appear when displayed or printed.



#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|---|
|textFormat|string|<li>"### ####"<li> "(###) ### ####"<li> "### ### ####"<li> "### ## ####"<li> "00000"<li> custom formats|


#### Objects Supported

|Category|Link|
|---|---|
|Pop-up Menu / Drop-down List |[Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) |
|Combo Box|[Combo Box](comboBox_overview.md)|

<hr>

## Number Format

This property controls the way numbers appear when displayed or printed.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|---|
|numberFormat|string|Numbers (including a decimal point or minus sign if necessary)|


#### Objects Supported

|Category|Link|
|---|---|
|Pop-up Menu / Drop-down List |[Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) |
|Combo Box|[Combo Box](comboBox_overview.md)|

<hr>

## Visibility

This property allows hiding the object in the Application environment. 

#### Buttons
Invisible button objects are designed to be placed on top of graphic objects. They remain invisible and do not highlight when clicked. It is the resulting action, such as the display of a different page, which indicates that it has been activated. 

#### List box
A list box row may be invisible when a form is loaded and visible after certain condition(s) are met. 


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|---|
|visibility|string|<li>"visible"<li>"hidden"<li> "selectedRows"<li> "unselectedRows"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) - [Picture](pictureButton_overview.md)|
|Picture Button|[Picture](pictureButton_overview.md)|
|Button Grid|[Button Grid](buttonGrid_overview.md)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure](checkBox_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|
|Picture Pop-up Menu|[Picture Pop-up Menu](picturePopupMenu_overview.md)|


<hr>

## Not rendered

The object is not drawn on the form.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|display| boolean|<li>"true" <li>"false"

#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Pop-up Menu / Drop-down List |[Pop-up Menu/Drop-down List](popupMenuDropdownList_overview.md) |

<hr>

## Three-States

Allows a check box object to accept a third state.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|threeState| boolean|<li>"true" <li>"false"

#### Objects Supported

|Category|Link|
|---|---|
|Check box|[Check box](checkbox_overview.md)|
