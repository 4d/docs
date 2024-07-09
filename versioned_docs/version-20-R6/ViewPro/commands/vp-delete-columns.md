---
id: vp-delete-columns
title: VP DELETE COLUMNS
---


<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->
**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|<!-- END REF -->

#### Description

The `VP DELETE COLUMNS` command <!-- REF #_method_.VP DELETE COLUMNS.Summary -->removes the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of columns to remove. If the passed range contains:

* both columns and rows, only the columns are removed.
* only rows, the command does nothing.

>Columns are deleted from right to left.

#### Example  

To delete columns selected by the user (in the image below columns B, C, and D):

![](../../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

use the following code:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### See also

[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)

