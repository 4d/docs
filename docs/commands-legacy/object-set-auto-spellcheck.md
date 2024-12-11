---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( {* ;} *object* ; *autoSpellcheck* )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| autoSpellcheck | Boolean | &#8594;  | True = automatic spell-checking,False= no automatic spell-checking |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->The **OBJECT SET AUTO SPELLCHECK** command sets or dynamically modifies the status of the **Auto spellcheck** option for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> This option enables or disables the automatic spellcheck when data is entered for the object (Text type objects only).

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

Pass **True** in *autoSpellcheck* to enable this function for the object, and **False** to disable it.

#### See also 

[OBJECT Get auto spellcheck](object-get-auto-spellcheck.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1173 |
| Thread safe | &check; |
| Forbidden on the server ||


