---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de ventana o Ventana del primer plano del proceso actual, si se omite |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ERASE WINDOW.Summary-->El comando ERASE WINDOW borra el contenido de la ventana cuyo número de referencia se pasa en *ventana*.<!-- END REF--> 

Si omite el parámetro *ventana*, ERASE WINDOW borra el contenido de la ventana del primer plano del proceso actual.

Generalmente, utilizará ERASE WINDOW en combinación con [MESSAGE](message.md "MESSAGE") y [GOTO XY](goto-xy.md "GOTO XY"). En este caso, ERASE WINDOW borra el contenido de la ventana y coloca el cursor en la esquina superior izquierda de la ventana, es decir a la posición correspondiente a [GOTO XY](goto-xy.md "GOTO XY") (0; 0). 

No confunda ERASE WINDOW, que borra el contenido de una ventana, con [CLOSE WINDOW](close-window.md "CLOSE WINDOW"), que suprime la ventana de la pantalla.

#### Ver también 

[GOTO XY](goto-xy.md)  
[MESSAGE](message.md)  