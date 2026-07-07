---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R2|Supported with Fluent UI on Windows|

</details>


<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( * ; *object* : Text ; *invisible* : Boolean )<br/>**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( *object* : Variable, Field ; *invisible* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string). If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| invisible | Boolean | &#8594;  | True = focus rectangle hidden,False = focus rectangle shown |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->The **OBJECT SET FOCUS RECTANGLE INVISIBLE** command sets or dynamically modifies the visibility option for the focus rectangle of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> This setting corresponds to the [**Hide focus rectangle** option](../../FormObjects/properties_Appearance.md#hide-focus-rectangle) that is available for enterable objects in the Property List in the Design mode. 

**Note:** This option can only be used on macOS and on Windows with [Fluent UI](../../FormEditor/forms.md#fluent-ui-rendering) enabled. It has no effect on Windows classic UI. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a variable reference instead of a string. 

Pass **True** in the *invisible* parameter to hide the focus rectangle and **False** to keep it visible.

## See also 

[OBJECT Get focus rectangle invisible](../commands/object-get-focus-rectangle-invisible)  

## Properties

|  |  |
| --- | --- |
| Command number | 1177 |
| Thread safe | no |


