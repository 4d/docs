---
id: vp-export-to-object
title: VP Export to object
---


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

For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) paragraph.

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

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP IMPORT FROM OBJECT](vp-import-from-object.md)
