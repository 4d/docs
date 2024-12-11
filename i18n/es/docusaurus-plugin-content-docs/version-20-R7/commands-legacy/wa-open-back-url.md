---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA OPEN BACK URL.Summary-->El comando WA OPEN BACK URL carga en el área web designada por los parámetros *\** y *objeto* el URL precedente en la secuencia de los URLs abiertos.<!-- END REF-->

Si no hay un URL precedente, el comando no hace nada. Puede probar la disponibilidad de un URL precedente con la ayuda del comando [WA Back URL available](wa-back-url-available.md "WA Back URL available"). 

#### Ver también 

[WA OPEN FORWARD URL](wa-open-forward-url.md)  
[WA OPEN URL](wa-open-url.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1021 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


