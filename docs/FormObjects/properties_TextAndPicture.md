---
id: propertiesTextAndPicture
title:Text and Picture Properties
---

## Button Style

This property allows setting the general appearance of the button. The style also plays a part in the availability of certain options. 


### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|style|text | <li>"regular", <li>"toolbar", <li>"bevel", <li>"roundedBevel", <li>"gradientBevel", <li>"texturedBevel", <li>"office", <li>"help", <li>"circular", <li>"disclosure", <li>"roundedDisclosure", <li>"custom"|


### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Help button](button_overview.md#help)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)| 

<hr>
## Picture pathname

A picture of a button can come from four different sources: Variable, Picture Library, Resource File or File. You can enter the name (if the picture is a variable or comes from the picture library), the number (if the picture comes from the picture library or a resource file) or the pathname (if the picture comes from a picture file) of the picture. In the case of a pathname, it must be relative to the **Resources** folder of the database (see [Using static pictures](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-static-pictures.300-4163735.en.html)).

### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|icon|picture |<li>absolute path <li>relative path|


### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)|[Picture button](pictureButton_overview.md)|

<hr>

## Number of States

This property sets the exact number of states present in the picture used as the icon for a button. In general, a button icon includes 4 states: active, clicked, mouse over and inactive. 

Each state is represented by a different picture. In the source picture, the states must be stacked vertically: 

![](assets/en/property_numberOfStates.png)


### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|iconFrames|integer |minimum: 1|



### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)| 

<hr>

## Background pathname

This property allows you to set the picture that will be drawn in the background of the button. As with icons, you can indicate whether the picture comes from a variable, picture library, resource file or disk file.  


### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|customBackgroundPicture |picture |absolute or relative path. Must be used in conjunction with the style property with the "custom" option.|


### Objects Supported

|Category|Link| 
|---|---|
|Button|[Custom button](button_overview.md#custom)| 

<hr>

## Icon Offset

This property allows setting a custom offset value in pixels, which will be used when the button is clicked

The title of the button will be shifted to the right and toward the bottom for the number of pixels entered. This allows applying a customized 3D effect when the button is clicked.

### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|customOffset|integer |minimum: 0|


### Objects Supported

|Category|Link| 
|---|---|
|Button|[Custom button](button_overview.md#custom)| 

<hr>

## Horizontal Margin

This property allows setting the size (in pixels) of the horizontal margins of the button. This margin delimits the area that the button icon and title must not surpass.

This parameter is useful, for example, when the background picture contains borders: 

|With / Without | Example |
|---|---|
|Without margin|![](assets/en/FormObjects/property_horizontalMargin1.png)|
|With 13-pixel margin|![](assets/en/FormObjects/property_horizontalMargin2.png)|

>**Note**<br>
>This property works in conjunction with the **Vertical Margin** property.


### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|rightMargin|integer |minimum: 0|


### Objects Supported

|Category|Link| 
|---|---|
|Button|[Custom button](button_overview.md#custom)| 

<hr>


## Vertical Margin

This property allows setting the size (in pixels) of the vertical margins of the button. This margin delimits the area that the button icon and title must not surpass.

This parameter is useful, for example, when the background picture contains borders: 

|With / Without | Example |
|---|---|
|Without margin|![](assets/en/FormObjects/property_horizontalMargin1.png)|
|With 13-pixel margin|![](assets/en/FormObjects/property_horizontalMargin2.png)|

>**Note**<br>
>This property works in conjunction with the **Horizontal Margin** property.


### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|bottomMargin|integer |minimum: 0|


### Objects Supported

|Category|Link| 
|---|---|
|Button|[Custom button](../Buttons/button_overview.md#custom)| 

<hr>

## Title/Picture Position

This property allows modifying the relative location of the button title in relation to the associated icon. This property has no effect when the button contains only a title (no associated picture) or a picture (no title). By default, when a 3D button contains a title and a picture, the text is placed below the picture . 

Here are the results using the various options for this property:

|Option|Description|Example|
|---|---|---|
|**Left**|The text is placed to the left of the icon. The contents of the button are aligned to the right.|![](assets/en/FormObjects/property_titlePosition_left.en.png)|
|**Top**|The text is placed above the icon. The contents of the button are centered.| ![](assets/en/FormObjects/property_titlePosition_top.png)   |
|**Right**|The text is placed to the right of the icon. The contents of the button are aligned to the left.|![](assets/en/FormObjects/property_titlePosition_right.png) |
|**Bottom**|The text is placed below the icon. The contents of the button are centered.|![](assets/en/FormObjects/property_titlePosition_bottom.png) |
|**Centered**|The text of the icon is centered vertically and horizontally in the button. This parameter is useful, for example, for text included in an icon.|![](assets/en/FormObjects/property_titlePosition_centered.png) |


### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|left|integer|minimum: 0|
|top|integer|minimum: 0|
|right|integer|minimum: 0|
|bottom|integer|minimum: 0|
|middle|integer|minimum: 0|


### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](button_overview.md#regular)|[Toolbar button](button_overview.md#toolbar)|[Bevel button](button_overview.md#bevel)|[Rounded Bevel button](button_overview.md#Rounded-bevel)|[OS X Gradient button](button_overview.md#os-x-gradient)|
||[OS X Textured button](button_overview.md#os-x-textured)|[Office XP button](button_overview.md#office-XP)|[Help button](button_overview.md#help)|[Circle button](button_overview.md#circle)|[Custom button](button_overview.md#custom)| 
