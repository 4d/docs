---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands-legacy/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *object* ; *key* {; *modifiers*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | Form object | &#x1F852; | Object Name (if * is specified) or Variable or field (if * is omitted) |
| key | String | &#x1F852; | Key to associate with object |
| modifiers | Longint | &#x1F852; | Modifier key mask or combination of masks |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->The **OBJECT SET SHORTCUT** command sets or dynamically modifies the keyboard shortcut associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a reference instead of a name.

In the *key* parameter, pass a string indicating the key to associate with the object. You can either pass:

* a standard key name, for example "B"
* or a constant (or its value) from the *Shortcut and Associated Keys* theme:  
| Constant                      | Type   | Value           | Comment       |  
| ----------------------------- | ------ | --------------- | ------------- |  
| Shortcut with Backspace       | String | \[backspace\]   |               |  
| Shortcut with Carriage Return | String | \[return\]      |               |  
| Shortcut with Delete          | String | \[del\]         |               |  
| Shortcut with Down arrow      | String | \[down arrow\]  |               |  
| Shortcut with End             | String | \[end\]         |               |  
| Shortcut with Enter           | String | \[enter\]       |               |  
| Shortcut with Escape          | String | \[esc\]         |               |  
| Shortcut with F1              | String | \[F1\]          |               |  
| Shortcut with F10             | String | \[F10\]         |               |  
| Shortcut with F11             | String | \[F11\]         |               |  
| Shortcut with F12             | String | \[F12\]         | <br/> |  
| Shortcut with F13             | String | \[F13\]         |               |  
| Shortcut with F14             | String | \[F14\]         |               |  
| Shortcut with F15             | String | \[F15\]         |               |  
| Shortcut with F2              | String | \[F2\]          |               |  
| Shortcut with F3              | String | \[F3\]          |               |  
| Shortcut with F4              | String | \[F4\]          |               |  
| Shortcut with F5              | String | \[F5\]          |               |  
| Shortcut with F6              | String | \[F6\]          |               |  
| Shortcut with F7              | String | \[F7\]          |               |  
| Shortcut with F8              | String | \[F8\]          |               |  
| Shortcut with F9              | String | \[F9\]          |               |  
| Shortcut with Help            | String | \[help\]        |               |  
| Shortcut with Home            | String | \[home\]        |               |  
| Shortcut with Left arrow      | String | \[left arrow\]  |               |  
| Shortcut with Page down       | String | \[page down\]   |               |  
| Shortcut with Page up         | String | \[page up\]     |               |  
| Shortcut with Right arrow     | String | \[right arrow\] |               |  
| Shortcut with Tabulation      | String | \[tab\]         |               |  
| Shortcut with Up arrow        | String | \[up arrow\]    |               |

In the *modifiers* parameter, you can pass one or more modifier keys to associate with the shortcut. To set the *modifiers* parameter, pass one or more of the following "Mask" type constants found in the *Events (Modifiers)* theme:

| Constant         | Type    | Value | Comment                                                    |
| ---------------- | ------- | ----- | ---------------------------------------------------------- |
| Command key mask | Longint | 256   | Ctrl key under Windows, Command key under OS X             |
| Control key mask | Longint | 4096  | Ctrl key under OS X, or right click under Windows and OS X |
| Option key mask  | Longint | 2048  | Alt key (also called Option under OS X)                    |
| Shift key mask   | Longint | 512   | Windows and OS X                                           |

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