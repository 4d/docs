---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *option* : Integer ; *value* : Integer, Text )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option number |
| value | Integer, Text | &#8592; | Option value |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.SQL GET OPTION.Summary-->The **SQL GET OPTION** command returns the current *value* of the option passed in *option*.<!-- END REF-->

For more information on the different options and their associated values, refer to the description of the [SQL SET OPTION](../commands/sql-set-option) command.

## System variables and sets 

If the command was properly executed, the system variable OK is set to 1\. Otherwise, it is set to 0.

## See also 

[SQL SET OPTION](../commands/sql-set-option)  

## Properties

|  |  |
| --- | --- |
| Command number | 819 |
| Thread safe | no |
| Modifies variables | OK |


