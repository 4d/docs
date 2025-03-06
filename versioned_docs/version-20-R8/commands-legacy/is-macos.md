---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if operating system = macOS, else False |

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

[System info](system-info.md)  
[Is Windows](is-windows.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1572 |
| Thread safe | &check; |


