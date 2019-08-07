---
id: propertiesBackgroundAndBorder
title: Background and Border
---

## Alternate Background Color
Allows setting a different background color for odd-numbered rows/columns in a list box.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|alternateFill|color|any css value; "transparent"; "automatic"|

#### Objects Supported
[List Box](listbox_overview.md#overview)




## Background Color / Fill Color

Defines the background color of an object.

#### JSON Grammar


|Name|Data Type|Possible Values|
|---|---|---|
|fill|color|any css value; "transparent"; "automatic"|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)




## Border Line Style / Dotted Line Type

Allows setting a standard style for the object border.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|borderStyle|text |"system", "none", "solid", "dotted", "raised", "sunken", "double"|

#### Objects Supported

[Picture Button](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)







## Hide extra blank rows

Deactivates the visibility of extra, empty rows.	

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

The name of an array or expression to apply a custom background color to each row of the list box.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowFillSource|string|RGB color values|

#### Objects Supported
[List Box](listbox_overview.md#overview)






## Transparent

Font color used in the object.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke|color|any css value, "transparent", "automatic"|

#### Objects Supported
[List Box](listbox_overview.md#overview)
