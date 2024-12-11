---
id: post-key
title: POST KEY
slug: /commands/post-key
displayed_sidebar: docs
---

<!--REF #_command_.POST KEY.Syntax-->**POST KEY** ( *codigo* {; *modificadores* {; *proceso*}} )<!-- END REF-->
<!--REF #_command_.POST KEY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| codigo | Integer | &#8594;  | Código de un caracter o código de tecla de función |
| modificadores | Integer | &#8594;  | Estado de teclas Modificador |
| proceso | Integer | &#8594;  | Número de referencia del proceso de destino o Fila de atención de eventos de la aplicación, si se omite o si es igual a 0 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.POST KEY.Summary-->El comando POST KEY simula una tecla.<!-- END REF--> Tiene el mismo efecto que cuando un usuario digita un carácter en el teclado. 

Pase el código del carácter en *codigo*. 

Si pasa el parámetro *modificadores*, pase una constante o una combinación del constantes del tema Events (modifiers). Por ejemplo, para simular la tecla Mayús, pase Shift key mask. 

Si pasa el parámetro *proceso*, la tecla se envía al proceso cuyo número de referencia se especifica en *proceso*. Si pasa *0* (cero) o si omite el parámetro, la tecla se envía al nivel de la aplicación y el planificador de 4D la enviará al proceso apropiado.

#### Ejemplo 

Ver el ejemplo del comando [Process number](process-number.md "Process number").

#### Ver también 

*Códigos ASCII*  
*Códigos de teclas de función*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 465 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


