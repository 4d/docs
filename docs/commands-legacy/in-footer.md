---
id: in-footer
title: In footer
slug: /commands/in-footer
displayed_sidebar: docs
---

<!--REF #_command_.In footer.Syntax-->**In footer**  -> Function result<!-- END REF-->
<!--REF #_command_.In footer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &larr; | Returns True if the execution cycle is in footer |

<!-- END REF-->

#### Description 

<!--REF #_command_.In footer.Summary-->**In footer** returns True for the In footer execution cycle.<!-- END REF-->

In order for the   **In footer** execution cycle to be generated, make sure that the On Printing Footer event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](form-event-code.md) and testing whether it returns the On Printing Footer event.

#### See also 

*\_o\_During*  
[In break](in-break.md)  
[In header](in-header.md)  