---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *targetField* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | Field used to compare the values |
| array | Array | &#8594;  | Array of searched values |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->The **QUERY SELECTION WITH ARRAY** command searches the table of the field passed as first parameter for the records where the value of *targetField* is equal to at least one of the values of the elements in the *array*.<!-- END REF--> The records found will become the new current selection.

**QUERY SELECTION WITH ARRAY** functions in the same way as [QUERY WITH ARRAY](query-with-array.md). The difference between these two commands is the scope of the search:

* [QUERY WITH ARRAY](query-with-array.md) searches all the records of the table containing *targetField*.
* **QUERY SELECTION WITH ARRAY** only searches the records of the current selection of the table containing *targetField*.

For more information, please refer to the description of the [QUERY WITH ARRAY](query-with-array.md) command.

#### See also 

[QUERY WITH ARRAY](query-with-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1050 |
| Thread safe | &check; |
| Changes current selection ||


