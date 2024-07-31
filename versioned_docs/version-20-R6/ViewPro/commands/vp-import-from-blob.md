---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---


<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->
**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|vpBlob   |4D.Blob|->|Blob containing a 4D View Pro document|
|paramObj   |Object|->|Import options|<!-- END REF -->

#### Description

The `VP IMPORT FROM BLOB` command <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->imports the *vpBlob* in the 4D View Pro area *vpAreaName* and replaces its contents<!-- END REF -->. *vpBlob* must contain a 4D View Pro document previously saved as Blob either by using the [VP EXPORT TO BLOB](vp-export-to-blob.md) command or via the 4D View Pro interface. 

In *paramObj*, you can pass several properties:

|Property|Type|Description|
|---------|--- |------|
|formula|4D.Function|Callback method to be launched when the import has completed. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).|
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

[VP EXPORT TO BLOB](vp-export-to-blob.md)