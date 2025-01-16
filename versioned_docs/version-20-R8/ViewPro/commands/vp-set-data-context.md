---
id: vp-set-data-context
title: VP SET DATA CONTEXT
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Added|

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->
**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|dataObj|Object|->|Data object to load in the data context|
|dataColl|Collection|->|Data collection to load in the data context|
|options |Object|->|Additional options|
|sheet|Integer|->|Sheet index|<!-- END REF -->

#### Description

The `VP SET DATA CONTEXT` command <!-- REF #_method_.VP SET DATA CONTEXT.Summary -->sets the data context of a sheet<!-- END REF -->. A data context is an object or a collection bound to a worksheet, and whose contents can be used to automatically fill the sheet cells, either by using an autogenerate option or the [VP SET BINDING PATH](vp-set-binding-path.md) method. On the other hand, the [VP Get data context](vp-get-data-context.md) command can return a context containing user modifications.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *dataObj* or *dataColl*, pass an object or a collection containing the data to load in the data context. Images are converted to data URI schemes.

To pass a time value in *dataObj* or *dataColl*, encapsulate it in an object with the following properties (see [example 4](#example-4---date-and-time-syntax)):

|Property|Type|Description|
|---|---|---|
|value| Integer, Real, Boolean, Text, Date, Null| Value to put in the context|
|time |Real |Time value (in seconds) to put in the context|

In *options*, you can pass an object that specifies additional options. Possible properties are:

|Property|Type|Description|
|---|---|---|
|reset |Object|True to reset the sheet's contents before loading the new context, False (default) otherwise.|
|autoGenerateColumns|Object| Only used when data is a collection. True (default) to specify that columns must be generated automatically when the data context is bound. In this case, the following rules apply: <ul><li>If *dataColl* is a collection of objects, attribute names are used as column titles (see example 2).</li><li>If *dataColl* contains subcollections of scalar values, each subcollection defines the values in a row (see example 3). The first subcollection determines how many columns are created.</li></ul>|

In *sheet*, pass the index of the sheet that will receive the data context. If no index is passed, the context is applied to the current sheet.

If you export your document to an object using [VP Export to object](vp-export-to-object.md), or to a 4DVP document using [VP EXPORT DOCUMENT](vp-export-document.md), the `includeBindingSource` option lets you copy the contents of the current contexts as cell values in the exported object or document. For more details, refer to the description of those methods.

#### Example

Pass an object and bind the context data to cells in the first row:

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Example 2

Pass a collection of objects and generate columns automatically:


```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-2.png)

#### Example 3

The *data* passed as a parameter is a collection that contains subcollections. Each subcollection defines the contents of a row:

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // 5 columns are created
$data.push(New collection)  // Second row is empty
$data.push(New collection(4; 5; Null; "hello"; "world"))  // Third row has 5 values
$data.push(New collection(6; 7; 8; 9))  // Fourth row has 4 values

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-3.png)

#### Example 4 - Date and time syntax

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// Dates can be passed as scalar values
$data.push(New collection("Date"; Current date)) 

// Time values must be passed as object attributes
$data.push(New collection("Time"; New object("time"; 5140)))

// Date + time example
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140))) 

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

Here's the result once the columns are generated:

![](../../assets/en/ViewPro/vp-set-data-context-date-time.png)

#### See also

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)