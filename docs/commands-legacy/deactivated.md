---
id: deactivated
title: Deactivated
slug: /commands-legacy/deactivated
displayed_sidebar: docs
---

<!--REF #_command_.Deactivated.Syntax-->**Deactivated**  -> Function result<!-- END REF-->
<!--REF #_command_.Deactivated.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#x1F850; | Returns TRUE if the execution cycle is a deactivation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Deactivated.Summary-->The **Deactivated** command returns True in a form or object method when the frontmost window of the frontmost process, containing the form, moves to the back.<!-- END REF-->

In order for the **Deactivated** execution cycle to be generated, make sure that the On Deactivate event property of the form and/or the objects has been selected in Design environment. 

**Note:** This command is equivalent to using [Form event code](form-event-code.md) and testing whether it returns the On Deactivate event.

#### See also 

[Activated](activated.md)  
[Form event code](form-event-code.md)  