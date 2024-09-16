---
id: is-windows
title: Is Windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** -> Function result<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | <- | True if operating system = Windows, else False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is Windows.Summary-->The **Is Windows** command returns True if the current operating system is Windows.<!-- END REF-->

#### Example 

You want to determine if the current operating system is Windows:

```4d
 If(Is Windows)

    ALERT("It's Windows")

 Else

    ALERT("It's not Windows")

 End if
```

#### See also 
[Get system info](get-system-info.md)  
[Is macOS](is-macos.md)  