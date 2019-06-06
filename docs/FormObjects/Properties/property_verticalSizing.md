---
id: property_verticalSizing
title: Property: Vertical Sizing
---
This property specifies if the vertical size of an object should be moved or resized when a user resizes the form.

You can enable automatic resizing or repositioning in the Property List. There are three options which you can assign :

|Option|	Result|
|---|---|
|Grow|The same percentage is applied to the object’s height when the user resizes the width of the window, 
|Move|The object is moved the same amount up or down as the height increase when the user resizes the width of the window, 
|Fixed|The object remains stationary when the form is resized

>**Note** <br>
This property works in conjunction with the [Horizontal Sizing](property_horizontalSizing) property.


<hr>



### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|sizingY|string|<li>"grow"<li>"move"<li>"fixed"|

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 

