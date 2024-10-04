---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** -> Function result<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#x1F850; | True if operating system = macOS, else False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is macOS.Summary-->The **Is macOS** command returns True if the current operating system is macOS.<!-- END REF--> 

#### Example 

You want to determine if the current operating system is macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

#### See also 

[Get system info](get-system-info.md)  
[Is Windows](is-windows.md)  