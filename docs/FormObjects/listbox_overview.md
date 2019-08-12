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

### Composition

A list box is composed of four distinct parts: 

*	the list box object in its entirety, 
*	columns, 
*	column headers, and 
*	column footers. 

![](assets/en/FormObjects/listbox_parts.png)

Each part has its own name as well as specific properties. For example, the number of columns or the alternating color of each row is set in the list box object properties, the width of each column is set in the column properties, and the font of the header is set in the header properties.


## List box types  

There are several types of list boxes, with their own specific behaviors and properties.  

>It is not possible to combine different list box types in the same list box object.

### Array type list boxes

The number of rows is based on the number of array elements. Each column of the list box is associated with a 4D array. By default, 4D assigns the name “ColumnX” to each column variable, and thus to each associated array. You can change it in the column properties. With this type of list box, the values entered or displayed are managed using the 4D language. You can also associate a choice list with a column in order to control data entry (see List box column specific properties).

You can display an array type list box either in standard mode or in hierarchical mode. List boxes displayed in hierarchical mode use specific mechanisms that are described below. 

#### Supported Properties

[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)  - [Background Color](properties_BackgroundAndBorder.md#background-color) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing) - [Data Souce](properties_Object.md#data-source) - [Display Headers](properties_Headers.md#display-headers) - [Display Footers](properties_Footers.md#display-footers) - [Draggable](properties_Action.md#droppable) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font_color) - [Height (list box)](properties_CoordinatesAndSizing.md#height) - [Height (headers)](properties_Headers.md#height) - [Height (footers)](properties_Footers.md#height) - [Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) - [Hierarchical List Box](properties_Hierarchy.md#hierarchical-list-box) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) -  [Method](properties_Action.md#method) - [Movable Rows](properties_Action.md#movable-rows) - [Number of Columns](properties_ListBox.md#number-of-columns) - [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns) - [Number of Static Columns](properties_ListBox.md#number-of-static-columns) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Control Array](properties_ListBox.md#row-control-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Height](properties_CoordinatesAndSizing.md#row-height) - [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array) - [Row Style Array](properties_Text.md#row-style-array) - [Selection Mode](properties_ListBox.md#selection-mode) - [Single-Click Edit](properties_Entry.md#single-click-edit) - [Sortable](properties_Action.md#sortable) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Transparent](properties_BackgroundAndBorder.md#transparent) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Line Color](properties_Gridlines.md#vertical-line-color) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 



### Hierarchical list boxes

A hierarchical list box is a list box in which the contents of the first column appears in hierarchical form. This type of representation is adapted to the presentation of information that includes repeated values and/or values that are hierarchically dependent (country/region/city and so on).

Only array type list boxes can be hierarchical. 

Hierarchical list boxes are a particular way of representing data but they do not modify the data structure (arrays). Hierarchical list boxes are managed exactly the same way as regular list boxes.

To specify a hierarchical list box, there are three different possibilities:

*	Manually configure hierarchical elements using the Property list of the form editor.
*	Visually generate the hierarchy using the list box management pop-up menu, in the form editor.
*	Use the [LISTBOX SET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-SET-HIERARCHY.301-4127969.en.html) and [LISTBOX GET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-GET-HIERARCHY.301-4127970.en.html) commands, described in the 4D Language Reference manual.


#### Defining the hierarchy


You can enable and configure the hierarchical mode multiple ways:

*	via the Property List
*	via the context menu 
*	via programming


##### Create hierarchy  

When you select at least one column in addition to the first one in a list box object (of the array type) in the form editor, the Create hierarchy command is available in the context menu:

![](assets/en/FormObjects/listbox_hierarchy1.png)

When you choose this command, the following actions are carried out:

*	The "Hierarchical list box" option is checked for the object in the Property List.
*	The variables of the columns are used to specify the hierarchy. They replace any variables already specified.
*	The columns selected no longer appear in the list box (except for the title of the first one).

Example: given a list box whose first columns contain Country, Region, City and Population. When Country, Region and City are selected (see illustration above), if you choose Create hierarchy in the context menu, a three-level hierarchy is created in the first column, columns 2 and 3 are removed and the Population column becomes the second:

![](assets/en/FormObjects/listbox_hierarchy2.png)

#### Cancel hierarchy  

When the first column is selected and already specified as hierarchical, you can use the Cancel hierarchy command. When you choose this command, the following actions are carried out:

*	The "Hierarchical list box" option is deselected for the object,
*	The hierarchical levels 2 to X are removed and transformed into columns added to the list box.




### Selection type list boxes

The number of rows is based on the **current selection** or on a **named selection**. Each column is associated with a field (for example [Employees]LastName) or a 4D expression. The expression can be based on one or more fields (for example, [Employees]FirstName+“ ”[Employees]LastName) or it may simply be a formula (for example String(Milliseconds)). The expression can also be a project method, a variable or an array item.   

In the case of a list box based on the current selection, any modification done from the database side is automatically reflected in the list box, and vice versa. The current selection is therefore always the same in both places.  

#### Supported Properties

[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)  - [Background Color](properties_BackgroundAndBorder.md#background-color) - [Bold](properties_Text.md#bold) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - 
Collection or entity selection(properties_Object.md#collection-or-entity-selection) - [Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing) - [Current item](properties_DataSource.md#current-item) - [Current item position](properties_DataSource.md#current-item-position) - [Data Souce](properties_Object.md#data-source) - [Detail Form Name](properties_ListBox.md#detail-form-name) - [Display Headers](properties_Headers.md#display-headers) - [Display Footers](properties_Footers.md#display-footers) - [Double-click on row](properties_ListBox.md#double-click-on-row) - [Draggable](properties_Action.md#droppable) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font_color) - [Font Color Expression](properties_Text.md#font-color-expression) - [Height (list box)](properties_CoordinatesAndSizing.md#height) - [Height (headers)](properties_Headers.md#height) - [Height (footers)](properties_Footers.md#height) - [Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) - [Hierarchical List Box](properties_Hierarchy.md#hierarchical-list-box) - [Highlight Set](properties_ListBox.md#highlight-set) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) -  [Meta info expression](properties_Text.md#meta-info-expression) - [Method](properties_Action.md#method) - [Movable Rows](properties_Action.md#movable-rows) - [Number of Columns](properties_ListBox.md#number-of-columns) - [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns) - [Number of Static Columns](properties_ListBox.md#number-of-static-columns) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Control Array](properties_ListBox.md#row-control-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Height](properties_CoordinatesAndSizing.md#row-height) - [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array) - [Row Style Array](properties_Text.md#row-style-array) - [Selected Items](properties_DataSource.md#selected-items) - [Selection Mode](properties_ListBox.md#selection-mode) - [Single-Click Edit](properties_Entry.md#single-click-edit) - [Sortable](properties_Action.md#sortable) - [Standard action](properties_Action.md#standard-action) - [Style Expression](properties_Text.md#style-expression) - [Top](properties_CoordinatesAndSizing.md#top) - [Transparent](properties_BackgroundAndBorder.md#transparent) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Line Color](properties_Gridlines.md#vertical-line-color) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
 






 

### Collection or Entity selection type list boxes
The number of rows is based on the number of collection elements or entities. In the column properties, each column is associated with a 4D expression that usually refers to a property path (see List box column specific properties). Collection elements or entities are returned by using the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command (for example, This.firstName to display the value of the "firstName" property/attribute for each element/entity).  

Collections and entity selections are very similar when used as list box sources. However, entity selection list boxes benefit from additional features related to user data entry (see [Managing entry](https://doc.4d.com/4Dv17R6/4D/17-R6/Managing-List-Box-Objects.300-4311115.en.html#3815372)) since rows are directly connected to data from the datastore.  

#### Supported Properties

[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)  - [Background Color](properties_BackgroundAndBorder.md#background-color) - [Bold](properties_Text.md#bold) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - Collection or entity selection(properties_Object.md#collection-or-entity-selection) - [Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing) - [Current item](properties_DataSource.md#current-item) - [Current item position](properties_DataSource.md#current-item-position) - [Data Souce](properties_Object.md#data-source) - [Display Headers](properties_Headers.md#display-headers) - [Display Footers](properties_Footers.md#display-footers) -[Draggable](properties_Action.md#droppable) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font_color) - [Font Color Expression](properties_Text.md#font-color-expression) - [Height (list box)](properties_CoordinatesAndSizing.md#height) - [Height (headers)](properties_Headers.md#height) - [Height (footers)](properties_Footers.md#height) - [Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) -  [Meta info expression](properties_Text.md#meta-info-expression) - [Method](properties_Action.md#method) - [Number of Columns](properties_ListBox.md#number-of-columns) - [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns) - [Number of Static Columns](properties_ListBox.md#number-of-static-columns) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Selected Items](properties_DataSource.md#selected-items) - [Selection Mode](properties_ListBox.md#selection-mode) - [Single-Click Edit](properties_Entry.md#single-click-edit) - [Sortable](properties_Action.md#sortable) - [Style Expression](properties_Text.md#style-expression) - [Top](properties_CoordinatesAndSizing.md#top) - [Transparent](properties_BackgroundAndBorder.md#transparent) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Line Color](properties_Gridlines.md#vertical-line-color) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 


 











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

## List Box Supported Properties

[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)  - 

[Background Color](properties_BackgroundAndBorder.md#background-color) - [Bold](properties_Text.md#bold) - 

[Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression)

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - 

[Bottom](properties_CoordinatesAndSizing.md#bottom) - 

Collection or entity selection(properties_Object.md#collection-or-entity-selection)

[Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing) - 

[Current item](properties_DataSource.md#current-item)

[Current item position](properties_DataSource.md#current-item-position)

[Data Souce](properties_Object.md#data-source) - 

[Detail Form Name](properties_ListBox.md#detail-form-name)

[Display Headers](properties_Headers.md#display-headers) - 

[Display Footers](properties_Footers.md#display-footers) -

[Double-click on row](properties_ListBox.md#double-click-on-row)

[Draggable](properties_Action.md#droppable) - 

[Droppable](properties_Action.md#droppable) - 

[Focusable](properties_Entry.md#focusable) - 

[Font](properties_Text.md#font) - 

[Font Color](properties_Text.md#font_color) - 

[Font Color Expression](properties_Text.md#font-color-expression)

[Height (list box)](properties_CoordinatesAndSizing.md#height) - 

[Height (headers)](properties_Headers.md#height) - 

[Height (footers)](properties_Footers.md#height) - 

[Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows) - 

[Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - 

[Hide selection highlight](properties_Appearance.md#hide-selection-highlight) - 

[Hierarchical List Box](properties_Hierarchy.md#hierarchical-list-box) - 

[Highlight Set](properties_ListBox.md#highlight-set) - 

[Horizontal Alignment](properties_Text.md#horizontal-alignment) - 

[Horizontal Line Color](properties_Gridlines.md#horizontal-line-color) - 

[Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - 

[Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - 

[Italic](properties_Text.md#italic) - 

[Left](properties_CoordinatesAndSizing.md#left) -  

[Meta info expression](properties_Text.md#meta-info-expression)

[Method](properties_Action.md#method) - 

[Movable Rows](properties_Action.md#movable-rows) - 

[Number of Columns](properties_ListBox.md#number-of-columns) - 

[Number of Locked Columns](properties_ListBox.md#number-of-locked-columns) - 

[Number of Static Columns](properties_ListBox.md#number-of-static-columns) - 

[Object Name](properties_Object.md#object-name) - 

[Right](properties_CoordinatesAndSizing.md#right) - 

[Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - 

[Row Control Array](properties_ListBox.md#row-control-array) - 

[Row Font Color Array](properties_Text.md#row-font-color-array) - 

[Row Height](properties_CoordinatesAndSizing.md#row-height) - 

[Row Height Array](properties_CoordinatesAndSizing.md#row-height-array) - 

[Row Style Array](properties_Text.md#row-style-array) - 

[Selected Items](properties_DataSource.md#selected-items)

[Selection Mode](properties_ListBox.md#selection-mode) - 

[Single-Click Edit](properties_Entry.md#single-click-edit) - 

[Sortable](properties_Action.md#sortable) - 

[Standard action](properties_Action.md#standard-action) - 

[Style Expression](properties_Text.md#style-expression)

[Top](properties_CoordinatesAndSizing.md#top) - 

[Transparent](properties_BackgroundAndBorder.md#transparent)  - 

[Type](properties_Object.md#type) - 

[Underline](properties_Text.md#underline) - 

[Variable or Expression](properties_Object.md#variable-or-expression) - 

[Vertical Alignment](properties_Text.md#vertical-alignment) - 

[Vertical Line Color](properties_Gridlines.md#vertical-line-color) - 

[Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - 

[Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - 

[Visibility](properties_Display.md#visibility) - 

[Width](properties_CoordinatesAndSizing.md#width) 

##  List Box Columns

You can select a list box column in the Form editor by clicking on it when the list box object is selected:

![](assets/en/FormObjects/listbox_column.png)

You can set standard properties (text, background color, etc.) for each column of the list box; these properties take priority over those of the list box object properties.

>You can define the [Variable type](input_overview.md#input-areas) for array list box columns (String, Text, Number, Date, Time, Picture, Boolean, or Object). The use of object arrays requires a 4D View Pro licence (see [Using object arrays in columns (4D View Pro)](#using-object-arrays-in-columns-4d-view-pro)).

You also have access to specific properties that are listed at the end of this section.


### Using object arrays in columns (4D View Pro)  

Starting with 4D v15, list box columns can handle object arrays. Since object arrays can contain different kinds of data, this powerful new feature allows you to mix different input types in the rows of a single column, and display various widgets as well. For example, you could insert a text input in the first row, a check box in the second, and a drop-down list in the third. Object arrays also provide access to new kinds of widgets, such as buttons or color pickers.

The following list box was designed using an object array:

![](assets/en/FormObjects/listbox_column_objectArray.png)

>**Note about Licensing**: The ability to use object arrays in list boxes is a first step to the upcoming "4D View Pro" tool that will progressively replace the 4D View plug-in. Using this feature requires you to have a valid 4D View license. For more information, please refer to the 4D Web site.

### Configuring an object array column  

To assign an object array to a list box column, you just need to set the object array name in either the Property list ("Variable Name" field), or using the [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-INSERT-COLUMN.301-4311153.en.html) command, like with any array-based column. In the Property list, you can now select Object as a "Expression Type" for the column:

![](assets/en/FormObjects/listbox_column_objectArray_config.png)

Standard properties related to coordinates, size, and style are available for object columns. You can define them using the Property list, or by programming the style, font color, background color and visibility for each row of an object-type list box column. These types of columns can also be hidden.

However, the Data Source theme is not available for object-type list box columns. In fact, the contents of each column cell are based on attributes found in the corresponding element of the object array. Each array element can define:

the value type (mandatory): text, color, event, etc.
the value itself (optional): used for input/output.
the cell content display (optional): button, list, etc.
additional settings (optional): depend on the value type
To define these properties, you need to set the appropriate attributes in the object (available attributes are listed below). For example, you can write "Hello World!" in an object column using this simple code:

```code4d  
ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob) //first element
 OB SET($ob;"valueType";"text") //defines the value type (mandatory)
 OB SET($ob;"value";"Hello World!") //defines the value
 APPEND TO ARRAY(obColumn;$ob)  
```
 
![](assets/en/FormObjects/listbox_column_objectArray_helloWorld.png)

>Display format and entry filters cannot be set for an object column. They automatically depend on the value type.

#### valueType and data display  

When a list box column is associated with an object array, the way a cell is displayed, entered, or edited, is based on the valueType attribute of the array element. Supported valueType values are:

*	"text": for a text value
*	"real": for a numeric value that can include separators like a \<space>, <.>, or <,>
*	"integer": for an integer value
*	"boolean": for a True/False value
*	"color": to define a background color
*	"event": to display a button with a label.

4D uses default widgets with regards to the "valueType" value (i.e., a "text" is displayed as a text input widget, a "boolean" as a check box), but alternate displays are also available through options (*e.g.*, a real can also be represented as a drop-down menu). The following table shows the default display as well as alternatives for each type of value:

|valueType|	Default widget	|Alternative widget(s)|
|---|---|---|
|text|	text input	|drop-down menu (required list) or combo box (choice list)|
|real|	controlled text input (numbers and separators)	|drop-down menu (required list) or combo box (choice list)|
|integer|	controlled text input (numbers only)|	drop-down menu (required list) or combo box (choice list) or three-states check box
|boolean|	check box	|drop-down menu (required list)|
|color|	background color|	text|
|event	|button with label|
|||All widgets can have an additional unit toggle button or ellipsis button attached to the cell.|

You set the cell display and options using specific attributes in each object (see below).

#### Display formats and entry filters  

You cannot set display formats or entry filters for columns of object-type list boxes. They are automatically defined according to the value type. These are listed in the following table:

|Value type	|Default format	|Entry control|
|---|---|---|
|text|	same as defined in object	|any (no control)|
|real|	same as defined in object (using system decimal separator)	|"0-9" and "." and "-" 
|||"0-9" and "." if min>=0|
|integer|	same as defined in object	|"0-9" and "-"|
|||"0-9" if min>=0|
|Boolean|	check box|	N/A|
|color	|N/A	|N/A|
|event	|N/A	|N/A|

### Attributes  

Each element of the object array is an object that can contain one or more attributes that will define the cell contents and data display (see example above).

The only mandatory attribute is "valueType" and its supported values are "text", "real", "integer", "boolean", "color", and "event". The following table lists all the attributes supported in list box object arrays, depending on the "valueType" value (any other attributes are ignored). Display formats are detailed and examples are provided below.

| |valueType|	text|	real	|integer|	boolean|	color|	event|
|---|---|---|---|---|---|---|---|
|*Attributes*	|*Description*	| | | | | | |				
|value|	cell value (input or output)|x|	x|	x|	| | |
|min|	minimum value|	|x|	x|	| | |
|max|	maximum value|	|x|	x|	| | | 
|behavior|	"threeStates" value |  | |x	|	| | |
|requiredList|	drop-down list defined in object|x|	x|x	|| | |
|choiceList|	combo box defined in object|x|x|x|		| | |
|requiredListReference|	4D list ref, depends on "saveAs" value|x|x|x|		| | |
|requiredListName|	4D list name, depends on "saveAs" value|x|x|x|		| | |	
|saveAs|	"reference" or "value"|	x|x|x|		| | |
|choiceListReference|	4D list ref, display combo box|	x|	x|	x|		| | |	
|choiceListName|	4D list name, display combo box|x|x|x|		| | |
|unitList|	array of X elements|x|x|x|		| | |
|unitReference|	index of selected element|x|x|	x	|		| | |
|unitsListReference|	4D list ref for units|x	|x|	x	|		| | |
|unitsListName|	4D list name for units|	x|x|	x|		| | |
|alternateButton|	add an alternate button|x|x|x|x|x|	| 

#### value  

Cell values are stored in the "value" attribute. This attribute is used for input as well as output. It can also be used to define default values when using lists (see below).

````code4d
 ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob1)
 $entry:="Hello world!"
 OB SET($ob1;"valueType";"text")
 OB SET($ob1;"value";$entry) // if the user enters a new value, $entry will contain the edited value
 C_OBJECT($ob2)
 OB SET($ob2;"valueType";"real")
 OB SET($ob2;"value";2/3)
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"boolean")
 OB SET($ob3;"value";True)
 
 APPEND TO ARRAY(obColumn;$ob1)
 APPEND TO ARRAY(obColumn;$ob2)
 APPEND TO ARRAY(obColumn;$ob3)
````

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_value.png)

>Null values are supported and result in an empty cell.

#### min and max  

When the "valueType" is "real" or "integer", the object also accepts min and max attributes with appropriate values (values must be of the same type as the valueType). 

These attributes can be used to control the range of input values. When a cell is validated (when it loses the focus), if the input value is lower than the min value or greater than the max value, then it is rejected. In this case, the previous value is maintained and a tip displays an explanation.

````code4d
 C_OBJECT($ob3)
 $entry3:=2015
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";$entry3)
 OB SET($ob3;"min";2000)
 OB SET($ob3;"max";3000)
````

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_minMax.png)

#### behavior  

The behavior attribute provides variations to the regular representation of values. In 4D v15, a single variation is proposed:

|Attribute	|Available value(s)|	valueType(s)|	Description|
|---|---|---|---|
|behavior|	threeStates	|integer|	Represents a numeric value as a three-states check box.<br> 2=semi-checked, 1=checked, 0=unchecked, -1=invisible, -2=unchecked disabled, -3=checked disabled, -4=semi-checked disabled|

````code4d
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";-3)
 C_OBJECT($ob4)
 OB SET($ob4;"valueType";"integer")
 OB SET($ob4;"value";-3)
 OB SET($ob4;"behavior";"threeStates")
````

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_behavior.png)

#### requiredList and choiceList  

When a "choiceList" or a "requiredList" attribute is present inside the object, the text input is replaced by a drop-down list or a combo box, depending of the attribute:

*	If the attribute is "choiceList", the cell is displayed as a combo box. This means that the user can select or type a value.
*	If the attribute is "requiredList" then the cell is displayed as a drop-down list and the user can only select one of the values provided in the list.

In both cases, a "value" attribute can be used to preselect a value in the widget.

>The widget values are defined through an array. If you want to assign an existing 4D list to the widget, you need to use the "requiredListReference", "requiredListName", "choiceListReference", or "choiceListName" attributes.

Examples:

*	You want to display a drop-down list with only two options: "Open" or "Closed". "Closed" must be preselected:

	````code4d
	ARRAY TEXT($RequiredList;0)
	APPEND TO ARRAY($RequiredList;"Open")
	APPEND TO ARRAY($RequiredList;"Closed")
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"value";"Closed")
	OB SET ARRAY($ob;"requiredList";$RequiredList)
	````
![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_openClosed.png)

*	You want to accept any integer value, but display a combo box to suggest the most common values:

	````code4d
	ARRAY LONGINT($ChoiceList;0)
	APPEND TO ARRAY($ChoiceList;5)
	APPEND TO ARRAY($ChoiceList;10)
	APPEND TO ARRAY($ChoiceList;20)
	APPEND TO ARRAY($ChoiceList;50)
	APPEND TO ARRAY($ChoiceList;100)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"value";10) //10 as default value
	OB SET ARRAY($ob;"choiceList";$ChoiceList)
	````
![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_commonValues.png)

#### requiredListName and requiredListReference  

The "requiredListName" and "requiredListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Lists editor of the Tool box) or by programming (using the New list command). The cell will then be displayed as a drop-down list. This means that the user can only select one of the values provided in the list.

Use "requiredListName" or "requiredListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

>*	If you want to define these values through a simple array, you need to use the "requiredList" attribute.
>*	If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Examples:

*	You want to display a drop-down list based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green"), save it as a value and display "blue" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

	````code4d
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"saveAs";"value")
	OB SET($ob;"value";"blue")
	OB SET($ob;"requiredListName";"colors")	
	````	
![](assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)
	
*	You want to display a drop-down list based on a list defined by programming and save it as a reference:
	
	````code4d
	<>List:=New list
	APPEND TO LIST(<>List;"Paris";1)
	APPEND TO LIST(<>List;"London";2)
	APPEND TO LIST(<>List;"Berlin";3)
	APPEND TO LIST(<>List;"Madrid";4)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"saveAs";"reference")
	OB SET($ob;"value";2) //displays London by default
	OB SET($ob;"requiredListReference";<>List)
	````
	![](assets/en/FormObjects/listbox_column_objectArray_cities.png)

#### choiceListName and choiceListReference  

The "choiceListName" and "choiceListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Tool box) or by programming (using the New list command). The cell is then displayed as a combo box, which means that the user can select or type a value.

Use "choiceListName" or "choiceListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

>*	If you want to define these values through a simple array, you need to use the "choiceList" attribute.
>*	If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Example:

You want to display a combo box based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green") and display "green" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

````code4d
 C_OBJECT($ob)
 OB SET($ob;"valueType";"text")
 OB SET($ob;"value";"blue")
 OB SET($ob;"choiceListName";"colors")
````

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)


#### unitsList, unitsListName, unitsListReference and unitReference  

You can use specific attributes to add units associated with cell values (*e.g.*: "10 cm", "20 pixels", etc.). To define the unit list, you can use one of the following attributes:

*	"unitsList": an array containing the x elements used to define the available units (e.g.: "cm", "inches", "km", "miles", etc.). Use this attribute to define units within the object.
*	"unitsListReference": a reference to a 4D list containing available units. Use this attribute to define units with a 4D list created with the [New list](https://doc.4d.com/4Dv15/4D/15.6/New-list.301-3818474.en.html) command.
*	"unitsListName": a name of a design-based 4D list that contains available units. Use this attribute to define units with a 4D list created in the Tool box.

Regardless of the way the unit list is defined, it can be associated with the following attribute:

*	"unitReference": a single value that contains the index (from 1 to x) of the selected item in the "unitList", "unitsListReference" or "unitsListName" values list.

The current unit is displayed as a button that cycles through the "unitList", "unitsListReference" or "unitsListName" values each time it is clicked (e.g., "pixels" -> "rows" -> "cm" -> "pixels" -> etc.)

Example: 

We want to set up a numeric input followed by two possible units: "rows" or "pixels". The current value is "2" + "lines". We use values defined directly in the object ("unitsList" attribute):

````code4d
ARRAY TEXT($_units;0)
APPEND TO ARRAY($_units;"lines")
APPEND TO ARRAY($_units;"pixels")
C_OBJECT($ob)
OB SET($ob;"valueType";"integer")
OB SET($ob;"value";2) // 2 "units"
OB SET($ob;"unitReference";1) //"lines"
OB SET ARRAY($ob;"unitsList";$_units)
````

![](assets/en/FormObjects/listbox_column_objectArray_unitList.png)

#### alternateButton  

If you want to add an ellipsis button [...] to a cell, you just need to pass the "alternateButton" with the True value in the object. The button will be displayed in the cell automatically.

When this button is clicked by a user, an `On Alternate Click` event will be generated, and you will be able to handle it however you want (see the "Event management" paragraph for more information).

>`On Alternate Click` is the new name of the `On Arrow Click` event, renamed in 4D v15 to highlight its extended scope.

Example:

````code4d
C_OBJECT($ob1)
$entry:="Hello world!"
OB SET($ob;"valueType";"text")
OB SET($ob;"alternateButton";True)
OB SET($ob;"value";$entry)
````

![](assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)


#### color valueType  

The "color" valueType allows you to display either a color or a text.

*	If the value is a number, a colored rectangle is drawn inside the cell. Example:

	````code4d
	C_OBJECT($ob4)
	OB SET($ob4;"valueType";"color")
	OB SET($ob4;"value";0x00FF0000)
	````
![](assets/en/FormObjects/listbox_column_objectArray_colorValue.png)


*	If the value is a text, then the text is displayed (*e.g.*: "value";"Automatic").


#### event valueType  

The "event" valueType displays a simple button that generates an `On Clicked` event when clicked. No data or value can be passed or returned.

Optionally, you can pass a "label" attribute. 

Example:

````code4d
C_OBJECT($ob)
OB SET($ob;"valueType";"event")
OB SET($ob;"label";"Edit...")
````

![](assets/en/FormObjects/listbox_column_objectArray_eventValueType.png)


### Event management  
Several events can be handled while using an object list box array:

*	**On Data Change**: An `On Data Change` event is triggered when any value has been modified either: 
	*	in a text input zone
	*	in a drop-down list
	*	in a combo box area
	*	in a unit button (switch from value x to value x+1)
	*	in a check box (switch between checked/unchecked)
*	**On Clicked**: When the user clicks on a button installed using the "event" *valueType* attribute, an `On Clicked` event will be generated. This event is managed by the programmer.
*	**On Alternative Click**: When the user clicks on an ellipsis button ("alternateButton" attribute), an `On Alternative Click` event will be generated. This event is managed by the programmer.

>`On Alternative Click` is the new name of the `On Arrow Click` event that was available in previous versions of 4D. This event has been renamed in 4D v15 since its scope has been extended.


### Supported Properties

[Alpha Format](properties_Display.md#alpha-format) - [Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color) - [Automatic Row Height](properties_CoordinatesAndSizing.md#automatic-row-height) - [Background Color](properties_Text.md#background-color) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Bold](properties_Text.md#bold) - [Boolean Format](properties_Display.md#boolean-format) - [Choice List](properties_DataSource.md#choice-list) - [Context Menu](properties_Entry.md#context-menu) - [Data Type](properties_DataSource.md#data-type) - [Date Format](properties_Display.md#date-format) - [Default Values](properties_DataSource.md#default-values) - [Display Type](properties_Display.md#display-type) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression](properties_DataSource.md#expression) - [Expression Type](properties_Object.md#expresion-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Italic](properties_Text.md#italic) - [Invisible](properties_Display.md#invisible) - [Maximum Width](properties_CoordinatesAndSizing.md#maximum-width) - [Method](properties_Action.md#method) - [Minimum Width](properties_CoordinatesAndSizing.md#minimum-width) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Resizable](properties_ResizingOptions.md#resizable) - [Required List](properties_RangeOfValues.md#required-list) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Style Array](properties_Text.md#row-style-array) - [Style Expression](properties_Text.md#style-expression) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#trucate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)


## List Box Headers

To be able to access the header properties of a list box, you must enable the [Display Headers](properties_ListBox.md#display-headers) option of the list box.

### List Box Header Supported Properties
[Object Name](properties_Object.md#object-name) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Title](properties_Object.md#title) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Width](properties_CoordinatesAndSizing.md#width) - [Font](properties_Text.md#font) - [Bold](properties_Text.md#bold) - 
[Italic](properties_Text.md#italic) - [Underline](properties_Text.md#underline) - [Font Color](properties_Text.md#font-color) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Help Tip](properties_Help.md#help-tip) 


## List Box Footers



### Supported Properties


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



