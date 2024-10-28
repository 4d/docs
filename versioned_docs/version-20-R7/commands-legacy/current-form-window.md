---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  -> Function result<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | WinRef | &#8592; | Current form window reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Current form window.Summary-->The **Current form window** command returns the reference of the current form window.<!-- END REF--> If no window has been set for the current form, the command returns 0.

The current form window can be generated automatically using a command such as [ADD RECORD](add-record.md), following a user action or by using the [Open window](open-window.md) or [Open form window](open-form-window.md) commands. 

#### See also 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  
[RESIZE FORM WINDOW](resize-form-window.md)  