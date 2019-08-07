---
id: propertiesText
title:Text 
---

## Bold

Sets the selected text to appear darker and heavier.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 

>This is normal text.<br>
**This is bold text.**

#### JSON Grammar

|Property|Data Type|Possible Values|
|---|---|---|
|fontWeight|text | "normal", "bold"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)






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
|---|---|---|
|fontFamily|string |CSS font family name  |

>4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)





## Font Color

This property specifies the color of the font used in the object. The color is specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can set this property via the Property List or via the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-RGB-COLORS.301-4128232.en.html) command. 

>This font is <span style="color:red">red</span>.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke|string | any css value, "transparent", "automatic"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)





## Horizontal Alignment

Horizontal location of text within the area that contains it.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAlign|string |"automatic", "right", "center", "justify", "left"|

#### Objects Supported

[Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [List Box](listbox_overview.md#overview)





## Italic

Sets the selected text to slant slightly to the right.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 

>This is normal text.<br>
*This is text in italics.*

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontStyle|string |"normal", "italic"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)





## Orientation

Modifies the orientation (rotation) of the text area.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAngle|string |0, 90, 180, 270|

#### Objects Supported

[Text Area](textAndGroupBox_overview.md#text)




## Row Font Color Array

An array or expression for managing row colors.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStrokeSource|string|Name of array or expression|

#### Objects Supported

[List Box](listbox_overview.md#overview)






## Row Style Array

An array or expression for managing row styles.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStyleSource|string|Name of array or expression.|

#### Objects Supported

[List Box](listbox_overview.md#overview)







## Underline
Sets the selected text to have a line running beneath it.

>This is normal text.<br>
>This is <span style="text-decoration:underline">underlined</span> text.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textDecoration|string|"normal", "underline"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)

























