---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *window* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |
| Function result | Boolean | &#8592; | True if the window is maximized, False otherwise |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Is window maximized.Summary-->The **Is window maximized** command returns **True** if the window whose reference number is passed in *window* is currently maximized, and **False** otherwise.<!-- END REF--> 

#### Example 

You want to switch between the maximized and previous states:

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

#### See also 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  