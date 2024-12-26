---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** : Boolean<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si el sistema operativo = Windows, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is Windows.Summary-->El comando **Is Windows** devuelve True si el sistema operativo actual es Windows.<!-- END REF-->

#### Ejemplo 

Desea determinar si el sistema operativo actual es Windows:

```4d
 If(Is Windows)
    ALERT("Es Windows")
 Else
    ALERT("No es Windows")
 End if
```

#### Ver también 

[System info](system-info.md)  
[Is macOS](is-macos.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1573 |
| Hilo seguro | &check; |


