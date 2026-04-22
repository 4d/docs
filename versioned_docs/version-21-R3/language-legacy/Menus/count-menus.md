---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** ( {*process* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process reference number |
| Function result | Integer | &#8592; | Number of menus in the current menu bar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Count menus.Summary-->The **Count menus** command returns the number of menus present in the menu bar.<!-- END REF-->

If you omit the *process* parameter, **Count menus** applies to the menu bar for the current process. Otherwise, **Count menus** applies to the menu bar for the process whose reference number is passed in *process*. 

## See also 

[Count menu items](../commands/count-menu-items)  

## Properties

|  |  |
| --- | --- |
| Command number | 404 |
| Thread safe | no |
| Forbidden on the server ||


