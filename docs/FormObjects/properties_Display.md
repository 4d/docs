---
id: propertiesDisplay
title:Display Properties
---

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

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Help button](button_overview.md#help)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)| 
||[Picture button](pictureButton_overview.md)|

<hr>

## Not rendered

The object is not drawn on the form.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|display| boolean|<li>"true" <li>"false"

#### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Help button](button_overview.md#help)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)| 


