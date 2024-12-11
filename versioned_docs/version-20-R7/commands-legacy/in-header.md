---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  : Boolean<!-- END REF-->
<!--REF #_command_.In header.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns True if the execution cycle is in header |

<!-- END REF-->

#### Description 

<!--REF #_command_.In header.Summary-->**In header** returns True for the In header execution cycle.<!-- END REF--> 

In order for the **In header** execution cycle to be generated, make sure that the On Header event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](../commands/form-event-code.md) and testing whether it returns the On Header event.

#### See also 

[In break](in-break.md)  
[In footer](in-footer.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 112 |
| Thread safe | &check; |
| Forbidden on the server ||


