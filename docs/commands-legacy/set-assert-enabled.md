---
id: set-assert-enabled
title: SET ASSERT ENABLED
slug: /commands/set-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.SET ASSERT ENABLED.Syntax-->**SET ASSERT ENABLED** ( *assertions* {; *} )<!-- END REF-->
<!--REF #_command_.SET ASSERT ENABLED.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| assertions | Boolean | &#8594;  | True = enable assertions<br/>False = disable assertions |
| * | Operator | &#8594;  | If omitted = command applies to all the processes (existing or created subsequently)<br/>If passed= command applies to current process only |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET ASSERT ENABLED.Summary-->The **SET ASSERT ENABLED** command can be used to disable or re-enable any assertions inserted into the 4D code of the application.<!-- END REF--> For more information about assertions, please refer to the description of the [ASSERT](assert.md) command. 

By default, assertions added in the program are enabled in interpreted and compiled mode. This command is useful when you want to disable them since their evaluation can sometimes be costly in terms of execution time and you may also want them to be hidden from the final user of the application. Typically, the **SET ASSERT ENABLED** command could be used in the in order to enable or disable assertions according to whether the application is in "Test" mode or in "Production" mode. 

By default, the **SET ASSERT ENABLED** command affects all the processes of the application. To restrict the effect of the command to the current process only, you can pass the *\** parameter.

Please note that when assertions are disabled, expressions passed to [ASSERT](assert.md) commands are no longer evaluated. The lines of code that call this command no longer have any effect on the operation of the application, neither in terms of behavior, nor in terms of performance. 

#### Example 

Disabling assertions:

```4d
 SET ASSERT ENABLED(False)
 ASSERT(TestMethod) // TestMethod will not be called since assertions are disabled
```

#### See also 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  