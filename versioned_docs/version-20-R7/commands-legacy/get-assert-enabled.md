---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = assertions are enabled<br/>False = assertions are disabled |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get assert enabled.Summary-->The **Get assert enabled** command returns True or False according to whether or not assertions are enabled in the current process.<!-- END REF--> For more information about assertions, please refer to the description of the [ASSERT](assert.md) command. 

By default, assertions are enabled but they may have been disabled using the [SET ASSERT ENABLED](set-assert-enabled.md) command. 

#### See also 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1130 |
| Thread safe | &check; |


