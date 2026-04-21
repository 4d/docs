---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Current form window reference number |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.Current form window.Summary-->The **Current form window** command returns the reference of the current form window.<!-- END REF--> If no window has been set for the current form, the command returns 0.

The current form window can be generated automatically using a command such as [ADD RECORD](../commands/add-record), following a user action or by using the [Open window](../commands/open-window) or [Open form window](../commands/open-form-window) commands. 

## See also 

[Open form window](../commands/open-form-window)  
[Open window](../commands/open-window)  
[RESIZE FORM WINDOW](../commands/resize-form-window)  

## Properties

|  |  |
| --- | --- |
| Command number | 827 |
| Thread safe | no |



