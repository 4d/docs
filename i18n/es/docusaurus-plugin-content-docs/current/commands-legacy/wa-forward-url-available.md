---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &srarr; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &srarr; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Boolean | &larr; | True si existe un URL siguiente en la secuencia de URLs abiertos; de lo contrario, False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA Forward URL available.Summary-->El comando WA Forward URL available permite conocer si existe un URL siguiente disponible en la secuencia de URLs abiertos en el área web designada por los parámetros *\** y *objeto*.<!-- END REF-->

El comando devuelve [True](true.md "True") si existe un URL y de lo contrario [False](false.md "False"). Particularmente, este comando puede utilizarse, en un interfaz personalizada, activar o desactivar los botones de navegación.

#### Ver también 

[WA Back URL available](wa-back-url-available.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  