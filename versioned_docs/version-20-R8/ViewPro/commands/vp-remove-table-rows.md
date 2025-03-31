---
id: vp-remove-table-rows
title: VP REMOVE TABLE ROWS
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R7|Added
</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->
**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|row|Integer|->|Index in the table of the starting row to remove|
|count|Integer|->|Number of rows to remove (must be >0) |
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE TABLE ROWS` command <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->removes one or *count* row(s) from the specified *tableName* at the specified *row* index<!-- END REF -->. The command removes values and styles.

This command removes rows from the *tableName* table, NOT from the sheet. The total number of rows of the sheet is not impacted by the command. Data present below the table (if any) are automatically moved up according to the number of removed rows.

If the *tableName* table is bound to a [data context](vp-set-data-context.md), the command removes element(s) from the collection. 

If *tableName* does not exist, nothing happens.


#### Example

To remove two rows from 3rd row of the "dataTable" table:

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### See also

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
