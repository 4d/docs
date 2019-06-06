---
id: property_titlePicturePosition
title: Property: Title / Picture Position
---



This property allows modifying the relative location of the button title in relation to the associated icon. This property has no effect when the button contains only a title (no associated picture) or a picture (no title). By default, when a 3D button contains a title and a picture, the text is placed below the picture . 

Here are the results using the various options for this property:

|Option|Description|Example|
|---|---|---|
|**Left**|The text is placed to the left of the icon. The contents of the button are aligned to the right.|![](../../assets/en/property_titlePosition_left.en.png)|
|**Top**|The text is placed above the icon. The contents of the button are centered.| ![](../../assets/en/property_titlePosition_top.png)   |
|**Right**|The text is placed to the right of the icon. The contents of the button are aligned to the left.|![](../../assets/en/property_titlePosition_right.png) |
|**Bottom**|The text is placed below the icon. The contents of the button are centered.|![](../../assets/en/property_titlePosition_bottom.png) |
|**Centered**|The text of the icon is centered vertically and horizontally in the button. This parameter is useful, for example, for text included in an icon.|![](../../assets/en/property_titlePosition_centered.png) |

<hr>

### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|left|integer|minimum: 0|
|top|integer|minimum: 0|
|right|integer|minimum: 0|
|bottom|integer|minimum: 0|
|middle|integer|minimum: 0|

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 
