---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->El comando WA OPEN FORWARD URL carga en el área web designada por los parámetros *\** y *objeto* el URL siguiente en la secuencia de los URLs abiertos.<!-- END REF-->

Si no hay un URL siguiente (es decir, si el usuario no ha regresado al URL anterior), el comando no hace nada. Puede probar la disponibilidad de un URL siguiente utilizando el comando [WA Forward URL available](wa-forward-url-available.md "WA Forward URL available").

#### Ver también 

[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN URL](wa-open-url.md)  