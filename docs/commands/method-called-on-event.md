---
id: method-called-on-event
title: Method called on event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  -> Function result<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | String | <- | Name of method called on event |

<!-- END REF-->

#### Description 

<!--REF #_command_.Method called on event.Summary-->The **Method called on event** command returns the name of the method installed by the [ON EVENT CALL](on-event-call.md) command.<!-- END REF--> 

If no such method has been installed, an empty string ("") is returned.

#### See also 

[ON EVENT CALL](on-event-call.md)  