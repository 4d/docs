---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---


<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->
**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|visible|Boolean|->|Print lines displayed if True (default), hidden if False|
|sheet|Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area.

In *visible*, pass `True` to display the print lines, and `False` to hide them. `True` is passed by default.

In *sheet*, pass the index of the target sheet. If no index is specified, the command applies to the current sheet.


> Indexing starts at 0.

The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks.

#### Example

The following code displays print lines in a document's second sheet:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

With a page break:

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### See also

[4D Get show print lines](vp-get-show-print-lines.md)
