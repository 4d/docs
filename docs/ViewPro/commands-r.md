---
id: commands-r
title: R
---

> **Warning**: The commands on this page are not thread-safe.


### VP RECOMPUTE FORMULAS

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->
**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|<!-- END REF -->

#### Description

The `VP RECOMPUTE FORMULAS` command <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->immediately evaluates all formulas in *vpAreaName*<!-- END REF -->. By default, 4D automatically computes formulas when they are inserted, imported, or exported. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](#vp-flush-commands) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

>Be sure the [VP SUSPEND COMPUTING](#vp-suspend-computing) command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.


#### Example

To refresh all formulas in the workbook:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### See also

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP REMOVE NAME

<!-- REF #_method_.VP REMOVE NAME.Syntax -->
**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName|Text|->|4D View Pro area form object name|
|name|Text|->|Name of the named range or named formula to remove|
|scope|Integer|->|Target scope (default=current sheet)|<!-- END REF -->

#### Description

The `VP REMOVE NAME` command <!-- REF #_method_.VP REMOVE NAME.Summary -->removes the named range or named formula passed in the *name* parameter in the defined *scope*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the named range or named formula that you want to remove in *name*.

You can define where to remove the name in *scope* using either the sheet index (counting begins at 0) or the following constants:

* `vk current sheet`
* `vk workbook`  

#### Example

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```


#### See also

[VP Name](#vp-name)

### VP REMOVE SHEET

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->
**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|index  |Integer|->|Index of the sheet to remove|<!-- END REF -->

#### See also

[VP ADD SHEET](#vp-add-sheet)

#### Description

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area.

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.

>Indexing starts at 0.

#### Example

The document currently has three sheets:

![](../assets/en/ViewPro/vp-sheet-3.png)

Remove the third sheet:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->
**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|<!-- END REF -->

#### Description

The `VP REMOVE SPAN` command <!-- REF #_method_.VP REMOVE SPAN.Summary -->removes the span from the cells in *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range object of the cell span. The spanned cells in the range are divided into individual cells.  

#### Example

To remove all cell spans from this document:

![](../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))

 
  //remove the cell spans
 VP REMOVE SPAN($span)
```

Result:

![](../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### See also

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->
**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|styleName   |Text|->|Name of style to remove|
|sheet|Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE STYLESHEET` command <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->removes the style sheet passed in the *styleName* from the *vpAreaName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the style sheet to remove in the *styleName* parameter.

You can define where to remove the style in the optional *sheet* parameter using the sheet index (counting begins at 0) or with the following constants:

* `vk current sheet`
* `vk workbook`

#### Example

To remove the *GreenDashDotStyle* style object from the current sheet:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### See also

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)

### VP REMOVE TABLE

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R6|Added
</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->
**VP REMOVE TABLE** ( *vpAreaName* : Object; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName|Text|->|View Pro area name|
|tableName|Text|->|Name of the table to remove|
|options|Integer|->|Additional options|
|sheet|Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE TABLE` command <!-- REF #_method_.VP REMOVE TABLE.Summary -->removes a table<!-- END REF --> that you created with [VP CREATE TABLE](#vp-create-table).

In *vpAreaName*, pass the name of the area where the table to remove is located.

In *tableName*, pass the name of the table to remove.

In *options*, you can specify additional behavior. Possible values are:

|Constant|Value|Description|
|---|---|---|
|vk table remove all|0|Remove all including style and data|
|vk table remove style|1|Remove style but keep data|
|vk table remove data|2|Remove data but keep style|

Table names are defined at sheet level. You can specify where the table is located using the optional *sheet* parameter (indexing starts at 0).

#### Example

To remove the "people" table in the second sheet and keep the data in the cells:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### See also

[VP CREATE TABLE](#vp-create-table)


### VP REMOVE TABLE COLUMNS

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->
**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|column|Integer|->|Index in the table of the starting column to remove|
|count|Text|->|Number of columns to remove (must be >0) |
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE TABLE COLUMNS` command <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->removes one or *count* column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->. The command removes values and styles.

The command removes columns from the *tableName* table, NOT from the sheet. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved letf according to the number of removed columns.

If *tableName* does not exist, nothing happens.



#### Example

To remove two columns from 3rd column of the "dataTable" table:

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### See also

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)



### VP REMOVE TABLE ROWS

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->
**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|row|Integer|->|Index in the table of the starting row to remove|
|count|Text|->|Number of rows to remove (must be >0) |
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE TABLE ROWS` command <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->removes one or *count* row(s) from the specified *tableName* at the specified *row* index<!-- END REF -->. The command removes values and styles.

This command removes rows from the *tableName* table, NOT from the sheet. The total number of rows of the sheet is not impacted by the command. Data present below the table (if any) are automatically moved up according to the number of removed rows.

If the *tableName* table is bound to a [data context](#vp-set-data-context), the command removes element(s) from the collection. 

If *tableName* does not exist, nothing happens.


#### Example

To remove two rows from 3rd row of the "dataTable" table:

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### See also

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)





### VP RESET SELECTION

<!-- REF #_method_.VP RESET SELECTION.Syntax -->
**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP RESET SELECTION.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|sheet    |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP RESET SELECTION` command <!-- REF #_method_.VP RESET SELECTION.Summary -->deselects all cells, resulting in no current selection or visible active cell<!-- END REF -->.

> A default active cell (cell A1) remains defined for 4D View Pro commands.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

* `vk current sheet`
  
#### Example

You want to deselect all cells (the active cell and any selected cells):

```4d
VP RESET SELECTION("myVPArea")
```

#### See also

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)


### VP RESIZE TABLE

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->
**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|New range for the table|
|tableName|Text|->|Name of the table|<!-- END REF -->

#### Description

The `VP RESIZE TABLE` command <!-- REF #_method_.VP RESIZE TABLE.Summary -->changes the *tableName* size with regards to the *rangeObj*<!-- END REF -->.

The following rules apply:

- Headers must remain in the same row and the resulting table range must overlap the original table range.
- If the row count of the resized table is inferior to the initial row count, values inside cropped rows or columns are kept if they were not bound to a [data context](#vp-set-data-context), otherwise they are deleted.
- If the table expands on cells containing data:
	- if rows are added, data is deleted,
	- if columns are added, data are kept and are displayed in new columns.

If *tableName* does not exist, nothing happens.


#### Example

You create a table with a data context: 

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../assets/en/ViewPro/table-base.png)


You want to add one column before and after the table as well as two empty rows. You can write:

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../assets/en/ViewPro/table-resize.png)


#### See also

[VP CREATE TABLE](#vp-create-table)<br/>[VP Get table range](#vp-get-table-range)



### VP RESUME COMPUTING

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->
**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|<!-- END REF -->

#### Description

The `VP RESUME COMPUTING` command <!-- REF #_method_.VP RESUME COMPUTING.Summary --> restarts the calculation of formulas in *vpAreaName*<!-- END REF -->.

The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](#vp-suspend-computing) command.
  
#### Example

See example in [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### See also

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row

<!-- REF #_method_.VP Row.Syntax -->
**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|row|Integer|->|Row index|
|rowCount  |Integer|->|Number of rows|

|sheet  |Integer|->|Sheet index (current sheet if omitted)|
|Result |Object|<-|Range object of row(s)|<!-- END REF -->

#### Description

The `VP Row` command <!-- REF #_method_.VP Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *row* parameter defines the first row of the row range. Pass the row index (counting begins at 0) in this parameter. If the range contains multiple rows, you should also use the optional *rowCount* parameter.

The optional *rowCount* parameter allows you to define the total number of rows of the range. *rowCount* must be greater than 0. If omitted, the value will be set to 1 by default.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

* `vk current sheet`
  
#### Example

You want to define a range object for the row shown below (on the current spreadsheet):

![](../assets/en/ViewPro/cmd_vpRow.PNG)

You can write:

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

#### See also

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->
**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|<!-- END REF -->

#### Description

The `VP ROW AUTOFIT` command <!-- REF #_method_.VP ROW AUTOFIT.Summary -->automatically sizes the row(s) in *rangeObj* according to their contents<!-- END REF -->.

In *rangeObj*, pass a range object containing a range of the rows whose size will be automatically handled.
  
#### Example

The following rows don't correctly display the text:

![](../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Result:

![](../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### See also

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area

<!-- REF #_method_.VP Run offscreen area.Syntax -->
**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|parameters   |Object|->|Object containing the offscreen area's attributes|
|Result   |Mixed|<-|`.result` property of the `.onEvent` object, or Null if does not return a value|<!-- END REF -->

#### Description

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

|Property  |Type  |Description|
|---|---|---|
|area | text |The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., "OffscreenArea1"). |
|onEvent | object (formula)| A callback method that will be launched when the offscreen area is ready. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../Events/onVpReady.md), [`On Load`](../Events/onLoad.md), [`On Unload`](../Events/onUnload.md), [`On End URL Loading`](../Events/onEndUrlLoading.md), [`On URL Loading Error`](../Events/onUrlLoadingError.md), [`On VP Range Changed`](../Events/onVpRangeChanged.md), or [`On Timer`](../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](configuring.md#4d-view-pro-form-object-variable).|
|autoQuit | boolean | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.|
|timeout | number | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60 |
|result| mixed| Result of the processing (if any)|
|`<customProperty>` | mixed|  Any custom attribute to be available in the *onEvent* callback method. |


The following property is automatically added by the command if necessary:

|Property  |Type  |Description|
|---|---|---|
|timeoutReached| boolean|  Added with true value if timeout has been exceeded|

> The offscreen area is only available during the execution of the `VP Run offscreen area` command. It will automatically be destroyed once execution has ended.

The following commands can be used in the callback method:

* `ACCEPT`
* `CANCEL`
* `SET TIMER`
* `WA Evaluate JavaScript`
* `WA EXECUTE JAVASCRIPT FUNCTION`
  
#### Example 1

You want to create an offscreen 4D View Pro area and get the value of a cell:

```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
 This.filePath:=$path
 
// This function will be called on each event of the offscreen area 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

The *OffscreenArea* callback method:  

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Example 2

You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:


```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False
 


 // Stop the timer
   SET TIMER(0)
 
 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

The *OffscreenArea* callback method:  

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### See also

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
