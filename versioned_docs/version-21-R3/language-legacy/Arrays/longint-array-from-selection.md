---
id: longint-array-from-selection
title: LONGINT ARRAY FROM SELECTION
slug: /commands/longint-array-from-selection
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Syntax-->**LONGINT ARRAY FROM SELECTION** ( *aTable* : Table ; *recordArray* : Integer array {; *selection* : Text} )<!-- END REF-->
<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table of the current selection |
| recordArray | Integer array | &#8592; | Array of record numbers |
| selection | Text | &#8594;  | Name of the named selection or the current selection if this parameter is omitted |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.7|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Summary-->The LONGINT ARRAY FROM SELECTION command fills the *recordArray* array with the (absolute) record numbers that are in *selection*.<!-- END REF-->

If you do not pass the *selection* parameter, the command will use the current selection of *aTable*. 

**Note:** The array element number 0 is initialized to -1.

## Example 

You want to retrieve the numbers of the records in the current selection:

```4d
 ARRAY LONGINT($_arrRecNum;0) //mandatory for compiled mode
 LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)
```

## See also 

[CREATE SELECTION FROM ARRAY](../commands/create-selection-from-array)  

## Properties

|  |  |
| --- | --- |
| Command number | 647 |
| Thread safe | yes |


