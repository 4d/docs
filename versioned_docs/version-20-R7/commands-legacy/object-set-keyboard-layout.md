---
id: object-set-keyboard-layout
title: OBJECT SET KEYBOARD LAYOUT
slug: /commands/object-set-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Syntax-->**OBJECT SET KEYBOARD LAYOUT** ( {* ;} *object* ; *languageCode* )<!-- END REF-->
<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| languageCode | Text | &#8594;  | RFC3066 ISO639 and ISO3166 language code,"" = no change |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Summary-->The **OBJECT SET KEYBOARD LAYOUT** command sets or dynamically modifies the keyboard layout associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or field. In this case, you pass a reference instead of a name.

In *languageCode*, you pass a string indicating the code of the language to use, based on RFC3066, ISO639 and ISO3166\. For more information, refer to the description of the [SET DATABASE LOCALIZATION](set-database-localization.md) command. 

#### See also 

[OBJECT Get keyboard layout](object-get-keyboard-layout.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1179 |
| Thread safe | &check; |
| Forbidden on the server ||


