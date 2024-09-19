---
id: in-header
title: In header
slug: /commands-legacy/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  -> Function result<!-- END REF-->
<!--REF #_command_.In header.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#x1F850; | Returns True if the execution cycle is in header |

<!-- END REF-->

#### Description 

<!--REF #_command_.In header.Summary-->**In header** returns True for the In header execution cycle.<!-- END REF--> 

In order for the **In header** execution cycle to be generated, make sure that the On Header event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](form-event-code.md) and testing whether it returns the On Header event.

#### See also 

*\_o\_During*  
[In break](in-break.md)  
[In footer](in-footer.md)  