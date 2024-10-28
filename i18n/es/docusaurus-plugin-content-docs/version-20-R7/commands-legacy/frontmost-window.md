---
id: frontmost-window
title: Frontmost window
slug: /commands/frontmost-window
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost window.Syntax-->**Frontmost window** {( * )} -> Resultado<!-- END REF-->
<!--REF #_command_.Frontmost window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, tiene en cuenta las ventanas flotantes Si se omite, ignora las ventanas flotantes |
| Resultado | Integer | &#8592; | Número de referencia de ventana |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Frontmost window.Summary-->El comando Frontmost window devuelve el número de referencia de la ventana ubicada en el primer plano.<!-- END REF-->

#### Ver también 

[Frontmost process](frontmost-process.md)  
[Next window](next-window.md)  