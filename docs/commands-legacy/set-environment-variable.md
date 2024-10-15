---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *varName* ; *varValue* )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| varName | Text | &#8594;  | Variable name to set |
| varValue | Text | &#8594;  | Value of the variable or  "" to reset default value |

<!-- END REF-->

:::info Compatibility

This command is maintained for compatibility reasons only. It is now recommended to use the [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::


#### Description 

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->The **SET ENVIRONMENT VARIABLE** command allows you to set the value of an environment variable under macOS and Windows.<!-- END REF--> It is meant to be used with the [LAUNCH EXTERNAL PROCESS](launch-external-process.md) command. It also works with the [PHP Execute](php-execute.md) command.

Pass the name of the variable to define in *varName* and its value in *varValue*.

* To get the general list of environment variables and possible values, please refer to the technical documentation of your operating system.
* Three specific environment variables are available for use in the context of the [LAUNCH EXTERNAL PROCESS](launch-external-process.md) command:  
*\_4D\_OPTION\_CURRENT\_DIRECTORY*  
*\_4D\_OPTION\_HIDE\_CONSOLE* (Windows only)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*.  
    
For information on these variables, please refer to the documentation for the [LAUNCH EXTERNAL PROCESS](launch-external-process.md) command.

#### Example 

Refer to examples of the [LAUNCH EXTERNAL PROCESS](launch-external-process.md) command. 

#### See also 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  