---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( * ; *object* : Text ) : Text<br/>**OBJECT Get keyboard layout** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Language code of layout, "" = no layout |
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

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->The **OBJECT Get keyboard layout** command returns the current keyboard layout associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

The command returns a string indicating the language code used, based on RFC3066, ISO639 and ISO3166\. For more information, refer to the description of the [SET DATABASE LOCALIZATION](../commands/set-database-localization) command. 

## See also 

[OBJECT SET KEYBOARD LAYOUT](../commands/object-set-keyboard-layout)  

## Properties

|  |  |
| --- | --- |
| Command number | 1180 |
| Thread safe | no |


