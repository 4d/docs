---
id: vp-remove-sheet
title: VP REMOVE SHEET
---


<!-- REF #_method_.VP REMOVE SHEET.Syntax -->
**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|index  |Integer|->|Index of the sheet to remove|<!-- END REF -->

#### Description

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area.

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.

>Indexing starts at 0.

#### Example

The document currently has three sheets:

![](../../assets/en/ViewPro/vp-sheet-3.png)

Remove the third sheet:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

#### See also

[VP ADD SHEET](vp-add-sheet.md)