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






## Hide focus rectangle  

During execution, a field or any enterable object is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideFocusRing|boolean|"true", "false |

#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md)





## Hide selection highlight
`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to define their appearance programmatically. 

>By default, this option is not enabled.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideSystemHighlight|boolean|"true", "false"|

#### Objects Supported



[List Box](listbox_overview.md#overview)





## Horizontal Scroll Bar  

An interface tool allowing the user to move the viewing area to the left or right. 

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”

Available values: 
- Yes: The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame). 
- No: The scrollbar is never visible.
- Automatic: The scrollbar appears automatically whenever necessary and the user can enter text larger than the object width.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarHorizontal|boolean|"visible", "hidden", "automatic"|

#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md)





## Tab Control Direction

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS. You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows, they automatically return to the standard direction (top).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
labelsPlacement|boolean|"top", "bottom" |

#### Objects Supported

[Tab Control](tabControl.md)





## Vertical Scroll Bar  

An interface tool allowing the user to move the viewing area up and down.

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”

Available values: 
- Yes: The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame). 
- No: The scrollbar is never visible.
- Automatic: The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame).


> If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarVertical|boolean|"visible", "hidden", "automatic"|

#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md)