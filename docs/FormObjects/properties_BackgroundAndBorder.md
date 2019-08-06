---
id: propertiesBackgroundAndBorder
title: Background and Border
---

## Border Line Style / Dotted Line Type

Allows setting a standard style for the object border.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|borderStyle|text |"system", "none", "solid", "dotted", "raised", "sunken", "double"|


#### Objects Supported

[Picture Button](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Hierarchical List](list_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview)



## Fill Color

Defines the background color of an object.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fill|color |any css value, "transparent", "automatic"|


#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) - [Hierarchical List](list_overview.md#overview)


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






