---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &#8592; | Último URL filtrado |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA Get last filtered URL.Summary-->El comando WA Get last filtered URL devuelve el último URL filtrado en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> 

El URL puede haber sido filtrado por una de las siguientes razones:

* El URL fue negado por un filtro (comando [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS")),
* El enlace está abierto en el navegador por defecto (comando [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md "WA SET EXTERNAL LINKS FILTERS")),
* El URL intenta abrir una ventana pop up.

Es recomendable llamar este comando en el contexto de los eventos de formulario On URL Filtering, On Open External Link y On Window Opening Denied con el fin de conocer el URL filtrado.

#### Ver también 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  