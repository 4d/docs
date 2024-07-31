---
id: vp-get-sheet-index
title: VP Get sheet index
---

<!-- REF #_method_.VP Get sheet index.Syntax -->
**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|name| Text|->|Sheet name|
|Function result|Integer|<-|Sheet index|<!-- END REF -->

#### Description

The `VP Get sheet index` command <!-- REF #_method_.VP Get sheet index.Summary -->returns the index of a sheet based on its name in *vpAreaName*.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

In *name*, pass the name of the sheet whose index will be returned. If no sheet named *name* is found in the document, the method returns -1.

>Indexing starts at 0.

#### Example

In the following document:

![](../../assets/en/ViewPro/vp-sheet-index-name.png)

Get the index of the sheet called "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea";"Total first quarter") //returns 2
```

#### See also

[VP Get sheet count](vp-get-sheet-count.md)<br/>
[VP Get sheet name](vp-get-sheet-name.md)
