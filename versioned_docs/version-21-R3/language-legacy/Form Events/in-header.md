---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  : Boolean<!-- END REF-->
<!--REF #_command_.In header.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns True if the execution cycle is in header |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.In header.Summary-->**In header** returns True for the In header execution cycle.<!-- END REF--> 

In order for the **In header** execution cycle to be generated, make sure that the On Header event property for the form and/or the objects has been selected in the Design environment.

**Note:** This command is equivalent to using [Form event code](../commands/form-event-code) and testing whether it returns the On Header event.

## See also 

[In break](../commands/in-break)  
[In footer](../commands/in-footer)  

## Properties

|  |  |
| --- | --- |
| Command number | 112 |
| Thread safe | no |



