---
id: object-get-shortcut
title: OBJECT GET SHORTCUT
slug: /commands/object-get-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SHORTCUT.Syntax-->**OBJECT GET SHORTCUT** ( {* ;} *object* ; *key* ; *modifiers* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SHORTCUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| key | Text | &#8592; | Key associated with object |
| modifiers | Integer | &#8592; | Modifier key mask or combination of masks |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SHORTCUT.Summary-->The **OBJECT GET SHORTCUT** command returns the keyboard shortcut associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

The *key* parameter returns the character associated with the key (in the case of a standard key) or a string enclosed in brackets designating the key (in the case of a function key). You can compare this value with the constants of the *Shortcut and Associated Keys* theme (see the [OBJECT SET SHORTCUT](object-set-shortcut.md) command).

The *modifiers* parameter returns a value indicating the modifier key(s) associated with the shortcut. If there are several modifier keys combined, the command returns the sum of their values. You can compare the value returned with the following constants of the *Events (Modifiers)* theme:

| Constant         | Type    | Value | Comment                                                    |
| ---------------- | ------- | ----- | ---------------------------------------------------------- |
| Command key mask | Integer | 256   | Ctrl key under Windows, Command key under OS X             |
| Control key mask | Integer | 4096  | Ctrl key under OS X, or right click under Windows and OS X |
| Option key mask  | Integer | 2048  | Alt key (also called Option under OS X)                    |
| Shift key mask   | Integer | 512   | Windows and OS X                                           |

If there are no modifier keys for the shortcut, *modifiers* returns 0\. 

**Note:** If the *object* parameter designates several objects in the form that have different settings, the command returns "" in *key* and 0 in *modifiers*. 

#### See also 

[OBJECT SET SHORTCUT](object-set-shortcut.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1186 |
| Thread safe | &cross; |


