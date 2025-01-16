---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Language code of layout, "" = no layout |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->The **OBJECT Get keyboard layout** command returns the current keyboard layout associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

The command returns a string indicating the language code used, based on RFC3066, ISO639 and ISO3166\. For more information, refer to the description of the [SET DATABASE LOCALIZATION](set-database-localization.md) command. 

#### See also 

[OBJECT SET KEYBOARD LAYOUT](object-set-keyboard-layout.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1180 |
| Thread safe | &cross; |


