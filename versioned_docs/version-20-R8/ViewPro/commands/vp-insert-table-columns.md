---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R7|Added
</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->
**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|column|Integer|->|Index in the table of the starting column to insert|
|count|Integer|->|Number of columns to add (must be >0) |
|insertAfter|Integer|->|`vk table insert before` or `vk table insert after` *column*|
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP INSERT TABLE COLUMNS` command <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserts one or *count* empty column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->. 

When a column has been inserted with this command, you typically modify its contents using the [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) command. 

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the *column* index:

|Constant|Value|Description|
|---|---|---|
|`vk table insert before`|0|Insert column(s) before the *column* (default if omitted)|
|`vk table insert after`|1|Insert column(s) after the *column*|

This command inserts some columns in the *tableName* table, NOT in the sheet. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns.

If *tableName* does not exist or if there is not enough space in the sheet, nothing happens.


#### Example

See examples for [VP INSERT TABLE ROWS](vp-insert-table-rows.md) and [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).


#### See also

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
