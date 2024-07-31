---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->
**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|Result  |Object|<-|Object containing a cell value|<!-- END REF -->

#### Description

The `VP Get value` command <!-- REF #_method_.VP Get value.Summary -->retrieves a cell value from a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range whose value you want to retrieve.

#### Returned object

The object returned will contain the `value` property, and, in case of a js date value, a `time` property:

|Property |Type |Description|
|---|---|---|
|value |Integer, Real, Boolean, Text, Date, Object |Value in the *rangeObj* (except- time)|
|time |Real |Time value (in seconds) if the value is of the js date type|

If the object returned includes a date or time, it is treated as a datetime and completed as follows:

* time value - the date portion is completed as December 30, 1899 in dd/MM/yyyy format (30/12/1899)
* date value - the time portion is completed as midnight in HH:mm:ss format (00:00:00)

If *rangeObj* contains multiple cells or multiple ranges, the value of the first cell is returned. The command returns a null object if the cell is empty.



#### Example

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET VALUE($cell;New object("value";Uppercase($value.value)))
End if
```

#### See also

[VP Get values](vp-get-values.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET VALUES](vp-set-values.md)
