---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &rarr; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &rarr; | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &larr; | Título de la página actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA Get page title.Summary-->El comando WA Get page title devuelve el título de la página actual o que va a ser mostrada en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> El título corresponde a la etiqueta HTML "Title". 

Este comando devuelve una cadena vacía si no hay título disponible para el URL actual.

#### Ver también 

[WA Get page content](wa-get-page-content.md)  