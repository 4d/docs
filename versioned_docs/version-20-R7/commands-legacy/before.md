---
id: before
title: Before
slug: /commands/before
displayed_sidebar: docs
---

<!--REF #_command_.Before.Syntax-->**Before**  : Boolean<!-- END REF-->
<!--REF #_command_.Before.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns True if the execution cycle is a before |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Before.Summary-->**Before** returns True for the Before execution cycle.<!-- END REF-->

In order for the **Before** execution cycle to be generated, make sure that the On Load event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](../commands/form-event-code.md) and testing whether it returns the On Load event.

#### See also 

[Form event code](../commands/form-event-code.md)  