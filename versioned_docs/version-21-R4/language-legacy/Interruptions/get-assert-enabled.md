---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = assertions are enabled<br/>False = assertions are disabled |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get assert enabled.Summary-->The **Get assert enabled** command returns True or False according to whether or not assertions are enabled in the current process.<!-- END REF--> For more information about assertions, please refer to the description of the [ASSERT](../commands/assert) command. 

By default, assertions are enabled but they may have been disabled using the [SET ASSERT ENABLED](../commands/set-assert-enabled) command. 

## See also 

[ASSERT](../commands/assert)  
[Asserted](../commands/asserted)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## Properties

|  |  |
| --- | --- |
| Command number | 1130 |
| Thread safe | yes |


