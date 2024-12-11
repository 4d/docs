---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *ventana* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |
| Resultado | Boolean | &#8592; | True si la ventana está maximizada, False en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is window maximized.Summary-->El comando **Is window maximized** devuelve **True** si la ventana cuyo número de referencia se pasa en *ventana* está actualmente maximizada, y **False** en caso contrario.<!-- END REF-->

#### Ejemplo 

Quiere cambiar entre el estado maximizado y el anterior:

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

#### Ver también 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1830 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


