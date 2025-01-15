---
id: vp-set-sheet-count
title: VP SET SHEET COUNT
---


<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->
**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|number |Integer|->|Number of sheets|<!-- END REF -->

#### Description

The `VP SET SHEET COUNT` command <!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

In `number`, pass a number corresponding to how many sheets the document will contain after the command is executed.

>**Warning**: The command will delete sheets if the previous amount of sheets in your document is superior to the number passed. For example, if there are 5 sheets in your document and you set the sheet count to 3, the command will delete sheets number 4 and 5.

#### Example

The document currently has one sheet:

![](../../assets/en/ViewPro/vp-sheet-1.png)

To set the number of sheets to 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

#### See also

[VP Get sheet count](vp-get-sheet-count.md)