---
id: propertiesBackgroundAndBorder
title: Background and Border
---

## Alternate Background Color
Allows setting a different background color for odd-numbered rows/columns in a list box. By default, Automatic is selected: the column uses the alternate background color set at the list box level.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|alternateFill|color|any css value; "transparent"; "automatic"|

#### Objects Supported
[List Box](listbox_overview.md#overview)




## Background Color / Fill Color

Defines the background color of an object. 

In the case of a list box, by default *Automatic* is selected: the column uses the background color set at the list box level.

#### JSON Grammar


|Name|Data Type|Possible Values|
|---|---|---|
|fill|color|any css value; "transparent"; "automatic"|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)





## Background Color Expression

`Selection and collection type list boxes`

The name of an expression or variable (array variables cannot be used) to apply a custom background color to each row of the list box.

The expression or variable will be evaluated for each row displayed. You can use the Formula editor to specify an expression. To do this, click on the [...] button which appears when you select the area. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.  

>With collection or entity selection type list boxes, this property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowFillSource|string|The name of a an expression.|

#### Objects Supported
[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)







## Border Line Style / Dotted Line Type

Allows setting a standard style for the object border.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|borderStyle|text |"system", "none", "solid", "dotted", "raised", "sunken", "double"|

#### Objects Supported

[Picture Button](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)







## Hide extra blank rows

Controls the display of extra blank rows added at the bottom of a list box object. By default, 4D adds such extra rows to fill the empty area:

![](assets/en/FormObjects/property_hideExtraBlankRows1.png)

You can remove these empty rows by checking this option. The bottom of the list box object is then left blank:

![](assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideExtraBlankRows|boolean|"true", "false"|

#### Objects Supported

[List Box](listbox_overview.md#overview)





## Line Color

Designates the color of the object's lines.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke |color |any css value, "transparent", "automatic"|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) 







## Line Width

Designates the thickness of a line.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| strokeWidth|integer |integer or 0 for smallest width on a printed form|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) 







## Row Background Color Array

`Array type list boxes`

The name of an array or expression to apply a custom background color to each row of the list box.

The name of a Longint array must be entered. Each element of this array corresponds to a cell of the column, so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. If you want the cell to inherit the background color defined at the higher level (see Inheritance), pass the value -255 to the corresponding array element.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowFillSource|string|The name of a an array.|

#### Objects Supported
[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)






## Transparent

Font color used in the object.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke|color|any css value, "transparent", "automatic"|

#### Objects Supported
[List Box](listbox_overview.md#overview)
