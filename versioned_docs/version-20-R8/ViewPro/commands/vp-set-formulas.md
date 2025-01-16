---
id: vp-set-formulas
title: VP SET FORMULAS
---


<!-- REF #_method_.VP SET FORMULAS.Syntax -->
**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Cell range object|
|formulasCol |Collection|->|Collection of formulas|<!-- END REF -->

#### Description

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](vp-cell.md)) whose formula you want to specify. If *rangeObj* includes multiple ranges, only the first range is used.

The *formulasCol* is a two-dimensional collection:

* The first-level collection contains subcollections of formulas. Each subcollection defines a row.
* Each subcollection defines cell values for the row. Values must be text elements containing the formulas to assign to the cells.

> If the formula is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md) command.

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### Example 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Example 2

To remove formulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### See also

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)