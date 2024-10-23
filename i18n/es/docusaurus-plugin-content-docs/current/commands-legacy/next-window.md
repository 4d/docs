---
id: next-window
title: Next window
slug: /commands/next-window
displayed_sidebar: docs
---

<!--REF #_command_.Next window.Syntax-->**Next window** ( *ventana* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Next window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |
| Resultado | Integer | &#8592; | Número de referencia de ventana |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 



El comando Next window devuelve el número de referencia de la ventana ubicada “detrás” de la ventana que se pasa en *ventana* (en función del orden de las ventanas)

#### Ver también 

[Frontmost window](frontmost-window.md)  