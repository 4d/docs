---
id: listboxOverview
title: List Box
---

## Overview

List boxes are complex active objects that allow displaying and entering data as synchronized columns. They have the same basic features as “grouped scrollable areas,” as well as new expanded possibilities (value entry, column sorting, customized appearance, moving of columns, etc.). A list box type object can be completely set using the 4D Form editor and can also be handled programmatically.

![](assets/en/FormObjects/listbox.png)

A list box contains one or more columns whose contents are automatically synchronized. By default, when you create a list box, it contains a single column. You can modify the number of columns (add, duplicate, or delete a column) using the context menu (click on a column or column header) or in the list box properties. 

![](assets/en/FormObjects/listbox_columns.png)

The number of columns is, in theory, unlimited (it depends on the machine resources). 

A list box is composed of four distinct parts: the list box object in its entirety, columns, column headers and column footers. In the Form editor, these parts can also be selected separately. Each part has its own name as well as specific properties. For example, the number of columns or the alternating color of each row is set in the list box object properties, the width of each column is set in the column properties, and the font of the header is set in the header properties.

You can display an array type list box either in standard mode or in hierarchical mode. List boxes displayed in hierarchical mode use specific mechanisms that are described below. 

## List box types  

There are several types of list boxes: 

*	**Selection type list boxes**: The number of rows is based on the current selection or on a named selection. Each column is associated with a field (for example [Employees]LastName) or a 4D expression. The expression can be based on one or more fields (for example, [Employees]FirstName+“ ”[Employees]LastName) or it may simply be a formula (for example String(Milliseconds)). The expression can also be a project method, a variable or an array item.   

	In the case of a list box based on the current selection, any modification done from the database side is automatically reflected in the list box, and vice versa. The current selection is therefore always the same in both places.   
*	**Array type list boxes**: The number of rows is based on the number of array elements. Each column of the list box is associated with a 4D array. By default, 4D assigns the name “ColumnX” to each column variable, and thus to each associated array. You can change it in the column properties. With this type of list box, the values entered or displayed are managed using the 4D language. You can also associate a choice list with a column in order to control data entry (see List box column specific properties).
*	**Collection or Entity selection type list boxes**: The number of rows is based on the number of collection elements or entities. In the column properties, each column is associated with a 4D expression that usually refers to a property path (see List box column specific properties). Collection elements or entities are returned by using the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command (for example, This.firstName to display the value of the "firstName" property/attribute for each element/entity).  

	> Collections and entity selections are very similar when used as list box sources. However, entity selection list boxes benefit from additional features related to user data entry (see [Managing entry](https://doc.4d.com/4Dv17R6/4D/17-R6/Managing-List-Box-Objects.300-4311115.en.html#3815372)) since rows are directly connected to data from the datastore.  
	
It is not possible to combine different list box types in the same list box object.

## Using list boxes  

During execution, list boxes allow displaying and entering data as lists.

To make a cell editable (if entry is allowed for the column), simply click twice on the value that it contains: 

![](assets/en/FormObjects/listbox_edit.png)

>For more information, refer to [Managing entry](https://doc.4d.com/4Dv17R6/4D/17-R6/Managing-List-Box-Objects.300-4311115.en.html#3815372) in the 4D Language Reference  manual. 

You can enter and display the text on several lines within a list box cell. To add a line return:

*	*Windows* - press **Ctrl+Carriage** return
*	*macOS* - press **Option+Carriage** return

Note that the height of the rows is only resized automatically for array type list boxes if the `Automatic Row Height` option is selected. This option is ignored for selection and collection type list boxes.

It is possible to sort column values by clicking on a header (standard sort). The sort is alphanumerical and alternately ascending/descending on multiple clicks. All columns are automatically synchronized.

>For more information, refer to [Managing sorts](https://doc.4d.com/4Dv17R6/4D/17-R6/Managing-List-Box-Objects.300-4311115.en.html#2966721) in the 4D Language Reference  manual.

It is also possible to resize each column:

![](assets/en/FormObjects/listbox_column_resize.png)

The user can modify the order of columns and (array list boxes only) rows by moving them using the mouse, if this action is authorized:

![](assets/en/FormObjects/listbox_column_reorder.png)

Finally, the user can select one or more rows using the standard shortcuts: **Shift+click** for an adjacent selection and **Ctrl+click** (Windows) or Command+click (macOS) for a non-adjacent selection.

All these characteristics can be handled using the list box, column, header and footer properties. They are detailed in the following sections.

>The specific characteristics of list boxes used in hierarchical mode are described in [Hierarchical list boxes](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-list-boxes.300-4354816.en.html).

## Printing list boxes 
 
List boxes can be printed in forms in "preview" mode (printing a picture of the list box area) or in "advanced" mode (dynamic printing in variable size). For more information, refer to [Printing list boxes](https://doc.4d.com/4Dv17R6/4D/17-R6/Managing-List-Box-Objects.300-4311115.en.html#250728) in the *4D Language Reference* manual.

## Supported Properties

### List box

[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)  -  [Background Color](properties_BackgroundAndBorder.md#background-color) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing) - [Data Souce](properties_Object.md#data-source) - [Display Headers](properties_Headers.md#display-headers) - [Display Footers](properties_Footers.md#display-footers) - [Draggable](properties_Action.md#droppable) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font_color) - [Height (list box)](properties_CoordinatesAndSizing.md#height) - [Height (headers)](properties_Headers.md#height) - [Height (footers)](properties_Footers.md#height) - [Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) - [Hierarchical List Box](properties_Hierarchy.md#hierarchical-list-box) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) -  [Method](properties_Action.md#method) - [Movable Rows](properties_Action.md#movable-rows) - [Number of Columns](properties_ListBox.md#number-of-columns) - [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns) - [Number of Static Columns](properties_ListBox.md#number-of-static-columns) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Control Array](properties_ListBox.md#row-control-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Height](properties_CoordinatesAndSizing.md#row-height) - [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array) - [Row Style Array](properties_Text.md#row-style-array) - 
[Selection Mode](properties_ListBox.md#selection-mode) - [Single-Click Edit](properties_Entry.md#single-click-edit) - [Sortable](properties_Action.md#sortable) - [Standard action](properties_Action.md#standard-action) - 
[Top](properties_CoordinatesAndSizing.md#top) - [Transparent](properties_BackgroundAndBorder.md#transparent)  - 
[Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - 
[Vertical Line Color](properties_Gridlines.md#vertical-line-color) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - 

### List box column

Object Name
Variable or Expression
Expression Type
Default Values
Choice List
Width
Automatic Row Height
Minimum Width
Maximum Width
Resizable
Enterable
Entry Filter
Required List
Excluded List
Alpha Format
Invisible
Wordwrap
Truncate with ellipsis
Background Color
Alternate Background Color
Row Background Color Array
Font
Bold
Italic
Underline
Row Style Array
Font Color
Row Font Color Array
Horizontal Alignment
Vertical Alignment
Multi-style
Method


### List box header

Object Name
Variable or Expression
Title
Pathname
Icon Location
Width
Font
Bold
Italic
Underline
Font Color
Horizontal Alignment
Vertical Alignment
Help Tip


### List box footer

Object Name
Variable or Expression
Expression Type
Variable Calculation
Width
Alpha Format
Wordwrap
Truncate with ellipsis
Background Color
Font
Bold
Italic
Underline
Font Color
Horizontal Alignment
Vertical Alignment
Help Tip



