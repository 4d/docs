---
id: vp-get-values
title: VP Get values
---

<!-- REF #_method_.VP Get values.Syntax -->
**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|Result  |Collection|<-|Collection of values|<!-- END REF -->

#### Description

The `VP Get values` command <!-- REF #_method_.VP Get values.Summary --> retrieves the values from the designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range whose values you want to retrieve. If *rangeObj* includes multiple ranges, only the first range is used.

The collection returned by `VP Get values` contains a two-dimensional collection:

* Each element of the first-level collection represents a row and contains a subcollection of values
* Each subcollection contains cell values for the row. Values can be Integer, Real, Boolean, Text, Object, or Null. If a value is a date or time, it is returned in an object with the following properties:

 |Property |Type| Description|
 |---|---|---|
 |value |Date| Value in the cell (except- time)|
 |time |Real| Time value (in seconds) if the value is of the js date type|

Dates or times are treated as a datetime and completed as follows:

* time value - the date portion is completed as December 30, 1899
* date value - the time portion is completed as midnight (00:00:00:000)

#### Example

You want to get values from C4 to G6:

![](../../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### See also

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
