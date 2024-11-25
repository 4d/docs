---
id: frontmost-process
title: Frontmost process
slug: /commands/frontmost-process
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost process.Syntax-->**Frontmost process** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost process.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Número del proceso de la primera ventana no flotante |
| resultado | Integer | &#8592; | Número del proceso cuyas ventanas están en el primer plano |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Frontmost process.Summary-->Frontmost process devuelve el número del proceso cuya ventana (o ventanas) están en el primer plano.<!-- END REF--> 

Cuando tiene una o más ventanas flotantes abiertas, hay dos capas de ventanas:

* Ventanas estándar
* Ventanas flotantes

Si la función Frontmost process se utiliza en el método de formulario o en un método de objeto de una ventana flotante, la función devuelve el número de referencia de la ventana flotante que se encuentra más adelante en la capa de ventanas flotantes. Si especifica el parámetro opcional *\**, la función devuelve el número de referencia del proceso de la ventana activa que se encuentra en el primer plano en las capas de ventanas estándar.

#### Ejemplo 

Ver el ejemplo para [BRING TO FRONT](bring-to-front.md "BRING TO FRONT").

#### Ver también 

[BRING TO FRONT](bring-to-front.md)  
[WINDOW LIST](window-list.md)  