---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *tableNum* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | Table number |
| Function result | Boolean | &#8592; | True = table exists in database, False = table does not exist in database |
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

<!--REF #_command_.Is table number valid.Summary-->The Is table number valid command returns True if the table whose number is passed in the *tableNum* parameter exists in the database and False otherwise.<!-- END REF--> Keep in mind that the command returns False if the table is in the Trash of the Explorer.

This command can be used to detect any table deletions, which create gaps in the sequence of table numbers.

## See also 

[Last table number](../commands/last-table-number)  
[Is field number valid](../commands/is-field-number-valid)  

## Properties

|  |  |
| --- | --- |
| Command number | 999 |
| Thread safe | yes |


