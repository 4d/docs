---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *window* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |
| Function result | Boolean | &#8592; | True if the window is reduced in the taskbar or the in dock, False otherwise |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is window reduced.Summary-->The **Is window reduced** command returns **True** if the window whose reference number is passed in *window* is currently reduced in the taskbar (Windows) or in the dock (macOS), and **False** otherwise.<!-- END REF-->

## See also 

[Is window maximized](../commands/is-window-maximized)  
[REDUCE RESTORE WINDOW](../commands/reduce-restore-window)  

## Properties

|  |  |
| --- | --- |
| Command number | 1831 |
| Thread safe | no |


