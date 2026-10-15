---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numbersArray* : Integer array ; *namesArray* : Text array )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| numbersArray | Integer array | &#8592; | Numbers of plug-ins |
| namesArray | Text array | &#8592; | Names of plug-ins |
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

<!--REF #_command_.PLUGIN LIST.Summary-->The PLUGIN LIST command fills in the *numbersArray* and *namesArray* arrays with the numbers and names of the plug-ins loaded and usable by the 4D application.<!-- END REF--> These two arrays are automatically sized and synchronized by the command.

**Note:** You can compare the values returned in *numbersArray* with the constants of the *Is License Available* theme. 

PLUGIN LIST takes all plug-ins into account, including those that are integrated (for example, 4D Chart), and third-party plug-ins. 

## See also 

[COMPONENT LIST](../commands/component-list)  
[Get plugin access](../commands/get-plugin-access)  
[Is license available](../commands/is-license-available)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Properties

|  |  |
| --- | --- |
| Command number | 847 |
| Thread safe | yes |


