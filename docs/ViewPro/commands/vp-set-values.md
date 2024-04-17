---
id: vp-set-values
title: VP SET VALUES
---


<!-- REF #_method_.VP SET VALUES.Syntax -->
**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|valuesCol  |Collection|->|Collection of values|<!-- END REF -->

#### Description

The `VP SET VALUES` command <!-- REF #_method_.VP SET VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](vp-cell.md)) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.

>* If *rangeObj* is not a cell range, only the first cell of the range is used.
>* If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

The *valuesCol* parameter is two-dimensional:


* The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row.
* Each subcollection defines cell values for the row. Values can be Integer, Real, Boolean, Text, Date, Null, or Object. If the value is an object, it can have the following properties:

 |Property| Type |Description|
 |---|---|---|
 |value| Integer, Real, Boolean, Text, Date, Null|  Value in the cell (except- time)|
 |time| Real| Time value (in seconds)|

#### Example

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### See also

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
