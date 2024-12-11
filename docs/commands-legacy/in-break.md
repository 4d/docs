---
id: in-break
title: In break
slug: /commands/in-break
displayed_sidebar: docs
---

<!--REF #_command_.In break.Syntax-->**In break**  : Boolean<!-- END REF-->
<!--REF #_command_.In break.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns True if the execution cycle is in break |

<!-- END REF-->

#### Description 

<!--REF #_command_.In break.Summary-->**In break** returns True for the In break execution cycle.<!-- END REF--> 

In order for the **In break** execution cycle to be generated, make sure that the On Printing Break event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](../commands/form-event-code.md) and testing whether it returns the On Printing Break event.

#### See also 

[In footer](in-footer.md)  
[In header](in-header.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 113 |
| Thread safe | &check; |
| Forbidden on the server ||


