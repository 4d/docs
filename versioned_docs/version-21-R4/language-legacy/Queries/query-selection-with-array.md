---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *targetField* : Field ; *array* : Array )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | Field used to compare the values |
| array | Array | &#8594;  | Array of searched values |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->The **QUERY SELECTION WITH ARRAY** command searches the table of the field passed as first parameter for the records where the value of *targetField* is equal to at least one of the values of the elements in the *array*.<!-- END REF--> The records found will become the new current selection.

**QUERY SELECTION WITH ARRAY** functions in the same way as [QUERY WITH ARRAY](../commands/query-with-array). The difference between these two commands is the scope of the search:

* [QUERY WITH ARRAY](../commands/query-with-array) searches all the records of the table containing *targetField*.
* **QUERY SELECTION WITH ARRAY** only searches the records of the current selection of the table containing *targetField*.

For more information, please refer to the description of the [QUERY WITH ARRAY](../commands/query-with-array) command.

## See also 

[QUERY WITH ARRAY](../commands/query-with-array)  

## Properties

|  |  |
| --- | --- |
| Command number | 1050 |
| Thread safe | yes |
| Changes current selection ||


