---
id: commands-e
title: E
---

> **Warning**: The commands on this page are not thread-safe.


### VP EXPORT DOCUMENT

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v20 R2|Support of .sjs documents|
</details>


<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->
**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->


|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|filePath| Text|->|Pathname of the document|
|paramObj| Object|->|Export options|<!-- END REF -->

#### Description

The `VP EXPORT DOCUMENT` command <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exports the 4D View Pro object attached to the 4D View Pro area *vpAreaName* to a document on disk according to the *filePath* and *paramObj* parameters<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *filePath*, pass the destination path and name of the document to be exported. If you don't specify a path, the document will be saved at the same level as the Project folder.

You can specify the exported file's format by including an extension after the document's name:

* 4D View Pro (".4vp")
* Microsoft Excel (".xlsx")
* PDF (".pdf")
* CSV (".txt", or ".csv")
* [SpreadJS document](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (".sjs")

If the extension is not included, but the format is specified in *paramObj*, the exported file will have the extension that corresponds to the format, except for the CSV format (no extension is added in this case).

The optional *paramObj* parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed.

|Property| Type| Description|
|---|---|---
|format| text| (optional) When present, designates the exported file format: ".4vp" (default), ".csv", ".xlsx", ".pdf", or ".sjs". You can use the following constants:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li><li>`vk sjs format`</li>4D adds the appropriate extension to the file name if needed. If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used.|
|password| text| Microsoft Excel only (optional) - Password used to protect the MS Excel document|
|formula| 4D.Function |Callback method to be launched when the export has completed. Using a callback method is necessary when the export is asynchronous (which is the case for PDF and Excel formats) if you need some code to be executed after the export. The callback method must be passed with the [`Formula`](../API/FunctionClass.md#formula) command. See [Passing a callback method (formula)](#passing-a-callback-method-formula).|
|valuesOnly| boolean| Specifies that only the values from formulas (if any) will be exported.|
|includeFormatInfo| boolean| True to include formatting information, false otherwise (default is true). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to **false** allows reducing export time.|
|includeBindingSource| boolean | 4DVP and Microsoft Excel only. True (default) to export the current data context values as cell values in the exported document (data contexts themselves are not exported). False otherwise. Cell binding is always exported. For data context and cell binding management, see [VP SET DATA CONTEXT](#vp-set-data-context) and [VP SET BINDING PATH](#vp-set-binding-path).|
|sheet| number| PDF only (optional) - Index of sheet to export (starting from 0). -2=all visible sheets (**default**), -1=current sheet only|
|pdfOptions| object| PDF only (optional) - Options for pdf export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>creator</td><td>text</td><td>name of the application that created the original document from which it was converted.</td></tr><tr><td>title</td><td>text</td><td>title of the document.</td></tr><tr><td>author</td><td>text</td><td>name of the person who created that document.</td></tr><tr><td>keywords</td><td>text</td><td>keywords associated with the document.</td></tr><tr><td>subject</td><td>text</td><td>subject of the document.</td></tr></table></p>|
|csvOptions|object| CSV only (optional) - Options for csv export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>range</td><td>object</td><td>Range object of cells</td></tr><tr><td>rowDelimiter</td><td>text</td><td>Row delimiter. Default: `"\r\n"`</td></tr><tr><td>columnDelimiter</td><td>text</td><td>Column delimiter. Default: `","`</td></tr></table></p>|
|sjsOptions| object| SJS only (optional) - Options for sjs export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>includeAutoMergedCells</td><td>boolean</td><td>whether to include the automatically merged cells, default is false.</td></tr><tr><td>includeBindingSource</td><td>boolean</td><td>whether to include the binding source, default is true.</td></tr><tr><td>includeCalcModelCache</td><td>boolean</td><td>whether to include the extra data of calculation. Can be faster when open the file with those data, default is false.</td></tr><tr><td>includeEmptyRegionCells</td><td>boolean</td><td>whether to include any empty cells (cells with no data or only style) outside the used data range, default is true.</td></tr><tr><td>includeFormulas</td><td>boolean</td><td>whether to include the formulas, default is true.</td></tr><tr><td>includeStyles</td><td>boolean</td><td>whether to include the style, default is true.</td></tr><tr><td>includeUnusedNames</td><td>boolean</td><td>whether to include the unused custom names, default is true.</td></tr><tr><td>saveAsView</td><td>boolean</td><td>whether to apply the format string to exporting values, default is false.</td></tr></table></p>|
|`\<customProperty>`| any| Any custom property that will be available through the $3 parameter in the callback method.|

**Notes about Excel format**:

* When exporting a 4D View Pro document into a Microsoft Excel-formatted file, some settings may be lost. For example, 4D methods and formulas are not supported by Excel. You can verify other settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
* Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about PDF format**:

* When exporting a 4D View Pro document in PDF, the fonts used in the document are automatically embedded in the PDF file. Only OpenType fonts (.OTF or .TTF files) having a Unicode map can be embedded. If no valid font file is found for a font, a default font is used instead.
* Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about CSV format**:

* When exporting a 4D View Pro document to CSV, some settings may be lost, as only the text and values are saved.
* All the values are saved as double-quoted strings. For more information on delimiter-separated values, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).
* Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about SpreadJS file format**:

* [SpreadJS files](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) are zipped files. 
* Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used.

#### Passing a callback method (formula)  

When including the optional *paramObj* parameter, the command allows you to use the [`Formula`](../API/FunctionClass.md#formula) command to call a 4D method which will be executed once the export has completed. The callback method will receive the following values in local parameters:

|Parameter|  |Type| Description|
|---|---|---|---|
|param1|  |text| The name of the 4D View Pro area object|
|param2|  |text| The filepath of the exported 4D View Pro object|
|param3|  |object| A reference to the command's *paramObj*|
|param4|  |object| An object returned by the method with a status message|
||.success |boolean| True if export with success, False otherwise.|
||.errorCode |integer| Error code.|
||.errorMessage |text| Error message.|

#### Example 1

You want to export the contents of the "VPArea" area to a 4D View Pro document on disk:

```4d
var $docPath: Text
 
$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP is saved on your disk
```

#### Example 2

You want to export the current sheet in PDF:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheet:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Example 3

You want to export a 4D View Pro document in ".xlsx" format and call a method that will launch Microsoft Excel with the document open once the export has completed:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format //".xlsx"
 $params.valuesOnly:=True
 
 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** method:

```4d
 #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )
 
 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Example 4

You want to export the current sheet to a `.txt` file with pipe-separated values:

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Here's the result:

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv-result.png)

#### See also


[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP Column](#vp-import-document)<br/>[VP Print](#vp-print)

### VP EXPORT TO BLOB

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->
**VP EXPORT TO BLOB** ( *vpAreaName* : Text ; *paramObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|paramObj   |Object|->|Export options|<!-- END REF -->

#### Description

The `VP EXPORT TO BLOB` command <!-- REF #_method_.VP EXPORT TO BLOB.Summary -->exports the *vpAreaName* 4D View Pro document in a 4D.Blob according to the *paramObj* options.<!-- END REF --> The exported blob is available through the export callback. Exporting and importing 4D View Pro areas as blobs is fast and memory-efficient.

In *paramObj*, you can pass several properties:

|Property|Type|Description|
|---------|--- |------|
|formula|4D.Function|(mandatory) Callback method to be launched when the export has completed. See [Passing a callback method (formula)](#passing-a-callback-method-formula).|
|includeAutoMergedCells|Boolean|Whether to include the automatically merged cells when saving, default=false.|
|includeBindingSource|Boolean|Whether to include the binding source when saving, default=true.|
|includeCalcModelCache|Boolean|Whether to include the extra data of calculation. Can impact the speed of opening the file, default=false.|
|includeEmptyRegionCells|Boolean|Whether to include any empty cells(cells with no data or only style) outside the used data range, default=true|
|includeFormulas|Boolean|Whether to include the formula when saving, default=true.|
|includeStyles|Boolean|Whether to include the style when saving, default=true.|
|includeUnusedNames|Boolean|Whether to include the unused custom name when saving, default=true.|

|saveAsView|Boolean|Whether to apply the format string to exporting value when saving, default=false.|


The following parameters can be used in the callback method:

|Parameter| |Type|Description|
|:----|:----|:----|:----|
|param1| |text|The name of the 4D View Pro object|
|param2| |4D.blob|The exported blob|
|param3| |object|A reference to the command's *paramObj* parameter|
|param4| |object|An object returned by the method with a status message|
| |.success|boolean|True if export with success, False otherwise.|
| |.errorCode|integer|Error code.|
| |.errorMessage|text|Error message.


#### Example

The command `VP EXPORT TO BLOB` is asynchronous. You must create a callback method (named *VPBlobCallback* in our example) to use the export results.

```4d
//Export the VP document
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
//VPBlobCallback method
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // Save the document in a table
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### See also

[VP IMPORT FROM BLOB](#vp-import-from-blob)

### VP Export to object

<!-- REF #_method_.VP Export to object.Syntax -->
**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|options| Object|->|Export options|
|Result| Object|<-|4D View Pro object|<!-- END REF -->

#### Description

The `VP Export to object` command <!-- REF #_method_.VP Export to object.Summary --> returns the 4D View Pro object attached to the 4D View Pro area *vpAreaName*<!-- END REF -->. You can use this command for example to store the 4D View Pro area in a 4D database object field.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the *options* parameter, you can pass the following export options, if required:

|Property| Type| Description|
|---|---|---
|includeFormatInfo| Boolean | True (default) to include formatting information, false otherwise. Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to False allows reducing export time. |
|includeBindingSource| Boolean | True (default) to export the current data context values as cell values in the exported object (data contexts themselves are not exported). False otherwise. Cell binding is always exported.|

For more information on 4D View Pro objects, please refer to the [4D View Pro object](configuring.md#4d-view-pro-object) paragraph.

#### Example 1

You want to get the "version" property of the current 4D View Pro area:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Example 2

You want to export the area, excluding formatting information:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### See also

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)
