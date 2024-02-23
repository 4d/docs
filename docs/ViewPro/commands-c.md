---
id: commands-c
title: C
---

> **Warning**: The commands on this page are not thread-safe.


### VP Cell

<!-- REF #_method_.VP Cell.Syntax -->
**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column|Longint|->|Column index|
|row|Longint|->|Row index|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of a single cell|
<!-- END REF -->

#### Description

The `VP Cell` command <!-- REF #_method_.VP Cell.Summary -->returns a new range object referencing a specific cell<!-- END REF -->.

> This command is intended for ranges of a single cell. To create a range object for multiple cells, use the [VP Cells](#vp-cells) command.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the column of the cell range's position. Pass the column index in this parameter.

The *row* parameter defines the row of the cell range's position. Pass the row index in this parameter.

In the optional *sheet* parameter, you can indicate the index of the sheet where the range will be defined. If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

> indexing starts at 0.

#### Example  

You want to define a range object for the cell shown below (on the current spreadsheet):

![vp-cell](../assets/en/ViewPro/cmd_vpCell.png)

The code would be:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### See also

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Cells

<!-- REF #_method_.VP Cells.Syntax -->
**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #_method_.VP Cells.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Integer|->|Column index|
|row| Integer|->|Row index|
|columnCount| Integer|->|Number of columns|
|rowCount| Integer|->|Number of rows|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of cells|<!-- END REF -->

#### Description

The `VP Cells` command <!-- REF #_method_.VP Cells.Summary -->returns a new range object referencing specific cells<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the cell range. Pass the column index (counting begins at 0) in this parameter. If the range is within multiple columns, you should also use the *columnCount* parameter.

In the *row* parameter, you can define the row(s) of the cell range's position. Pass the row index (counting begins at 0) in this parameter. If the range is within multiple rows, you should also use the *rowCount* parameter.

The *columnCount* parameter allows you to define the total number of columns the range is within. *columnCount* must be greater than 0.

The *rowCount* parameter allows you to define the total number of rows the range is within. *rowCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

#### Example  

You want to define a range object for the following cells (on the current sheet):

![](../assets/en/ViewPro/vp-cells.png)

The code would be:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

#### See also

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Column

<!-- REF #_method_.VP Column.Syntax -->
**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Integer|->|Column index|
|columnCount| Integer|->|Number of columns|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of cells|<!-- END REF -->

#### Description

The `VP Column` command <!-- REF #_method_.VP Column.Summary -->returns a new range object referencing a specific column or columns<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the column range. Pass the column index (counting begins at 0)  in this parameter. If the range contains multiple columns, you should also use the optional *columnCount* parameter.

The optional *columnCount* parameter allows you to define the total number of columns of the range. *columnCount* must be greater than 0. If omitted, the value will be set to 1 by default and a column type range is created.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

#### Example  

You want to define a range object for the column shown below (on the current spreadsheet):

![](../assets/en/ViewPro/cmd_vpColumn.PNG)

The code would be:

```4d
 $column:=VP Column("ViewProArea";3) // column D
```

#### See also

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP COLUMN AUTOFIT

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->
**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|<!-- END REF -->

#### Description

The `VP COLUMN AUTOFIT` command <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->automatically sizes the column(s) in *rangeObj* according to their contents<!-- END REF -->.

In *rangeObj*, pass a range object containing a range of the columns whose size will be automatically handled.

#### Example  

The following columns are all the same size and don't display some of the text:

![](../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

Selecting the columns and running this code:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... resizes the columns to fit the size of the contents:

![](../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### See also

[VP ROW AUTOFIT](#vp-row-autofit)

### VP Combine ranges

<!-- REF #_method_.VP Combine ranges.Syntax -->
**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
|otherRangeObj| Object|->|Range object|
|Result| Object|<-|Object containing a combined range|<!-- END REF -->

#### Description

The `VP Combine Ranges` command <!-- REF #_method_.VP Combine ranges.Summary -->returns a new range object that incorporates two or more existing range objects<!-- END REF -->. All of the ranges must be from the same 4D View Pro area.

In *rangeObj*, pass the first range object.

In *otherRangeObj*, pass another range object(s) to combine with *rangeObj*.

>The command incorporates *rangeObj* and *otherRangeObj* objects by reference.

#### Example  

You want to combine cell, column, and row range objects in a new, distinct range object:

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // column D
 $row:=VP Row("ViewProArea";9) // row 10
 
 $combine:=VP Combine ranges($cell;$column;$row)
```

#### See also

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP Convert from 4D View

<!-- REF #_method_.VP Convert from 4D View.Syntax -->
**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|4DViewDocument| Blob|->|4D View document|
|Result| Object|<-|4D View Pro object<!-- END REF -->

#### Description

The `VP Convert from 4D View` command <!-- REF #_method_.VP Convert from 4D View.Summary -->allows you to convert a legacy 4D View document into a 4D View Pro object<!-- END REF -->.

>This command does not require that the legacy 4D View plug-in be installed in your environment.

In the *4DViewDocument* parameter, pass a BLOB variable or field containing the 4D View document to convert. The command returns a 4D View Pro object into which all the information originally stored within the 4D View document is converted to 4D View Pro attributes.

#### Example  

You want to get a 4D View Pro object from a 4D View area stored in a BLOB:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```

### VP Convert to picture

<!-- REF #_method_.VP Convert to picture.Syntax -->
**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpObject| Object|->|4D View Pro object containing the area to convert|
|rangeObj| Object|->|Range object|
|Result| Object|<-|SVG picture of the area|<!-- END REF -->

#### Description

The `VP Convert to picture` command <!-- REF #_method_.VP Convert to picture.Summary -->converts the *vpObject* 4D View Pro object (or the *rangeObj* range within *vpObject*) to a SVG picture<!-- END REF -->.

This command is useful, for example:

* to embed a 4D View Pro document in an other document such as a 4D Write Pro document
* to print a 4D View Pro document without having to load it into a 4D View Pro area.

In *vpObject*, pass the 4D View Pro object that you want to convert. This object must have been previously parsed using [VP Export to object](#vp-export-to-object) or saved using [VP EXPORT DOCUMENT](#vp-export-document).  

>SVG conversion process requires that expressions and formats (cf. [Cell Format](configuring.md#cell-format)) included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. If you convert a document that was not evaluated beforehand, expressions or formats may be rendered in an unexpected way.

In *rangeObj*, pass a range of cells to convert. By default, if this parameter is omitted, the whole document contents are converted.

Document contents are converted with respect to their viewing attributes, including formats (see note above), visibility of headers, columns and rows. The conversion of the following elements is supported:

* Text : style / font / size / alignment / orientation / rotation / format
* Cell background : color / image
* Cell borders : thickness / color / style
* Cell merge
* Pictures
* Row height
* Column width
* Hidden columns / rows.

>Gridline visibility depends on document attribute defined with [VP SET PRINT INFO](#vp-set-print-info).

#### Function result

The command returns a picture in SVG format.

#### Example  

You want to convert a 4D View Pro area in SVG, preview the result, and send it to a picture variable:

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //export the whole area
```

#### See also

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Copy to object

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R4|Added
</details>

<!-- REF #_method_.VP Copy to object.Syntax -->
**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|Range object|
|options|Object|->|Additional options|
|Result|Object|<-|Object returned. Contains the copied data|<!-- END REF -->


#### Description

The `VP Copy to object` command <!-- REF #_method_.VP Copy to object.Summary -->copies the contents, style and formulas from *rangeObj* to an object<!-- END REF -->.

In *rangeObj*, pass the cell range with the values, formatting, and formulas to copy. If *rangeObj* is a combined range, only the first one is used.

You can pass an optional *options* parameter with the following properties:

|Property|Type|Description|
|---|---|---|
|copy|Boolean|*True* (default) to keep the copied values, formatting and formulas after the command executes. *False* to remove them.|
|copyOptions|Longint|Specifies what is copied or moved. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p>|

The paste options defined in the [workbook options](#vp-set-workbook-options) are taken into account.

The command returns an object that contains the copied data.

#### Example

This code sample first stores the contents, values, formatting and formulas from a range to an object, and then pastes them in another range:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

#### See also




[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP CREATE TABLE

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R8|Support of theme options: `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme`
|v19 R7|Support of `allowAutoExpand` option
|v19 R6|Added
</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->
**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|Range object|
|tableName|Text|->|Name for the table|
|source|Text|->|Data context property name to display in the table|
|options|[cs.ViewPro.TableOptions](classes.md#tableoptions)|->|Additional options|<!-- END REF -->

#### Description

The `VP CREATE TABLE` command <!-- REF #_method_.VP CREATE TABLE.Summary -->creates a table in the specified range<!-- END REF -->. You can create a table in a range of cells to make managing and analyzing a group of related data easier. A table typically contains related data in rows and columns, and takes advantage of a [data context](#vp-set-data-context).

![](../assets/en/ViewPro/vp-create-table.png)

In *rangeObj*, pass the cell range where the table will be created.

In *tableName*, pass a name for the table. The name must:  

* be unique in the sheet
* include at least 5 characters
* not include spaces or start with a number

In *source*, you can pass a property name of a [data context](#vp-set-data-context) to display its data in the table. This binds the table to the data context. When the data context is updated, the data displayed in the table is updated accordingly. The *source* property must contain a collection of objects and each element represents a row. 

  * If you don't specify a *source*, the command creates an empty table with the size defined in *rangeObj*. 
  * If the specified *source* cannot be fully displayed in the document, no table is created.

In the *options* parameter, pass an object of the [`cs.ViewPro.TableOptions` class](classes.md#tableoptions) that contains the table properties to set. 

Within the *options* object, the *tableColumns* collection determines the structure of the table's columns. The length of the *tableColumns* collection must be equal to the range column count:

  * When the column count in *rangeObj* exceeds the number of columns in *tableColumns*, the table is filled with additional empty columns.
  * When the column count in *rangeObj* is inferior to the number of *tableColumns*, the table displays a number of columns that match the range's column count.

If you pass a *source* but no *tableColumn* option, the command generates columns automatically. In this case, *rangeObj* must be a cell range. Otherwise, the first cell of the range is used. When generating columns automatically, the following rules apply:

* If the data passed to the command is a collection of objects, the property names are used as column titles. For example:

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```
Here the titles of the columns would be `LastName` and `FirstName`.

* If the data passed to the command is a collection of scalar values, it must contain a collection of subcollections:

  * The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row. The number of values in the first subcollection determines how many columns are created.
  * The subcollections' indices are used as column titles.
  * Each subcollection defines cell values for the row. Values can be `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` or `Picture`. A `Time` value must be an a object containing a time attribute, as described in [VP SET VALUE](#vp-set-value). 

> This only works when generating columns automatically. You cannot use a collection of scalar data with the *tableColumns* option.


#### Example

To create a table using a data context:

```4d
// Set a data context
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Define the columns for the table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))

// Create a table from the "people" collection
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Here's the result:

![](../assets/en/ViewPro/vp-create-table.png)

#### See also

[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP Get table column index](#vp-get-table-column-index)<br/>[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE](#vp-remove-table)<br/>[VP RESIZE TABLE](#vp-resize-table)<br/>[VP SET DATA CONTEXT](#vp-set-data-context)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP SET TABLE THEME](#vp-set-table-theme)

