---
id: after
title: After
displayed_sidebar: docs
---

<!--REF #_command_.After.Syntax-->**After**  -> Function result<!-- END REF-->
<!--REF #_command_.After.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | <- | Returns True if the execution cycle is an after |

<!-- END REF-->

#### Description 

<!--REF #_command_.After.Summary-->**After** returns True for the After execution cycle.<!-- END REF-->

In order for the **After** execution cycle to be generated, make sure that the On Validate event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](form-event-code.md) and testing whether it returns the On Validate event.

#### See also 
[Form event code](form-event-code.md)  