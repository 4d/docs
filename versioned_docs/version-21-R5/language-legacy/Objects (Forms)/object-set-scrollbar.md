---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( * ; *object* : Text ; *horizontal* : Boolean, Integer ; *vertical* : Boolean, Integer )<br/>**OBJECT SET SCROLLBAR** ( *object* : Variable, Field ; *horizontal* : Boolean, Integer ; *vertical* : Boolean, Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| horizontal | Boolean, Integer | &#8594;  | Visibility of horizontal scrollbar |
| vertical | Boolean, Integer | &#8594;  | Visibility of vertical scrollbar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Modified|
|12|Renamed|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->The OBJECT SET SCROLLBAR command allows you to display or hide the horizontal and/or vertical scrollbars in the object set using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you do not pass a string, but a variable reference. For more information about object names, refer to the *Object Properties* section. 

In the *horizontal* and *vertical* parameters, you pass values indicating whether the corresponding scrollbars should be displayed. You can pass either Boolean values (True=displayed, False=hidden), or numeric values (0=hidden, 1=displayed, 2=automatic mode). Using numeric values gives you access to the automatic mode, where scrollbars are only displayed when necessary.

The following table indicates the values you can pass in the *horizontal* and *vertical* parameters for objects that accept scrollbars (automatic mode is not available for all objects):

| **Objects with scrollbars**         | **Hide scrollbar** | **Show scrollbar** | **Automatic mode** |
| ----------------------------------- | ------------------ | ------------------ | ------------------ |
| Text object fields and variables    | False or 0         | True or 1          | *not available*    |
| Picture object fields and variables | False or 0         | True or 1          | 2                  |
| List boxes                          | False or 0         | True or 1          | 2                  |
| Hierarchical lists                  | False or 0         | True or 1          | 2                  |
| Subforms                            | False or 0         | True or 1          | *not available*    |

 By default, scrollbars are displayed.

**Note:** For more information about the automatic mode, refer to *Scroll bars*.

## See also 

[LISTBOX Get property](../commands/listbox-get-property)  
[LISTBOX SET GRID](../commands/listbox-set-grid)  
[OBJECT GET SCROLLBAR](../commands/object-get-scrollbar)  
[OBJECT SET VISIBLE](../commands/object-set-visible)  

## Properties

|  |  |
| --- | --- |
| Command number | 843 |
| Thread safe | no |



