---
id: post-click
title: POST CLICK
slug: /commands/post-click
displayed_sidebar: docs
---

<!--REF #_command_.POST CLICK.Syntax-->**POST CLICK** ( *ratonX* ; *ratonY* {; *proceso*} {; *} )<!-- END REF-->
<!--REF #_command_.POST CLICK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ratonX | Integer | &#8594;  | Coordenada horizontal |
| ratonY | Integer | &#8594;  | Coordenada vertical |
| proceso | Integer | &#8594;  | Número de referencia del proceso de destino o fila de atención de eventos de la aplicación, si se omite o si se pasa 0 |
| * | Operator |  &#8594;  | Si se especifica, utilizar el sistema de coordenadas globales Si se omite, utilizar el sistema de coordenadas locales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.POST CLICK.Summary-->El comando POST CLICK simula un clic del ratón.<!-- END REF--> Tiene el mismo efecto que cuando el usuario hace clic en el botón del ratón. 

Pase las coordenadas horizontal y vertical del clic en *ratonX* y *ratonY*. Si pasa el parámetro *\**, expresa estas coordenadas con respecto a la pantalla. Si omite el parámetro *\**, expresa estas coordenadas con relación a la ventana del primer plano del proceso cuyo número de proceso se pasa en *proceso*. 

Si especifica el parámetro proceso *proceso*, el clic se envía al proceso cuyo número de proceso se pasa en *proceso*. Si pasa *0* (cero) o si omite el parámetro, el clic se envía a nivel de la aplicación y el planificador 4D la enviará al proceso apropiado.

#### Ver también 

[POST EVENT](post-event.md)  
[POST KEY](post-key.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 466 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


