---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *ventana* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |
| Resultado | Boolean | &#8592; | True si la ventana se reduce en la barra de tareas o en el dock, False en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is window reduced.Summary-->El comando **Is window reduced** devuelve **True** si la ventana cuyo número de referencia se pasa en *ventana* está actualmente reducida en la barra de tareas (Windows) o en el dock (macOS), y **False** en caso contrario.<!-- END REF-->

#### Ver también 

[Is window maximized](is-window-maximized.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1831 |
| Hilo seguro | &cross; |


