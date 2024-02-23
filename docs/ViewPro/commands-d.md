---
id: commands-d
title: D
---

> **Warning**: The commands on this page are not thread-safe.

### VP DELETE COLUMNS

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

![](../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

use the following code:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### See also

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)

### VP DELETE ROWS

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

![](../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

use the following code:

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### See also

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)
