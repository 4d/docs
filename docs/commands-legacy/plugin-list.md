---
id: plugin-list
title: PLUGIN LIST
slug: /commands-legacy/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numbersArray* ; *namesArray* )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| numbersArray | Longint array | <&rarr; | Numbers of plug-ins |
| namesArray | String array | <&rarr; | Names of plug-ins |

<!-- END REF-->

#### Description 

<!--REF #_command_.PLUGIN LIST.Summary-->The PLUGIN LIST command fills in the *numbersArray* and *namesArray* arrays with the numbers and names of the plug-ins loaded and usable by the 4D application.<!-- END REF--> These two arrays are automatically sized and synchronized by the command.

**Note:** You can compare the values returned in *numbersArray* with the constants of the *Is License Available* theme. 

PLUGIN LIST takes all plug-ins into account, including those that are integrated (for example, 4D Chart), and third-party plug-ins. 

#### See also 

[COMPONENT LIST](component-list.md)  
[Get plugin access](get-plugin-access.md)  
[Is license available](is-license-available.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  