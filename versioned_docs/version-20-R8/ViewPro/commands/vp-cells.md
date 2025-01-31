---
id: vp-cells
title: VP Cells
---


<!-- REF #_method_.VP Cells.Syntax -->
**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R4|Added
</details>

<!-- REF #_method_.VP Cells.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Integer|->|Column index|
|row| Integer|->|Row index|
|columnCount| Integer|->|Number of columns|
|rowCount| Integer|->|Number of rows|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of cells|<!-- END REF -->

#### Description

The `VP Cells` command <!-- REF #_method_.VP Cells.Summary -->returns a new range object referencing specific cells<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the cell range. Pass the column index (counting begins at 0) in this parameter. If the range is within multiple columns, you should also use the *columnCount* parameter.

In the *row* parameter, you can define the row(s) of the cell range's position. Pass the row index (counting begins at 0) in this parameter. If the range is within multiple rows, you should also use the *rowCount* parameter.

The *columnCount* parameter allows you to define the total number of columns the range is within. *columnCount* must be greater than 0.

The *rowCount* parameter allows you to define the total number of rows the range is within. *rowCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

#### Example  

You want to define a range object for the following cells (on the current sheet):

![](../../assets/en/ViewPro/vp-cells.png)

The code would be:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

#### See also

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)

