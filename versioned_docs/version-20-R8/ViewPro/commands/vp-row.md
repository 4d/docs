---
id: vp-row
title: VP Row
---

<!-- REF #_method_.VP Row.Syntax -->
**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|row|Integer|->|Row index|
|rowCount  |Integer|->|Number of rows|
|sheet  |Integer|->|Sheet index (current sheet if omitted)|
|Result |Object|<-|Range object of row(s)|<!-- END REF -->

#### Description

The `VP Row` command <!-- REF #_method_.VP Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *row* parameter defines the first row of the row range. Pass the row index (counting begins at 0) in this parameter. If the range contains multiple rows, you should also use the optional *rowCount* parameter.

The optional *rowCount* parameter allows you to define the total number of rows of the range. *rowCount* must be greater than 0. If omitted, the value will be set to 1 by default.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

* `vk current sheet`
  
#### Example

You want to define a range object for the row shown below (on the current spreadsheet):

![](../../assets/en/ViewPro/cmd_vpRow.PNG)

You can write:

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

#### See also

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)

