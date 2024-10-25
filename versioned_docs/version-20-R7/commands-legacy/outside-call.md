---
id: outside-call
title: Outside call
slug: /commands/outside-call
displayed_sidebar: docs
---

<!--REF #_command_.Outside call.Syntax-->**Outside call**  -> Function result<!-- END REF-->
<!--REF #_command_.Outside call.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if the execution cycle is an outside call |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Outside call.Summary-->**Outside call** returns True for the After execution cycle.<!-- END REF--> 

In order for the **Outside call** execution cycle to be generated, make sure that the On Outside Call event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](form-event-code.md) and testing whether it returns the On Outside Call event.

#### See also 

[Form event code](form-event-code.md)  
[POST OUTSIDE CALL](post-outside-call.md)  