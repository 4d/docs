---
id: vp-convert-to-picture
title: VP Convert to picture
---


<!-- REF #_method_.VP Convert to picture.Syntax -->
**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpObject| Object|->|4D View Pro object containing the area to convert|
|rangeObj| Object|->|Range object|
|Result| Picture|<-|SVG picture of the area|<!-- END REF -->

#### Description

The `VP Convert to picture` command <!-- REF #_method_.VP Convert to picture.Summary -->converts the *vpObject* 4D View Pro object (or the *rangeObj* range within *vpObject*) to a SVG picture<!-- END REF -->.

This command is useful, for example:

* to embed a 4D View Pro document in an other document such as a 4D Write Pro document
* to print a 4D View Pro document without having to load it into a 4D View Pro area.

In *vpObject*, pass the 4D View Pro object that you want to convert. This object must have been previously parsed using [VP Export to object](vp-export-to-object.md) or saved using [VP EXPORT DOCUMENT](vp-export-document.md).  

>SVG conversion process requires that expressions and formats (cf. [Cell Format](../configuring.md#cell-format)) included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. If you convert a document that was not evaluated beforehand, expressions or formats may be rendered in an unexpected way.

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

>Gridline visibility depends on document attribute defined with [VP SET PRINT INFO](vp-set-print-info.md).

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

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)

