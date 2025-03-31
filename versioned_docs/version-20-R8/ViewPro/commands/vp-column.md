---
id: vp-column
title: VP Column
---

<!-- REF #_method_.VP Column.Syntax -->
**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Integer|->|Column index|
|columnCount| Integer|->|Number of columns|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of cells|<!-- END REF -->

#### Description

The `VP Column` command <!-- REF #_method_.VP Column.Summary -->returns a new range object referencing a specific column or columns<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the column range. Pass the column index (counting begins at 0)  in this parameter. If the range contains multiple columns, you should also use the optional *columnCount* parameter.

The optional *columnCount* parameter allows you to define the total number of columns of the range. *columnCount* must be greater than 0. If omitted, the value will be set to 1 by default and a column type range is created.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

#### Example  

You want to define a range object for the column shown below (on the current spreadsheet):

![](../../assets/en/ViewPro/cmd_vpColumn.PNG)

The code would be:

```4d
 $column:=VP Column("ViewProArea";3) // column D
```

#### See also

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)

