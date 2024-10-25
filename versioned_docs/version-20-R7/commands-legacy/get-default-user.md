---
id: get-default-user
title: Get default user
slug: /commands/get-default-user
displayed_sidebar: docs
---

<!--REF #_command_.Get default user.Syntax-->**Get default user**  -> Function result<!-- END REF-->
<!--REF #_command_.Get default user.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Longint | &#8592; | Unique user ID number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get default user.Summary-->The Get default user command returns the unique user ID of the user set as “Default user” in the database Settings dialog box:

![](../assets/en/commands/pict36789.en.png)

If no default user has been set, the command returns 0.<!-- END REF-->
