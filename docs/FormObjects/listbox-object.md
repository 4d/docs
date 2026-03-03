---
id: listbox-object
title: List Box Object
---

## Array list boxes

In an array list box, each column must be associated with a one-dimensional 4D array; all array types can be used, with the exception of pointer arrays. The number of rows is based on the number of array elements.

By default, 4D assigns the name "ColumnX" to each column. You can change it, as well as other column properties, in the [column properties](./listbox-column.md). The display format for each column can also be defined using the [`OBJECT SET FORMAT`](../commands-legacy/object-set-format.md) command.

>Array type list boxes can be displayed in [hierarchical mode](listbox_overview.md#hierarchical-list-boxes), with specific mechanisms.

With array type list box, the values entered or displayed are managed using the 4D language. You can also associate a [choice list](properties_DataSource.md#choice-list) with a column in order to control data entry.
The values of columns are managed using high-level List box commands (such as [`LISTBOX INSERT ROWS`](../commands/listbox-insert-rows) or [`LISTBOX DELETE ROWS`](../commands-legacy/listbox-delete-rows.md)) as well as array manipulation commands. For example, to initialize the contents of a column, you can use the following instruction:

```4d
ARRAY TEXT(varCol;size)
```

You can also use a list:

```4d
LIST TO ARRAY("ListName";varCol)
```

>**Warning**: When a list box contains several columns of different sizes, only the number of items of the smallest array (column) will be displayed. You should make sure that each array has the same number of elements as the others. Also, if a list box column is empty (this occurs when the associated array was not correctly declared or sized using the language), the list box displays nothing.




## Selection list boxes

In this type of list box, each column can be associated with a field (for example `[Employees]LastName)` or an expression. The expression can be based on one or more fields (for example, `[Employees]FirstName+" "[Employees]LastName`) or it may simply be a formula (for example `String(Milliseconds)`). The expression can also be a project method, a variable or an array item. You can use the [`LISTBOX SET COLUMN FORMULA`](../commands-legacy/listbox-set-column-formula.md) and [`LISTBOX INSERT COLUMN FORMULA`](../commands-legacy/listbox-insert-column-formula.md) commands to modify columns programmatically.

The contents of each row is then evaluated according to a selection of records: the **current selection** of a table or a **named selection**.

In the case of a list box based on the current selection of a table, any modification done from the database side is automatically reflected in the list box, and vice versa. The current selection is therefore always the same in both places.  


## Collection or Entity selection list boxes

In this type of list box, each column must be associated to an expression. The contents of each row is then evaluated per collection element or per entity of the entity selection.

Each element of the collection or each entity is available as an object that can be accessed through the [This](../Concepts/classes.md#this) keyword. A column expression can be a property path, a project method, a variable, or any formula, accessing each entity or collection element object through `This`, for example `This.<propertyPath>` (or `This.value` in case of a collection of scalar values). You can use the `LISTBOX SET COLUMN FORMULA` and `LISTBOX INSERT COLUMN FORMULA` commands to modify columns programmatically.

When the data source is an entity selection, any modifications made on the list box side are automatically saved in the database. On the other hand, modifications made on the database side are visible in the list box after touched entities have been reloaded.

:::note

When entities are deleted, their references remain in the entity selection with an *undefined* value, thus displaying blank rows in the list box. In this case, you can call the [`.clean()`](API/EntitySelectionClass.md#clean) function to get a new entity selection but without the deleted entity references.

:::

When the data source is a collection, any modifications made in the list box values are reflected in the collection. On the other hand, if modifications are done on the collection using for example the various functions of the [Collection class](../API/CollectionClass.md), you will need to explicitely notify 4D by reassigning the collection variable to itself, so that the list box contents is refreshed. For example:

```4d
myCol:=myCol.push("new value") //display new value in list box
```



## Supported Properties

Supported properties depend on the list box type.


|Property|Array list box|Selection list box|Collection or Entity Selection list box|
|---|----|---|---|  
|[Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color)|X|X|X|  
|[Background Color](properties_BackgroundAndBorder.md#background-color--fill-color)|X|X|X|
|[Bold](properties_Text.md#bold)|X|X|X|
|[Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression)||X|X|
|[Border Line Style](properties_BackgroundAndBorder.md#border-line-style)|X|X|X|
|[Bottom](properties_CoordinatesAndSizing.md#bottom)|X|X|X|
|[Class](properties_Object.md#css-class)|X|X|X|
|[Collection or entity selection](properties_Object.md#collection-or-entity-selection)||X|X|
|[Column Auto-Resizing](properties_ResizingOptions.md#column-auto-resizing)|X|X|X|
|[Current item](properties_DataSource.md#current-item)|||X|
|[Current item position](properties_DataSource.md#current-item-position)|||X|
|[Data Source](properties_Object.md#data-source)|X|X|X|
|[Detail Form Name](properties_ListBox.md#detail-form-name)||X||
|[Display Headers](properties_Headers.md#display-headers)|X|X|X|
|[Display Footers](properties_Footers.md#display-footers)|X|X|X|
|[Double-click on row](properties_ListBox.md#double-click-on-row)||X||
|[Draggable](properties_Action.md#draggable)|X|X|X|
|[Droppable](properties_Action.md#droppable)|X|X|X|
|[Focusable](properties_Entry.md#focusable)|X|X|X|
|[Font](properties_Text.md#font)|X|X|X|
|[Font Color](properties_Text.md#font-color)|X|X|X|
|[Font Color Expression](properties_Text.md#font-color-expression)||X|X|
|[Font Size](properties_Text.md#font-size)|X|X|X|
|[Height (list box)](properties_CoordinatesAndSizing.md#height)|X|X|X|
|[Height (headers)](properties_Headers.md#height)|X|X|X|
|[Height (footers)](properties_Footers.md#height)|X|X|X|
|[Hide extra blank rows](properties_BackgroundAndBorder.md#hide-extra-blank-rows)|X|X|X|
|[Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle)|X|X|X|
|[Hide selection highlight](properties_Appearance.md#hide-selection-highlight)|X|X|X|
|[Hierarchical List Box](properties_Object.md#array-list-box)|X|||
|[Highlight Set](properties_ListBox.md#highlight-set)||X||
|[Horizontal Alignment](properties_Text.md#horizontal-alignment)|X|X|X|
|[Horizontal Line Color](properties_Gridlines.md#horizontal-line-color)|X|X|X|
|[Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding)|X|X|X|
|[Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar)|X|X|X|
|[Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing)|X|X|X|
|[Italic](properties_Text.md#italic)|X|X|X|
|[Left](properties_CoordinatesAndSizing.md#left)|X|X|X|
|[Master Table](properties_DataSource.md#master-table)||X||
|[Meta info expression](properties_Text.md#meta-info-expression)|||X|
|[Method](properties_Action.md#method)|X|X|X|
|[Movable Rows](properties_Action.md#movable-rows)|X|||
|[Named Selection](properties_DataSource.md#selection-name)||X||
|[Number of Columns](properties_ListBox.md#number-of-columns)|X|X|X|
|[Number of Locked Columns](properties_ListBox.md#number-of-locked-columns)|X|X|X|
|[Number of Static Columns](properties_ListBox.md#number-of-static-columns)|X|X|X|
|[Object Name](properties_Object.md#object-name)|X|X|X|
|[Right](properties_CoordinatesAndSizing.md#right)|X|X|X|
|[Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array)|X|||
|[Row Control Array](properties_ListBox.md#row-control-array)|X|||
|[Row Font Color Array](properties_Text.md#row-font-color-array)|X|||
|[Row Height](properties_CoordinatesAndSizing.md#row-height)|X|||
|[Row Height Array](properties_CoordinatesAndSizing.md#row-height-array)|X|||
|[Row Style Array](properties_Text.md#row-style-array)|X|||
|[Selected Items](properties_DataSource.md#selected-items)|||X|
|[Selection Mode](properties_ListBox.md#selection-mode)|X|X|X|
|[Single-Click Edit](properties_Entry.md#single-click-edit)|X|X|X|
|[Sortable](properties_Action.md#sortable)|X|X|X|
|[Standard action](properties_Action.md#standard-action)|X|||
|[Style Expression](properties_Text.md#style-expression)||X|X|
|[Top](properties_CoordinatesAndSizing.md#top)|X|X|X|
|[Transparent](properties_BackgroundAndBorder.md#transparent)|X|X|X|
|[Type](properties_Object.md#type)|X|X|X|
|[Underline](properties_Text.md#underline)|X|X|X|
|[Variable or Expression](properties_Object.md#variable-or-expression)|X|X||
|[Vertical Alignment](properties_Text.md#vertical-alignment)|X|X|X|
|[Vertical Line Color](properties_Gridlines.md#vertical-line-color)|X|X|X|
|[Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding)|X|X|X|
|[Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar)|X|X|X|
|[Vertical Sizing](properties_ResizingOptions.md#vertical-sizing)|X|X|X|
|[Visibility](properties_Display.md#visibility)|X|X|X|
|[Width](properties_CoordinatesAndSizing.md#width)|X|X|X|


> List box columns, headers and footers support specific properties.


## Supported Form Events {#supported-form-events}


|Form event|Additional Properties Returned (see [Form event](../commands/form-event.md) for main properties)| Comments|
|---|---|---|
|On After Edit|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On After Keystroke|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On After Sort|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li></ul>|*Compound formulas cannot be sorted. <br/>(e.g., This.firstName + This.lastName)*|
|On Alternative Click|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>|*Arrays list boxes only*|
|On Before Data Entry|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Before Keystroke|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Begin Drag Over|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Clicked|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Close Detail|<ul><li>[row](#additional-properties)</li></ul>|*Current Selection & Named Selection list boxes only*|
|On Collapse|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>|*Hierarchical list box only*|
|On Column Moved|<ul><li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li></ul>||
|On Column Resize|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li></ul>||
|On Data Change|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Delete Action|<ul><li>[row](#additional-properties)</li></ul>||
|On Display Detail|<ul><li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Double Clicked|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Drag Over|<ul><li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Drop|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Expand|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>|*Hierarchical list box only*|
|On Footer Click|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li></ul>|*Arrays, Current Selection & Named Selection list boxes only*|
|On Getting Focus|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>|*Additional properties returned only when editing a cell*|
|On Header Click|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li></ul>||
|On Load||
|On Losing Focus|<ul><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>|*Additional properties returned only when editing a cell has been completed*|
|On Mouse Enter|<ul><li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Mouse Leave|||
|On Mouse Move|<ul><li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li></ul>||
|On Open Detail|<ul><li>[row](#additional-properties)</li></ul>|*Current Selection & Named Selection list boxes only*|
|On Row Moved|<ul><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li></ul>|*Arrays list boxes only*|
|On Selection Change|||
|On Scroll|<ul><li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li></ul>||
|On Unload|||


### Additional Properties {#additional-properties}

Form events on list box or list box column objects may return the following additional properties:

|Property|	Type|	Description|
|---|---|---|
|area|text|List box object area ("header", "footer", "cell")|
|areaName|text|Name of the area|
|column|longint|Column number|
|columnName|text|Name of the column|
|footerName|text|Name of the footer|
|headerName|text|Name of the header|
|horizontalScroll|longint|Positive if scroll is towards the right, negative if towards the left|
|isRowSelected|boolean|True if row is selected, else False|
|newPosition|longint|New position of the column or row|
|newSize|longint|New size (in pixels) of the column or row|
|oldPosition|longint|Previous position of the column or row|
|oldSize|longint|Previous size (in pixels) of the column or row|
|row|longint|Row number|
|verticalScroll|longint|Positive if scroll is towards the bottom, negative if towards the top|

>If an event occurs on a "fake" column or row that doesn't exist, an empty string is typically returned.


