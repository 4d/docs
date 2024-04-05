---
id: vp-import-document
title: VP IMPORT DOCUMENT
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R2|Support of .sjs documents|
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
|formula|| 4D.Function | A callback method to be launched when the import has completed. You must use a formula returned by the [`Formula`](../../API/FunctionClass.md#formula) command. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula). |
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

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

#### See also


[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)

