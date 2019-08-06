---
id: propertiesAppearance
title:Appearance 
---

## Default Button

The default button property modifies a button's appearance in order to indicate the recommended choice to the user. The difference in appearance depends on the OS. 

|Windows|macOS|
|:---:|:---:|
|The default button has a blue outline. <p> ![](assets/en/FormObjects/property_defaultButtonWindows.en.png)|The default buttons are blue.<p>![](assets/en/FormObjects/property_defaultButtonmacOS.en.png)|

>There can only be one default button per form page.



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
defaultButton|boolean|"true", "false |



#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)



## Tab Control Direction

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS, when the platform interface is “System.” You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows or with the “Printing” platform appearance, they automatically return to the standard direction (top).



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
labelsPlacement|boolean|"top", "bottom" |



#### Objects Supported

[Tab Control](splitterTabControlOverview#tab-controls)



## Hide focus rectangle  

During execution, a field or any enterable object is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by checking the Hide focus rectangle option. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideFocusRing|boolean|"true", "false |



#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview)



## Horizontal Scroll Bar  

A tool allowing the user to move the viewing area to the left or right.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarHorizontal|boolean|"visible", "hidden", "automatic"|



#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview)



## Vertical Scroll Bar  

A tool allowing the user to move the viewing area up and down.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarVertical|boolean|"visible", "hidden", "automatic"|



#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview)