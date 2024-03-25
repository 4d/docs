---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->
**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Object|<-|Object of cell spans in the defined range|<!-- END REF -->

#### Description

The `VP Get spans` command <!-- REF #_method_.VP Get spans.Summary -->retrieves the cell spans in the designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cell spans you want to retrieve. If *rangeObj* does not contain a cell span, an empty range is returned.

#### Example

You want to center the text for the spanned cells in this document:

![](../../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Search for all cell spans 
$range:=VP Get spans(VP All("ViewProArea"))
 
//center text
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### See also

[VP ADD SPAN](vp-add-span.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
