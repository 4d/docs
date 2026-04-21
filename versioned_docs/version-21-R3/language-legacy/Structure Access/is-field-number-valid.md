---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( *tablePtr* : Pointer ; *fieldNum* : Integer ) : Boolean<br/>**Is field number valid** ( *tableNum* : Integer ; *fieldNum* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | Table number |
| tablePtr | Pointer | &#8594;  | Pointer to table |
| fieldNum | Integer | &#8594;  | Field number |
| Function result | Boolean | &#8592; | True = field exists in the table False = field does not exist in the table |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is field number valid.Summary-->The Is field number valid command returns True if the field whose number is passed in the *fieldNum* parameter exists in the table whose number or pointer is passed in the *tableNum* or *tablePtr* parameter.<!-- END REF--> If the field does not exist, the command returns False. Keep in mind that the command returns False if the table containing the field is in the Trash of the Explorer.

This command can be used to detect any field deletions, which create gaps in the sequence of field numbers.

## See also 

[Last table number](../commands/last-table-number)  
[Is table number valid](../commands/is-table-number-valid)  

## Properties

|  |  |
| --- | --- |
| Command number | 1000 |
| Thread safe | yes |


