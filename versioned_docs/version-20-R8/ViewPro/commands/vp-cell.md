---
id: vp-cell
title: VP Cell
---

<!-- REF #_method_.VP Cell.Syntax -->
**VP Cell** ( *vpAreaName* : Text ; *column* : Integer ; *row* : Integer { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column|Integer|->|Column index|
|row|Integer|->|Row index|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of a single cell|
<!-- END REF -->

#### Description

The `VP Cell` command <!-- REF #_method_.VP Cell.Summary -->returns a new range object referencing a specific cell<!-- END REF -->.

> This command is intended for ranges of a single cell. To create a range object for multiple cells, use the [VP Cells](vp-cells.md) command.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the column of the cell range's position. Pass the column index in this parameter.

The *row* parameter defines the row of the cell range's position. Pass the row index in this parameter.

In the optional *sheet* parameter, you can indicate the index of the sheet where the range will be defined. If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

> indexing starts at 0.

#### Example  

You want to define a range object for the cell shown below (on the current spreadsheet):

![vp-cell](../../assets/en/ViewPro/cmd_vpCell.png)

The code would be:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### See also

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
