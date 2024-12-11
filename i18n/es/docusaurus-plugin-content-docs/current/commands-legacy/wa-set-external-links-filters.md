---
id: wa-set-external-links-filters
title: WA SET EXTERNAL LINKS FILTERS
slug: /commands/wa-set-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Syntax-->**WA SET EXTERNAL LINKS FILTERS** ( {* ;} *objeto* ; *arrFiltros* ; *arrAutorizRechazar* )<!-- END REF-->
<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrFiltros | Text array | &#8594;  | Array de filtros |
| arrAutorizRechazar | Boolean array | &#8594;  | Array autorizar- rechazar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Summary-->El comando WA SET EXTERNAL LINKS FILTERS permite establecer uno o más filtros de enlaces externos para la zona web designada por los parámetros *\** y *objeto*.<!-- END REF--> Los filtros de enlaces externos determinan si un URL asociado a la página actual vía un enlace debe abrirse en el área web o en el navegador web por defecto del equipo. 

Cuando el usuario hace clic en un enlace en la página actual, 4D consulta la lista de los filtros externos con el fin de verificar el URL solicitado debe abrirse en el navegador de la máquina. Si es así, la página correspondiente al URL se muestra en el navegador web y el se genera el evento de formulario On Open External Link. De lo contrario (el funcionamiento por defecto), la página correspondiente al URL se muestra en el área web. La evaluación del URL está basada en el contenido de los arrays *arrFiltros* y *arrAutorizRechazar*.

Los arrays *arrFiltros* y *arrAutorizRechazar* deben estar sincronizados. 

* Cada línea del array *arrFiltros* debe contener un URL a filtrar. Puede utilizar *\** como comodín para reemplazar uno o más caracteres.
* Cada línea correspondiente en el array *arrAutorizRechazar* debe contener un booleano indicando si el URL debe ser abierto en el área web ([True](true.md "True")) o en el navegador web ([False](false.md "False")).

En caso de contradicción a nivel de los parámetros (autorización y rechazo de un mismo URL), se tiene en cuenta la última configuración.

Para desactivar el filtro de los URL, llame el comando y pase los arrays vacío o pase, respectivamente los valores "*\**" y [True](true.md "True") en los últimos elementos de los arrays *arrFiltros* y *arrAutorizRechazar*.

**Importante:** el filtro establecido por el comando [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS") se tiene en cuenta antes que el del comando WA SET EXTERNAL LINKS FILTERS. Esto significa que si un URL es rechazado por un filtro del comando [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS"), no podrá abrirse en el navegador incluso si es definido explícitamente por el comando WA SET EXTERNAL LINKS FILTERS (ver ejemplo 2).

#### Ejemplo 1 

Este ejemplo provoca la apertura de sitios en navegadores externos:

```4d
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
 
 APPEND TO ARRAY($filtros;"*www.google.*") //Seleccionar "google"
 APPEND TO ARRAY($PermitirRechazar;False)
  //False: este enlace se abrirá en un navegador externo
 APPEND TO ARRAY($filtros;"*www.apple.*")
 APPEND TO ARRAY($PermitirRechazar;False)
  //False: este enlace se abrirá en un navegador externo
 WA SET EXTERNAL LINKS FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ejemplo 2 

Este ejemplo combina los filtros de sitios y de enlaces externos:

```4d
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
 APPEND TO ARRAY($filtros;"*www.google.*") //Seleccionar "google"
 APPEND TO ARRAY($PermitirRechazar;False) //Enlace denegado
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
 
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
 APPEND TO ARRAY($filtros;"*www.google.*") //Seleccionar "google"
 APPEND TO ARRAY($PermitirRechazar;False)
  //False: este enlace debe abrirse en un navegador externo pero este parámetro
  //no tiene efecto porque el enlace será bloqueado por el filtro del URL.
 WA SET EXTERNAL LINKS FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ver también 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1032 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


