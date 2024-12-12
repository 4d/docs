---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o Ventana del primer plano del proceso actual, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REDRAW WINDOW.Summary-->El comando REDRAW WINDOW provoca una actualización del contenido de la ventana cuyo número de referencia se pasa en *ventana*.<!-- END REF--> 

Si omite el parámetro *ventana*, REDRAW WINDOW aplica a la ventana del primer plano del proceso actual.

**Nota:** 4D administra automáticamente las actualizaciones gráficas de las ventanas cada vez que usted mueve, redimensiona o pasa al primer plano una ventana, así como también cuando usted cambia el formulario y/o los valores mostrados en la ventana. Este comando se utiliza con muy poca frecuencia.

#### Ver también 

[ERASE WINDOW](erase-window.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 456 |
| Hilo seguro | &cross; |


