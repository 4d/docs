---
id: get-mouse
title: GET MOUSE
slug: /commands/get-mouse
displayed_sidebar: docs
---

<!--REF #_command_.GET MOUSE.Syntax-->**GET MOUSE** ( *ratonX* ; *ratonY* ; *botonRaton* {; *} )<!-- END REF-->
<!--REF #_command_.GET MOUSE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ratonX | Real | &harr; | Coordenada horizontal del ratón |
| ratonY | Real | &harr; | Coordenada vertical del ratón |
| botonRaton | Integer | &harr; | Estado del botón del ratón: 0 = Botón arriba 1 = Botón presionado 2 = Botón derecho presionado 3 = Los dos botones presionados |
| * | Operador | &srarr; | Si se especifica, utlizar el sistema de coordenadas globales Si se omite, utilizar el sistema de coordenadas locales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET MOUSE.Summary-->El comando GET MOUSE devuelve el estado actual del ratón.<!-- END REF-->

Las coordenadas horizontal y vertical se devuelven en *ratonX* y *ratonY*. Si pasa el parámetro *\**, las coordenadas se expresan con relación a la pantalla principal (modo macOS y Windows SDI) o a la ventana de la aplicación (modo Windows MDI). Si omite el parámetro *\**, se expresan con relación a la ventana del formulario actual(si la hay) del proceso actual .

El parámetro *botonRaton* devuelve el estado de los botones, como se describió anteriormente.

**Nota:** los valores 2 y 3 pueden devolverse bajo Mac OS X a partir de la versión 10.2.5 únicamente.

#### Ejemplo 

Ver el ejemplo del comando [Pop up menu](pop-up-menu.md "Pop up menu").

#### Ver también 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[ON EVENT CALL](on-event-call.md)  
[Shift down](shift-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  