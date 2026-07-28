---
id: query-with-array
title: QUERY WITH ARRAY
slug: /commands/query-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY WITH ARRAY.Syntax-->**QUERY WITH ARRAY** ( *targetField* : Field ; *array* : Array )<!-- END REF-->
<!--REF #_command_.QUERY WITH ARRAY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | Field used to compare the values |
| array | Array | &#8594;  | Array of the searched values |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.QUERY WITH ARRAY.Summary-->The QUERY WITH ARRAY command searches all the records for which the value of *targetField* is equal, at least, to one of the values of the elements in *array*.<!-- END REF--> The records found will become the new current selection. 

This command allows you to quickly and simply build a search on multiple values. 

**Notes:**

* This command cannot be used with fields of the Picture or BLOB type.
* *targetField* and *array* must be of the same data type. Exception: you can use a Longint array with a field of the Time type.

## Example 

The following example allows you to retrieve the records of both French and American clients:

```4d
 ARRAY TEXT(searchArray;2)
 SearchArray{1}:="FR"
 SearchArray{2}:="US"
 QUERY WITH ARRAY([Clients]Country;SearchArray)
```

## See also 

[QUERY SELECTION WITH ARRAY](../commands/query-selection-with-array)  

## Properties

|  |  |
| --- | --- |
| Command number | 644 |
| Thread safe | yes |
| Changes current selection ||


