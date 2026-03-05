---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** ( {*window* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |
| Function result | Integer | &#8592; | Type of window |
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

<!--REF #_command_.Window kind.Summary-->The **Window kind** command returns the 4D type of the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, **Window kind** returns *0* (zero).

Otherwise, **Window kind** may return one of the following predefined constants found in the *Windows* theme:

| Constant        | Type    | Value |
| --------------- | ------- | ----- |
| External window | Integer | 5     |
| Floating window | Integer | 14    |
| Modal dialog    | Integer | 9     |
| Regular window  | Integer | 8     |

If you omit the *window* parameter, **Window kind** returns the type of the frontmost window for the current process.

## Example 

See example for the [WINDOW LIST](../commands/window-list) command.

## See also 

[GET WINDOW RECT](../commands/get-window-rect)  
[Get window title](../commands/get-window-title)  
[Window process](../commands/window-process)  

## Properties

|  |  |
| --- | --- |
| Command number | 445 |
| Thread safe | no |


