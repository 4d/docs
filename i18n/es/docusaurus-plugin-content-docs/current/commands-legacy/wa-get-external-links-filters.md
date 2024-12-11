---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( {* ;} *objeto* ; *arrFiltros* ; *arrAutorizRechazar* )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrFiltros | Text array | &#8592; | Array de filtros |
| arrAutorizRechazar | Boolean array | &#8592; | Array autorizar-rechazar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->El comando WA GET EXTERNAL FILTERS LINKS devuelve en los arrays *arrFiltros* y *arrAutorizRechazar*, los filtros de enlaces externos del área web designada por los parámetros *\** y *objeto*.<!-- END REF--> Si ningún filtro está activo, los arrays se devuelven vacíos. 

Los filtros son instalados por el comando [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md "WA SET EXTERNAL LINKS FILTERS"). Si los arrays son reinicializados durante la sesión, el comando WA GET EXTERNAL LINKS FILTERS permite conocer el la configuración actual.

#### Ver también 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1033 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


