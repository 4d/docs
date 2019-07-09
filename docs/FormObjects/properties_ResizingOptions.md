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
|:---:|:---:|---|
|sizingX|string |<li>"grow"<li>"move"<li>"fixed"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) |
|Picture Button|[Picture](pictureButton_overview.md)|
|Button Grid|[Button Grid](buttonGrid_overview.md)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure](checkBox_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|
|Picture Pop-up Menu|[Picture Pop-up Menu](picturePopupMenu_overview.md)|

<hr>

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
|:---|:---:|:---:|
|sizingY|string|<li>"grow"<li>"move"<li>"fixed"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Picture Button|[Picture](pictureButton_overview.md)|
|Button Grid|[Button Grid](buttonGrid_overview.md)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure](checkBox_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|
|Picture Pop-up Menu|[Picture Pop-up Menu](picturePopupMenu_overview.md)|


<hr>

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
|splitterMode|string|<li>"resize"<li>"move"|


#### Objects Supported

|Category|Link|
|---|---|
|Splitter / Tab Control|[Splitter](splitterTabControlOverview#splitters)|