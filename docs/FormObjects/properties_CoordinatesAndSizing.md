---
id: propertiesCoordinatesAndSizing
title:Coordinates & Sizing
---

## Automatic Row Height
`4D View Pro only: This feature requires a 4D View Pro license.`

This property is only available for array-based, non-hierarchical list boxes. The property is not selected by default. 

When used, the height of every row in the column will automatically be calculated by 4D, and the column contents will be taken into account. Note that only columns with the option selected will be taken into account to calculate the row height.

>When resizing the form, if the ""Grow" [horizontal sizing](properties-ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

When this property is enabled, the height of every row is automatically calculated in order to make the cell contents entirely fit without being truncated (unless the [Wordwrap](properties_Display.md#wordwrap) option is disabled, see below).

*	The row height calculation takes into account:
	*	any content types (text, numerics, dates, times, pictures (calculation depends on the picture format), objects),
	*	any control types (inputs, check boxes, lists, dropdowns),
	*	fonts, fonts styles and font sizes,
	*	the [Wordwrap](properties_Display.md#wordwrap) option: if disabled, the height is based on the number of paragraphs (lines are truncated); if enabled, the height is based on number of lines (not truncated).

*	The row height calculation ignores:
	*	hidden column contents
	*	[Row Height](#row-height) and [Row Height Array](#row-height-array) properties (if any) set either in the Property list or by programming.

>Since it requires additional calculations at runtime, the automatic row height option could affect the scrolling fluidity of your list box, in particular when it contains a large number of rows. 




#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowHeightAuto|boolean |"true", "false"|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)






## Bottom

Positions the object on the bottom of the form (centered). 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|bottom|integer | minimum: 0|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)




## Corner Radius

Defines the corner roundness (in pixels) of objects of the [rectangle](shapes_overview.md#rectangle) type. By default, the radius value for rectangles is 0 pixels. You can change this property to draw rounded rectangles with custom shapes:

![](assets/en/FormObjects/shape_rectangle.png)

Minimum value is 0, in this case a standard non-rounded rectangle is drawn. 
Maximum value depends on the rectangle size (it cannot exceed half the size of the shortest rectangle side) and is calculated dynamically.

You can also set this property using the [OBJECT Get corner radius](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-Get-corner-radius.301-4311357.en.html) and [OBJECT SET CORNER RADIUS](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-CORNER-RADIUS.301-4311356.en.html) commands.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|borderRadius|integer |minimum: 0|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle)





## Height

This property designates an object's vertical size.

You can change the height of an object by:

* dragging a resizing handle (via the Form editor),
* one pixel at a time by using the **Ctrl** key (Windows) or the **Command** key (macOS) and the arrow keys,
* by steps (by default, 20 pixels at a time),
* Manually enter its dimensions in the Property List,
* Defining the height (in pixels) with JSON.

To learn more about setting the size of an object, see the [Setting object display properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-object-display-properties.300-4163736.en.html) page.

>Some objects may have a predefined height that cannot be altered.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|height|integer |minimum: 0|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)






## Left

Positions an object on the left of the form.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|left|integer |minimum: 0|


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Hel Buttonp](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)



## Maximum Width

The maximum width of the column (in pixels). The width of the column cannot be increased beyond this value when resizing the column or form.

>When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|maxWidth|string |minimum: 0|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)




## Minimum Width

The minimum width of the column (in pixels). The width of the column cannot be reduced below this value when resizing the column or form.

>When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|minWidth|string |minimum: 0|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)






## Right

Positions an object on the right of the form.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|right|integer |minimum: 0|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)





## Row Height

Sets the height of list box rows.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowHeight|string |css value unit "em" or "px" (default)|

#### Objects Supported

[List Box](listbox_overview.md#overview)






## Row Height Array
`4D View Pro only: This feature requires a 4D View Pro license.`

This property is used to specify the name of a row height array that you want to associate with the list box. A row height array must be of the numeric type (longint by default).

When a row height array is defined, each of its elements whose value is different from 0 (zero) is taken into account to determine the height of the corresponding row in the list box, based on the current Row Height unit.

For example, you can write:

````code4D
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
````

Assuming that the unit of the rows is "lines," then the fifth row of the list box will have a height of three lines, while every other row will keep its default height.

>*	The Row Height Array property is not taken into account for hierarchical list boxes.
>*	For array-based list boxes, this property is available only if the [Automatic Row Height](#automatic-row-height) option is not selected.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowHeightSource|array |Name of a 4D array variable.|

#### Objects Supported

[List Box](listbox_overview.md#overview)







## Top

Positions an object on the top of the form.  

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|top |integer |minimum: 0|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)







## Width

This property designates an object's horizontal size.

You can change the width of an object by:

* dragging a resizing handle (via the Form editor),
* one pixel at a time by using the **Ctrl** key (Windows) or the **Command** key (macOS) and the arrow keys,
* by steps (by default, 20 pixels at a time),
* Manually enter its dimensions in the Property List,
* Defining the width (in pixels) with JSON.

To learn more about setting the size of an object, see the [Setting object display properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-object-display-properties.300-4163736.en.html) page.

>*	Some objects may have a predefined height that cannot be altered.
*	If the [Resizable](properties_ResizingOptions.md#resizable) property is used for a [list box column](listbox_overview.md#list-box-columns), the user can also manually resize the column.
*	When resizing the form, if the ""Grow" [horizontal sizing](properties-ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|width|integer |minimum: 0|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)









