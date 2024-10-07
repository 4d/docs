---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &srarr; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &srarr; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &larr; | Código HTML fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA Get page content.Summary-->El comando WA Get page content devuelve el código HTML de la página actual o en de la página que se va a mostrar en el área web designada por los parámetros *\** y *objeto*.<!-- END REF-->

Este comando devuelve una cadena vacía si el contenido de la página actual no está disponible.

#### Ver también 

[WA SET PAGE CONTENT](wa-set-page-content.md)  