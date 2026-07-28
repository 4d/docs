---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( * ; *object* : Text ) : Boolean<br/>**OBJECT Get auto spellcheck** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = automatic spell-checking, False = no automatic spell-checking |
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

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->The **OBJECT Get auto spellcheck** command returns the status of the Auto spellcheck option for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

This command supports objects of the following types:

- Text-based [inputs](../../FormObjects/input_overview.md)
- [4D Write Pro areas](../../FormObjects/writeProArea_overview.md).

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

The command returns **True** when automatic spell-checking is enabled for the *object* and **False** when it is not. 

## See also 

[OBJECT SET AUTO SPELLCHECK](../commands/object-set-auto-spellcheck)  

## Properties

|  |  |
| --- | --- |
| Command number | 1174 |
| Thread safe | no |


