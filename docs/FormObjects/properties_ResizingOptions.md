---
id: propertiesResizingOptions
title:Resizing Option Properties
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
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) - [Picture](pictureButton_overview.md)|

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
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) - [Picture](pictureButton_overview.md)|
