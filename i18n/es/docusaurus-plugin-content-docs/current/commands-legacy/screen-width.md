---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Windows: largo de la ventana de la aplicación o largo de la pantalla si se especifica * Macintosh: largo de la pantalla principal |
| Resultado | Integer | &#8592; | Largo expresado en píxeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Screen width.Summary-->En Windows, Screen width devuelve el largo de la ventana de la aplicación 4D (ventana MDI).<!-- END REF--> Si pasa el parámetro opcional *\**, Screen width devuelve el largo de la pantalla.  

En Macintosh, Screen width devuelve el largo de la pantalla principal, es decir el largo de la pantalla que contiene la barra de menús. 

#### Ver también 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen height](screen-height.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 187 |
| Hilo seguro | &cross; |


