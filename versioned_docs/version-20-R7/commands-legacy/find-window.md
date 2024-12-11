---
id: find-window
title: Find window
slug: /commands/find-window
displayed_sidebar: docs
---

<!--REF #_command_.Find window.Syntax-->**Find window** ( *left* ; *top* {; *windowPart*} ) : WinRef<!-- END REF-->
<!--REF #_command_.Find window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | Global left coordinate |
| top | Integer | &#8594;  | Global top coordinate |
| windowPart | Integer | &#8592; | 3 if window is "touched", 0 otherwise |
| Function result | WinRef | &#8592; | Window reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find window.Summary-->The **Find window** command returns (if any) the reference number of the first window “touched” by the point whose coordinates passed in *left* and *top*.<!-- END REF-->

The coordinates must be expressed relative to the top left corner of the contents area of the application window (Windows) or to the main screen (Macintosh).

The *windowPart* parameter returns 3 if the window is touched, and 0 otherwise. (**Compatibility note:** Starting with 4D v14, the constants of the *Find Window* theme are obsolete). 

#### See also 

[Frontmost window](frontmost-window.md)  
[Next window](next-window.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 449 |
| Thread safe | &check; |
| Forbidden on the server ||


