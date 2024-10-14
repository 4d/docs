---
id: post-event
title: POST EVENT
slug: /commands/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *que* ; *mensaje* ; *cuando* ; *ratonX* ; *ratonY* ; *modificadores* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| que | Integer | &srarr; | Tipo de evento |
| mensaje | Integer | &srarr; | Mensaje del evento |
| cuando | Integer | &srarr; | Momento del evento expresado en tics |
| ratonX | Integer | &srarr; | Coordenada horizontal del ratón |
| ratonY | Integer | &srarr; | Coordenada vertical del ratón |
| modificadores | Integer | &srarr; | Estado de las teclas Modificadores |
| proceso | Integer | &srarr; | Número de referencia del proceso de destino o Fila de atención de los eventos de la aplicación, si se omite o si se pasa 0 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.POST EVENT.Summary-->El comando POST EVENT simula un evento de teclado o de ratón.<!-- END REF--> Tiene el mismo efecto que cuando el usuario actúa a través del teclado o del ratón. 

Pase una de las siguientes constantes predefinidas en *que*:

| Constante        | Tipo         | Valor |
| ---------------- | ------------ | ----- |
| Mouse down event | Entero largo | 1     |
| Mouse up event   | Entero largo | 2     |
| Key down event   | Entero largo | 3     |
| Key up event     | Entero largo | 4     |
| Auto key event   | Entero largo | 5     |
  
  
Si el evento es un evento relacionado con el ratón, pase *0* (cero) en *mensaje*. Si el evento es un evento relacionado con el teclado, pase el código del carácter simulado en *mensaje*. 

Generalmente, se pasa el valor devuelto por [Tickcount](tickcount.md "Tickcount") en *cuando*.

Si el evento es un evento relacionado con el ratón, pase las coordenadas horizontal y vertical del clic en *ratonX* y *ratonY*. 

En el parámetro *modificadores*, pase una constante o una combinación de constantes del tema . Por ejemplo, para simular la tecla Mayús, pase Shift key bit.

Si pasa el parámetro *proceso*, el evento se envía al proceso cuyo número se pasa en *proceso*. Si pasa *0* (cero) o si omite este parámetro, el evento se envía a nivel de la aplicación y el planificador de 4D lo enviará al proceso apropiado.

#### Ver también 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  