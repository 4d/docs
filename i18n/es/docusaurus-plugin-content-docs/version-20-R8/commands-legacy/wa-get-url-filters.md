---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *objeto* ; *arrFiltros* ; *arrAutorizRechazar* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrFiltros | Text array | &#8592; | Array filtros |
| arrAutorizRechazar | Boolean array | &#8592; | Array Autorizar-rechazar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA GET URL FILTERS.Summary-->El comando WA GET URL FILTERS devuelve en los arrays *arrFiltros* y *arrAutorizRechazar*, los filtros activos en el área web designada por los parámetros *\** y *objeto* .<!-- END REF--> Si ningún filtro está activo, los arrays se devuelven vacíos. 

Los filtros son instalados por el comando [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS"). Si los arrays se reinicializan durante la sesión, el comando WA GET URL FILTERS puede utilizarse para conocer los parámetros actuales.

#### Ver también 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1031 |
| Hilo seguro | &cross; |


