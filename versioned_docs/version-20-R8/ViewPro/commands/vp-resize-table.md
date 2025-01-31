---
id: vp-resize-table
title: VP RESIZE TABLE
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R7|Added
</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->
**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|New range for the table|
|tableName|Text|->|Name of the table|<!-- END REF -->

#### Description

The `VP RESIZE TABLE` command <!-- REF #_method_.VP RESIZE TABLE.Summary -->changes the *tableName* size with regards to the *rangeObj*<!-- END REF -->.

The following rules apply:

- Headers must remain in the same row and the resulting table range must overlap the original table range.
- If the row count of the resized table is inferior to the initial row count, values inside cropped rows or columns are kept if they were not bound to a [data context](vp-set-data-context.md), otherwise they are deleted.
- If the table expands on cells containing data:
	- if rows are added, data is deleted,
	- if columns are added, data are kept and are displayed in new columns.

If *tableName* does not exist, nothing happens.


#### Example

You create a table with a data context: 

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)


You want to add one column before and after the table as well as two empty rows. You can write:

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../../assets/en/ViewPro/table-resize.png)


#### See also

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table range](vp-get-table-range.md)
