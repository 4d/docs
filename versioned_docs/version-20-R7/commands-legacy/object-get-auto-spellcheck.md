---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = automatic spell-checking, False = no automatic spell-checking |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->The **OBJECT Get auto spellcheck** command returns the status of the Auto spellcheck option for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

The command returns **True** when automatic spell-checking is enabled for the *object* and **False** when it is not. 

#### See also 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  