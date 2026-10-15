---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns TRUE if the execution cycle is an activation |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Activated.Summary-->The **Activated** command (obsolete) returns **True** in a form method when the window containing the form becomes the frontmost window of the frontmost process.<!-- END REF--> 

**Note:** This command is equivalent to using [Form event code](../commands/form-event-code) and testing whether it returns the On Activate event.

**WARNING:** Do not place a command such as [TRACE](../commands/trace) or [ALERT](../commands/alert)in the **Activated** phase of the form, as this will cause an endless loop.

**Note:** In order for the **Activated** execution cycle to be generated, make sure that the On Activate event property of the form has been selected in the Design environment.

## See also 

[Deactivated](../commands/deactivated)  
[Form event code](../commands/form-event-code)  

## Properties

|  |  |
| --- | --- |
| Command number | 346 |
| Thread safe | no |



