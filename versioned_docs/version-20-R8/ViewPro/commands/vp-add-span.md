---
id: vp-add-span
title: VP ADD SPAN
---

<!-- REF #_method_.VP ADD SPAN.Syntax -->
**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|<!-- END REF -->

#### Description

The `VP ADD SPAN` command combines the cells in *rangeObj* as a single span of cells.

In *rangeObj*, pass a range object of cells. The cells in the range are joined to create a larger cell extending across multiple columns and/or rows. You can pass multiple cell ranges to create several spans at the same time. Note that if cell ranges overlap, only the first cell range is used.

> * Only the data in the upper-left cell is displayed. Data in the other combined cells is hidden until the span is removed.
> * Hidden data in spanned cells is accessible via formulas (beginning with the upper-left cell).

#### Example

To span the First quarter and Second quarter cells across the two cells beside them, and the South area cell across the two rows below it:

![initial-document](../../assets/en/ViewPro/vp-add-span.png)

```4d
 // First quarter range
 $q1:=VP Cells("ViewProArea";2;3;3;1)
 
  // Second quarter range
 $q2:=VP Cells("ViewProArea";5;3;3;1)
 
  // South area range
 $south:=VP Cells("ViewProArea";0;5;1;3)
 
 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../../assets/en/ViewPro/vp-add-span-2.png)

#### See also

[4D View Pro Range Object Properties](../getting-started.md#using-range-objects)<br/>
[VP Get spans](vp-get-spans.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)

