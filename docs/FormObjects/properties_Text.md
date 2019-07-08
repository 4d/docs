---
id: propertiesText
title:Text 
---

## Font

This property specifies the name of font family used in the object. 

There are two types of font family names:

* *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
* *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this property via the Property List or you via the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.  


><span style="font-family:Times New Roman; font-size:20pt"> This is Times New Roman font.</span><br>
<span style="font-family:Calibri; font-size:20pt"> This is Calibri font.</span><br>
<span style="font-family:Papyrus; font-size:20pt"> This is Papyrus font.</span>


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|fontFamily|string |CSS font family name  |


>4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|


<hr>

## Bold

Sets the selected text to appear darker and heavier.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 

>This is normal text.<br>
**This is bold text.**


#### JSON Grammar

|Property|Data Type|Possible Values|
|---|:---:|---|
|fontWeight|text | "normal", "bold"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|


<hr>

## Italic

Sets the selected text to slant slightly to the right.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 


>This is normal text.<br>
*This is text in italics.*


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|fontStyle|string |"normal", "italic"|

#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|

<hr>

## Underline
Sets the selected text to have a line running beneath it.

>This is normal text.<br>
>This is <span style="text-decoration:underline">underlined</span> text.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---|
|textDecoration|string|<li>"normal"<li>"underline"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|


<hr>

## Font Color

This property specifies the color of the font used in the object. The color is specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"


You can set this property via the Property List or via the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-RGB-COLORS.301-4128232.en.html) command. 

>This font is <span style="color:red">red</span>.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|stroke|string | any css value, "transparent", "automatic"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Radio Button|[Radio Button](radio_overview.md) - [Collapse / Expand](radio_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure Button](radio_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Combo Box|[Combo Box](comboBox_overview.md)|
