---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *ventana* )} : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |
| Resultado | Integer | &#8592; | Número de referencia del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Window process.Summary-->El comando Window process devuelve el número de proceso que ejecuta la ventana cuyo número de referencia se pasa en *ventana*.<!-- END REF--> Si la ventana no existe, el comando devuelve *0* (cero). 

Si omite el parámetro *ventana*, Window process devuelve el número del proceso de la ventana del primer plano del proceso actual.

#### Ver también 

[Current process](current-process.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 446 |
| Hilo seguro | &cross; |


