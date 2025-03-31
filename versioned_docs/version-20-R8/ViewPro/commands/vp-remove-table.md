---
id: vp-remove-table
title: VP REMOVE TABLE
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R6|Added
</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->
**VP REMOVE TABLE** ( *vpAreaName* : Object; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName|Text|->|View Pro area name|
|tableName|Text|->|Name of the table to remove|
|options|Integer|->|Additional options|
|sheet|Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP REMOVE TABLE` command <!-- REF #_method_.VP REMOVE TABLE.Summary -->removes a table<!-- END REF --> that you created with [VP CREATE TABLE](vp-create-table.md).

In *vpAreaName*, pass the name of the area where the table to remove is located.

In *tableName*, pass the name of the table to remove.

In *options*, you can specify additional behavior. Possible values are:

|Constant|Value|Description|
|---|---|---|
|vk table remove all|0|Remove all including style and data|
|vk table remove style|1|Remove style but keep data|
|vk table remove data|2|Remove data but keep style|

Table names are defined at sheet level. You can specify where the table is located using the optional *sheet* parameter (indexing starts at 0).

#### Example

To remove the "people" table in the second sheet and keep the data in the cells:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### See also

[VP CREATE TABLE](vp-create-table.md)