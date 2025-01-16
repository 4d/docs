---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Boolean | &#8592; | True si hay un URL anterior en la secuenca de URLs abiertos; de lo contrario, False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA Back URL available.Summary-->El comando WA Back URL available se utiliza para saber si existe un URL precedente disponible en la secuencia de URLs abiertos en el área web designada por los parámetros *\** y *objeto*.<!-- END REF-->

El comando devuelve [True](true.md "True") si existe un URL y de lo contrario [False](false.md "False"). Particularmente, este comando puede utilizarse en una interfaz personalizada, para activar o desactivar los botones de navegación.

#### Ver también 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1026 |
| Hilo seguro | &cross; |


