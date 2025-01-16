---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *object* ; *key* {; *modifiers*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| key | Text | &#8594;  | Key to associate with object |
| modifiers | Integer | &#8594;  | Modifier key mask or combination of masks |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->The **OBJECT SET SHORTCUT** command sets or dynamically modifies the keyboard shortcut associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

In the *key* parameter, pass a string indicating the key to associate with the object. You can either pass:

* a standard key name, for example "B"
* or a constant (or its value) from the *Shortcut and Associated Keys* theme:  

| Constant                      | Type   | Value           | Comment       |  
| ----------------------------- | ------ | --------------- | ------------- |  
| Shortcut with Backspace       | Text | \[backspace\]   |               |  
| Shortcut with Carriage Return | Text | \[return\]      |               |  
| Shortcut with Delete          | Text | \[del\]         |               |  
| Shortcut with Down arrow      | Text | \[down arrow\]  |               |  
| Shortcut with End             | Text | \[end\]         |               |  
| Shortcut with Enter           | Text | \[enter\]       |               |  
| Shortcut with Escape          | Text | \[esc\]         |               |  
| Shortcut with F1              | Text | \[F1\]          |               |  
| Shortcut with F10             | Text | \[F10\]         |               |  
| Shortcut with F11             | Text | \[F11\]         |               |  
| Shortcut with F12             | Text | \[F12\]         | <br/> |  
| Shortcut with F13             | Text | \[F13\]         |               |  
| Shortcut with F14             | Text | \[F14\]         |               |  
| Shortcut with F15             | Text | \[F15\]         |               |  
| Shortcut with F2              | Text | \[F2\]          |               |  
| Shortcut with F3              | Text | \[F3\]          |               |  
| Shortcut with F4              | Text | \[F4\]          |               |  
| Shortcut with F5              | Text | \[F5\]          |               |  
| Shortcut with F6              | Text | \[F6\]          |               |  
| Shortcut with F7              | Text | \[F7\]          |               |  
| Shortcut with F8              | Text | \[F8\]          |               |  
| Shortcut with F9              | Text | \[F9\]          |               |  
| Shortcut with Help            | Text | \[help\]        |               |  
| Shortcut with Home            | Text | \[home\]        |               |  
| Shortcut with Left arrow      | Text | \[left arrow\]  |               |  
| Shortcut with Page down       | Text | \[page down\]   |               |  
| Shortcut with Page up         | Text | \[page up\]     |               |  
| Shortcut with Right arrow     | Text | \[right arrow\] |               |  
| Shortcut with Tabulation      | Text | \[tab\]         |               |  
| Shortcut with Up arrow        | Text | \[up arrow\]    |               |

In the *modifiers* parameter, you can pass one or more modifier keys to associate with the shortcut. To set the *modifiers* parameter, pass one or more of the following "Mask" type constants found in the *Events (Modifiers)* theme:

| Constant         | Type    | Value | Comment                                                    |
| ---------------- | ------- | ----- | ---------------------------------------------------------- |
| Command key mask | Integer | 256   | Ctrl key under Windows, Command key under OS X             |
| Control key mask | Integer | 4096  | Ctrl key under OS X, or right click under Windows and OS X |
| Option key mask  | Integer | 2048  | Alt key (also called Option under OS X)                    |
| Shift key mask   | Integer | 512   | Windows and OS X                                           |

**Note:** When you omit the *modifiers* parameter, the object is enabled as soon as you press the key that was set. For example, if you associate the "H" key with a button, this button is enabled whenever you press the H key. This kind of functioning is to be reserved for specific interfaces.

#### Example 

You want to associate a different shortcut depending on the current language of the application. In the On Load form event, you can write:

```4d
 Case of
       vLang="FR"
       OBJECT SET SHORTCUT(*;"SortButton";"T";Command key mask+Shift key mask) // Ctrl+Shift+T in French
       vLang="US"
       OBJECT SET SHORTCUT(*;"SortButton";"O";Command key mask+Shift key mask) // Ctrl+Shift+O in English
 End case
```

#### See also 

[OBJECT GET SHORTCUT](object-get-shortcut.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1185 |
| Thread safe | &cross; |


