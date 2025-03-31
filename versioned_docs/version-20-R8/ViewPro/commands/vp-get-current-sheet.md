---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->
**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|Function result|Integer|<-|Index of the current sheet|<!-- END REF -->

#### Description

The `VP Get current sheet` command <!-- REF #_method_.VP Get current sheet.Summary -->returns the index of the current sheet in *vpAreaName*. The current sheet is the selected sheet in the document.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

> Indexing starts at 0.

#### Example

When the third sheet is selected:

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

The command returns 2:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### See also

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
