---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** : Boolean<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se sistema operacional = Windows, senão Falso |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is Windows.Summary-->O comando **Is Windows** devolve True se o sistema operativo atual for Windows.<!-- END REF-->

#### Exemplo 

Se quiser determinar se o sistema operativo atual é Windows:

```4d
 If(Is Windows)
    ALERT("É Windows")
 Else
    ALERT("Não é Windows")
 End if
```

#### Ver também 

[System info](system-info.md)  
[Is macOS](is-macos.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1573 |
| Thread-seguro | &check; |


