---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** ({ *window* : Integer }) : Text<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |
| Function result | Text | &#8592; | Window title |
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

<!--REF #_command_.Get window title.Summary-->The **Get window title** command returns the title of the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, an empty string is returned.

If you omit the *window* parameter, **Get window title** returns the title of the frontmost window for the current process.

## Example 

See example for the [SET WINDOW TITLE](../commands/set-window-title) command.

## See also 

[SET WINDOW TITLE](../commands/set-window-title)  

## Properties

|  |  |
| --- | --- |
| Command number | 450 |
| Thread safe | no |


