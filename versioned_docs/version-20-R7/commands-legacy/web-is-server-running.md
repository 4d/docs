---
id: web-is-server-running
title: WEB Is server running
slug: /commands/web-is-server-running
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is server running.Syntax-->**WEB Is server running** : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is server running.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if the Web Server is running, otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Is server running.Summary-->The new **WEB Is server running** command returns **True** if the 4D built-in Web server is running, and **False** if the Web server is off.<!-- END REF-->

This command returns the running status of the Web Server where it is executed: 

| **Execution context**                             | **Returns the status of** |
| ------------------------------------------------- | ------------------------- |
| 4D stand-alone application                        | Local 4D Web server       |
| 4D Server                                         | 4D Server Web server      |
| 4D remote mode (local process)                    | Local 4D Web server       |
| 4D remote mode (4D Server stored procedure)       | 4D Server Web server      |
| 4D remote mode (other 4D remote stored procedure) | Remote 4D Web server      |

#### Example 

You want to check that the Web server is running:

```4d
 If(WEB Is server running)
    ... //do appropriate actions
 End if
```


#### Properties
|  |  |
| --- | --- |
| Command number | 1313 |
| Thread safe | &check; |
| Forbidden on the server ||


