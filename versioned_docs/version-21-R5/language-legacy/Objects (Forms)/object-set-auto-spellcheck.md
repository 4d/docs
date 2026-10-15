---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( * ; *object* : Text ; *autoSpellcheck* : Boolean )<br/>**OBJECT SET AUTO SPELLCHECK** ( *object* : Variable, Field ; *autoSpellcheck* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| autoSpellcheck | Boolean | &#8594;  | True = automatic spell-checking,False= no automatic spell-checking |
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

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->The **OBJECT SET AUTO SPELLCHECK** command sets or dynamically modifies the status of the **Auto spellcheck** option for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> This option enables or disables the automatic spellcheck when data is entered for the object.

This command supports objects of the following types:

- Text-based [inputs](../../FormObjects/input_overview.md)
- [4D Write Pro areas](../../FormObjects/writeProArea_overview.md).


If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.


Pass **True** in *autoSpellcheck* to enable this function for the object, and **False** to disable it.

## See also 

[OBJECT Get auto spellcheck](../commands/object-get-auto-spellcheck)  

## Properties

|  |  |
| --- | --- |
| Command number | 1173 |
| Thread safe | no |


