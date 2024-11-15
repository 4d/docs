---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si el sistema operativo = macOS, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is macOS.Summary-->El comando **Is macOS** devuelve True si el sistema operativo actual es macOS.<!-- END REF-->

#### Ejemplo 

Usted desea determinar si el sistema operativo actual es macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

#### Ver también 

[System info](system-info.md)  
[Is Windows](is-windows.md)  