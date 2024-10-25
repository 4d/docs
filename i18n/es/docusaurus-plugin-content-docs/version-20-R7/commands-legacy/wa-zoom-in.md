---
id: wa-zoom-in
title: WA ZOOM IN
slug: /commands/wa-zoom-in
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM IN.Syntax-->**WA ZOOM IN** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA ZOOM IN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA ZOOM IN.Summary-->El comando WA ZOOM IN aumenta el tamaño del contenido mostrado en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> 

Bajo macOS, el alcance de este comando es la sesión 4D: la configuración efectuada por este comando no se conserva después del cierre de la aplicación 4D.

Bajo Windows, el alcance de este comando es global: la configuración se conserva después del cierre de la aplicación 4D.

#### Ver también 

[WA ZOOM OUT](wa-zoom-out.md)  