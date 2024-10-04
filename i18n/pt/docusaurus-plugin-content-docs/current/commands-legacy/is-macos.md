---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** -> Resultado<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Booleano | &#x1F850; | True se o sistema operacional = macOS, senão False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is macOS.Summary-->O comando **Is macOS** devolve True se o sistema operativo atual for macOS.<!-- END REF-->

#### Exemplo 

Se quiser determinar se o sistema operativo atual for macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

#### Ver também 

[Get system info](get-system-info.md)  
[Is Windows](is-windows.md)  