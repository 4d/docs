---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *window* )} : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |
| Function result | Integer | &#8592; | Process reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Window process.Summary-->The Window process command returns the process number that runs the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, 0 (zero) is returned.

If you omit the *window* parameter, Window process returns the process of the current frontmost window.

#### See also 

[Current process](current-process.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 446 |
| Thread safe | &check; |
| Forbidden on the server ||


