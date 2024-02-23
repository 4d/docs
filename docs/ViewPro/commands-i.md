---
id: commands-i
title: I
---

> **Warning**: The commands on this page are not thread-safe.


### VP IMPORT DOCUMENT

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v20 R2|Support of .sjs documents|
</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->
**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|filePath   |Text|->|Pathname of the document|
|paramObj   |Object|->|Import options|<!-- END REF -->

#### Description

The `VP IMPORT DOCUMENT` command <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->imports and displays the document designated by *filePath* in the 4D View Pro area *vpAreaName*<!-- END REF -->. The imported document replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *filePath*, pass the path and name of the document to be imported. The following formats are supported :

* 4D View Pro documents (extension ".4vp")
* Microsoft Excel (extension ".xlsx")
* text documents (extension ".txt", ".csv", the document must be in utf-8)
* [SpreadJS documents](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (extension ".sjs")

If the document extension is not a recognized extension, such as `.4vp` or `.xlsx`, the document is considered a text document. You must pass a full path, unless the document is located at the same level as the Project folder, in which case you can just pass its name.

An error is returned if the `filePath` parameter is invalid, or if the file is missing or malformed.

The optional *paramObj* parameter allows you to define properties for the imported document:

|Parameter||Type|Description|
|---|---|---|---|
|formula|| 4D.Function | A callback method to be launched when the import has completed. You must use a formula returned by the [`Formula`](../API/FunctionClass.md#formula) command. See [Passing a callback method (formula)](#passing-a-callback-method-formula). |
|password|| text| Microsoft Excel only (optional) - The password used to protect a MS Excel document. |
|csvOptions||object|options for csv import |
||range|object|Cell range that contains the first cell where the data will be written. If the specified range is not a cell range, only the first cell of the range is used. |
||rowDelimiter|text| Row delimiter. If not present, the delimiter is automatically determined by 4D. |
||columnDelimiter|text|Column delimiter. Default: "," |
|sjsOptions||object|options for sjs import |
||calcOnDemand|boolean|Whether to calculate formulas only when they are demanded, default is false. |
||dynamicReferences|boolean|Whether to calculate functions with dynamic references, default is true. |
||fullRecalc|boolean|Whether to calculate after loading the json data, false by default. |
||includeFormulas|boolean|Whether to include the formulas when loading, default is true. |
||includeStyles|boolean| Whether to include the styles when loading, default is true. |
||includeUnusedStyles|boolean|Whether to include the unused name styles when converting excel xml to the json, default is true. |
||openMode|integer|<li>0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. When opening file, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly.</li>|

:::note Notes

- Importing files in .xslx, .csv, and .sjs formats is **asynchronous**. With these formats, you must use the `formula` attribute if you want to start an action at the end of the document processing.
- When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- For more information on the CSV format and delimiter-separated values in general, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

:::

#### Example 1

You want to import a default 4D View Pro document stored on the disk when the form is open:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //4D View Pro area loaded and ready
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Example 2

You want to import a password protected Microsoft Excel document into a 4D View Pro area:

```4d
	//Import code
var $o : Object
$o:=New object
$o.password:="excel123"
$o.formula:=Formula(myImport)
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

```4d
	//myImport callback method
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("Import successfully completed")
Else 
     ALERT("Error: "+$status.errorMessage)
End if
```


#### Example 3

You want to import a `.txt` file that uses a comma (",") as delimiter:

![example-import-csv](../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result:
![example-import-csv](../assets/en/ViewPro/vp-import-document-csv-result.png)

#### See also


[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)



### VP IMPORT FROM BLOB

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->
**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|vpBlob   |4D.Blob|->|Blob containing a 4D View Pro document|
|paramObj   |Object|->|Import options|<!-- END REF -->

#### Description

The `VP IMPORT FROM BLOB` command <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->imports the *vpBlob* in the 4D View Pro area *vpAreaName* and replaces its contents<!-- END REF -->. *vpBlob* must contain a 4D View Pro document previously saved as Blob either by using the [VP EXPORT TO BLOB](#vp-export-to-blob) command or via the 4D View Pro interface. 

In *paramObj*, you can pass several properties:

|Property|Type|Description|
|---------|--- |------|
|formula|4D.Function|Callback method to be launched when the import has completed. See [Passing a callback method (formula)](#passing-a-callback-method-formula).|
|calcOnDemand|Boolean|Whether to calculate formulas only when they are demanded, default=false.|
|dynamicReferences|Boolean|Whether to calculate functions with dynamic reference, default=true.|
|fullRecalc|Boolean|Whether to calculate after loading the json data, false by default.|
|includeFormulas|Boolean|Whether to include the formula when loading, default=true.|
|includeStyles|Boolean|Whether to include the style when loading, default=true.|
|includeUnusedStyles|Boolean|Whether to include the unused name style when converting excel xml to the json, default=true.|
|openMode|Integer|can be: <br/>0: normal open mode, without lazy and incremental. When opening document, UI and UI event could be refreshed and responsive at specific time points. <br/>1: lazy open mode. When opening document, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used. <br/>2: incremental open mode. When opening document, UI and UI event could be refreshed and responsive directly.|

The following parameters can be used in the callback method:

|Parameter| |Type|Description|
|:----|:----|:----|:----|
|param1| |text|The name of the 4D View Pro area object|
|param2| |4D.Blob|The imported blob|
|param3| |object|A reference to the command's *paramObj* parameter|
|param4| |object|An object returned by the method with a status message|
| |.success|boolean|True if import with success, False otherwise.|
| |.errorCode|integer|Error code.|
| |.errorMessage|text|Error message.|


#### Example

You want to import into the "ViewProArea" a 4D View Pro document previously saved as Blob in the first entity of the Table dataclass.

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

#### See also

[VP EXPORT TO BLOB](#vp-export-to-blob)


### VP IMPORT FROM OBJECT

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->
**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|viewPro   |Object|->|4D View Pro object|<!-- END REF -->

#### Description

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. The imported object contents replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *viewPro*, pass a valid 4D View Pro object. This object can have been created using [VP Export to object](#vp-export-to-object) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](configuring.md#4d-view-pro-object) section.

An error is returned if the *viewPro* object is invalid.

#### Example

You want to import a spreadsheet that was previously saved in an object field:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### See also

[VP Export to object](#vp-export-to-object)

### VP INSERT COLUMNS

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->
**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|<!-- END REF -->

#### Description

The `VP INSERT COLUMNS` command <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. If the number of column to insert is omitted (not defined), a single column is inserted.

New columns are inserted on the left, directly before the starting column in the *rangeObj*.

#### Example

To insert three columns before the second column:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

The results is:

![](../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### See also

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)

### VP INSERT ROWS

<!-- REF #_method_.VP INSERT ROWS.Syntax -->
**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|<!-- END REF -->

#### Description

The `VP INSERT ROWS` command <!-- REF #_method_.VP INSERT ROWS.Summary -->inserts rows defined by the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. If the number of rows to insert is omitted (not defined), a single row is inserted.

New rows are inserted directly before the first row in the *rangeObj*.

#### Example

To insert 3 rows before the first row:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

The results is:

![](../assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### See also

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

### VP INSERT TABLE COLUMNS

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->
**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|column|Integer|->|Index in the table of the starting column to insert|
|count|Text|->|Number of columns to add (must be >0) |
|insertAfter|Integer|->|`vk table insert before` or `vk table insert after` *column*|
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP INSERT TABLE COLUMNS` command <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserts one or *count* empty column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->. 

When a column has been inserted with this command, you typically modify its contents using the [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes) command. 

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the *column* index:

|Constant|Value|Description|
|---|---|---|
|`vk table insert before`|0|Insert column(s) before the *column* (default if omitted)|
|`vk table insert after`|1|Insert column(s) after the *column*|

This command inserts some columns in the *tableName* table, NOT in the sheet. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns.

If *tableName* does not exist or if there is not enough space in the sheet, nothing happens.


#### Example

See examples for [VP INSERT TABLE ROWS](#vp-insert-table-rows) and [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes).


#### See also

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)



### VP INSERT TABLE ROWS

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->
**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|row|Integer|->|Index in the table of the starting row to insert|
|count|Text|->|Number of rows to add (must be >0) |
|insertAfter|Integer|->|`vk table insert before` or `vk table insert after` *row*|
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP INSERT TABLE ROWS` command <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->inserts one or *count* empty row(s) in the specified *tableName* at the specified *row* index<!-- END REF -->. 

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the row(s) must be inserted before or after the *row* index:

|Constant|Value|Description|
|---|---|---|
|`vk table insert before`|0|Insert row(s) before the *row* (default if omitted)|
|`vk table insert after`|1|Insert row(s) after the *row*|

This command inserts some rows in the *tableName* table, NOT in the sheet. The total number of rows of the sheet is not impacted by the command. Data present below the table (if any) are automatically moved down according to the number of added rows.

If the *tableName* table is bound to a [data context](#vp-set-data-context), the command inserts new, empty element(s) in the collection. 

If *tableName* does not exist or if there is not enough space in the sheet, nothing happens.




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

You want to insert two rows and two columns in the table, you can write:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../assets/en/ViewPro/table-insert.png)




#### See also

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)
