---
id: reduce-restore-window
title: REDUCE RESTORE WINDOW
slug: /commands/reduce-restore-window
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE RESTORE WINDOW.Syntax-->**REDUCE RESTORE WINDOW** ( *ventana* )<!-- END REF-->
<!--REF #_command_.REDUCE RESTORE WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REDUCE RESTORE WINDOW.Summary-->El comando **REDUCE RESTORE WINDOW** reduce/expande la ventana cuyo número de referencia se pasó en *ventana* a/desde la barra de tareas en Windows o el dock en macOS.<!-- END REF-->   
  
El comando cambia el estado de la ventana:

* Si la ventana estaba desplegada, el comando reduce la ventana a la barra de tareas o al dock.
* Si la ventana estaba reducida, el comando restaura la ventana a su estado anterior.

**Nota:** en macOS, el comando es asíncrono.

#### Ver también 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  
[MINIMIZE WINDOW](minimize-window.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1829 |
| Hilo seguro | &cross; |


