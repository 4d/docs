---
id: is-a-list
title: Is a list
slug: /commands/is-a-list
displayed_sidebar: docs
---

<!--REF #_command_.Is a list.Syntax-->**Is a list** ( *list* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a list.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | ListRef value to be tested |
| Function result | Boolean | &#8592; | TRUE if list is a hierarchical list FALSE if list is not a hierarchical list |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Is a list.Summary-->The Is a list command returns TRUE if the value you pass in *list* is a valid reference to a hierarchical list.<!-- END REF--> Otherwise, it returns FALSE.

#### Example

See example for the [CLEAR LIST](clear-list.md) command.


