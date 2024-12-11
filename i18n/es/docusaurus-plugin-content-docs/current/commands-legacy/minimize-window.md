---
id: minimize-window
title: MINIMIZE WINDOW
slug: /commands/minimize-window
displayed_sidebar: docs
---

<!--REF #_command_.MINIMIZE WINDOW.Syntax-->**MINIMIZE WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.MINIMIZE WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o si se omite todas las ventanas del primer plano del proceso actual (Windows) o ventana del primer plano del proceso actual (Mac OS) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MINIMIZE WINDOW.Summary-->El comando MINIMIZE WINDOW define el tamaño de la ventana, cuyo número se pasó en *ventana*, del tamaño que tenía antes de ser maximizada.<!-- END REF--> Si se omite *ventana*, el comando aplica a cada ventana de la aplicación (Windows) o a la ventana del primer plano del proceso actual (en Mac OS). 

Este comando tiene el mismo efecto que un clic en la casilla de reducción de la aplicación 4D: 

##### En Windows 

La ventana vuelve a su tamaño inicial, es decir, su tamaño antes de ser maximizada. Si se omite el parámetro *ventana*, todas las ventanas de la aplicación son redimensionadas a su tamaño inicial. 

![](../assets/en/commands/pict39369.es.png)

  
Casilla de reducción en Windows

##### Bajo Mac OS 

El tamaño de la ventana se reduce a su tamaño inicial (su tamaño antes de ser maximizada). Si el parámetro ventana se omite, la ventana del primer plano del proceso actual retorna a su tamaño inicial. 

![](../assets/en/commands/pict39370.es.png)

  
Casilla de zoom/reducción bajo Mac OS

Si las ventanas a las cuales se aplica este comando no fueron maximizadas previamente (manualmente o utilizando [MAXIMIZE WINDOW](maximize-window.md "MAXIMIZE WINDOW")), o si el tipo de ventana no incluye una casilla de zoom, el comando no tiene efecto. Para mayor información sobre tipos de ventanas, consulte la sección . 

**Nota:** esta función no debe confundirse con la reducción de una ventana a un botón (Windows) o en el Dock (Mac OS), la cual se genera por medio de un clic en el siguiente botón:

![](../assets/en/commands/pict39371.es.png)  
Windows

![](../assets/en/commands/pict39372.es.png)  
Mac OS

#### Ver también 

[MAXIMIZE WINDOW](maximize-window.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 454 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


