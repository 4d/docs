---
id: vp-get-formulas
title: VP Get formulas
---

<!-- REF #_method_.VP Get formulas.Syntax -->
**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Collection|<-|Collection of formula values|<!-- END REF -->

#### Description

The `VP Get formulas` command <!-- REF #_method_.VP Get formulas.Summary -->retrieves the formulas from a designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range whose formulas you want to retrieve. If *rangeObj* designates multiple ranges, the formula of the first range is returned. If *rangeObj* does not contain any formulas, the command returns an empty string.

The returned collection is two-dimensional:

* The first-level collection contains subcollections of formulas. Each subcollection reprensents a row.
* Each subcollection defines cell values for the row. Values are text elements containing the cell formulas.

#### Example

You want to retrieve the formulas in the Sum and Average columns from this document:

![](../../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

You can use this code:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### See also

[VP Get formula](vp-get-formula.md)<br/>
[VP Get values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
