---
id: screen-height
title: Screen height
slug: /commands/screen-height
displayed_sidebar: docs
---

<!--REF #_command_.Screen height.Syntax-->**Screen height** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Windows: altura de la ventana de la aplicación o altura de la pantalla si se especifica * Macintosh: altura de la pantalla principal |
| Resultado | Integer | &#8592; | Altura expresada en píxeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Screen height.Summary-->En Windows, Screen height devuelve la altura de la ventana de la aplicación 4D (ventana MDI).<!-- END REF--> Si pasa el parámetro opcional *\**, Screen height devuelve la altura de la pantalla.

En Mac OS, Screen height devuelve la altura de la pantalla principal, es decir la pantalla donde está ubicada la barra de menús.

#### Ver también 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen width](screen-width.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 188 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


