---
id: vp-all
title: VP All
---

<!-- REF #_method_.VP All.Syntax -->
**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of all cells|<!-- END REF -->

#### Description

The `VP ALL` command <!-- REF #_method_.VP All.Summary -->returns a new range object referencing all cells<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used.

#### Example  

You want to define a range object for all of the cells of the current spreadsheet:

```4d
$all:=VP All("ViewProArea") // all cells of the current sheet
```

#### See also

[VP Cell](vp-cell)<br/>
[VP Cells](vp-cells)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
