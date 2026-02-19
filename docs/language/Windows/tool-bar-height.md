---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Height (expressed in pixels) of tool bar or 0 if tool bar is hidden |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14 R5|Modified|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.Tool bar height.Summary-->The Tool bar height command returns the height of the current visible tool bar, expressed in pixels.<!-- END REF--> Depending on the context, it can be either the 4D Design mode toolbar, or a custom toolbar created with [Open form window](../commands/open-form-window.md) (the Design mode toolbar is automatically hidden when a custom toolbar is displayed).

If no tool bar is displayed, the command returns 0.

## See also 

[HIDE TOOL BAR](hide-tool-bar.md)  
[Menu bar height](menu-bar-height.md)  
[SHOW TOOL BAR](show-tool-bar.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1016 |
| Thread safe | no |


