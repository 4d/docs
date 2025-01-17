---
id: vp-delete-rows
title: VP DELETE ROWS
---

<!-- REF #_method_.VP DELETE ROWS.Syntax -->
**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|<!-- END REF -->

#### Description

The `VP DELETE ROWS` command <!-- REF #_method_.VP DELETE ROWS.Summary -->removes the rows  in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of rows  to remove. If the passed range contains:

* both columns and rows, only the rows  are removed.
* only columns, the command does nothing.

>Rows are deleted from bottom to top.

#### Example  

To delete rows selected by the user (in the image below rows 1, 2, and 3):

![](../../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

use the following code:

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### See also

[VP DELETE ROWS](vp-delete-columns.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
