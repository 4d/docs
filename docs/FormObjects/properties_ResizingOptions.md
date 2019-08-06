---
id: propertiesResizingOptions
title:Resizing Options 
---

## Horizontal Sizing

This property specifies if the horizontal size of an object should be moved or resized when a user resizes the form.

You can enable automatic resizing or repositioning in the Property List. There are three options which you can assign :

|Option|	Result|
|---|---|
|Grow|The same percentage is applied to the object’s width when the user resizes the width of the window, 
|Move|The object is moved the same amount left or right as the width increase when the user resizes the width of the window, 
|Fixed|The object remains stationary when the form is resized

>This property works in conjunction with the [Vertical Sizing](#vertical-sizing) property.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|sizingX|string |"grow", "move", "fixed"|


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview)



## Vertical Sizing

This property specifies if the vertical size of an object should be moved or resized when a user resizes the form.

You can enable automatic resizing or repositioning in the Property List. There are three options which you can assign :

|Option|	Result|
|---|---|
|Grow|The same percentage is applied to the object’s height when the user resizes the width of the window, 
|Move|The object is moved the same amount up or down as the height increase when the user resizes the width of the window, 

|Fixed|The object remains stationary when the form is resized

>This property works in conjunction with the [Horizontal Sizing](#horizontal-sizing) property.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|sizingY|string|<li>"grow"<li>"move"<li>"fixed"|


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview)



## Pusher

When a splitter object has this property, other objects to its right (vertical splitter) or below it (horizontal splitter) are pushed at the same time as the splitter, with no stop. 

Here is the result of a “pusher” splitter being moved:

![](assets/en/FormObjects/splitter_pusher1.png)

When this property is not applied to the splitter, the result is as follows:

![](assets/en/FormObjects/splitter_pusher2.png)

This property is checked by default for new databases.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|splitterMode|string|"resize", "move"|


#### Objects Supported

[Splitter](splitterTabControlOverview#splitters)