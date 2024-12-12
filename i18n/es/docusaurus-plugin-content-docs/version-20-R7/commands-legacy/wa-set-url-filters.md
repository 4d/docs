---
id: wa-set-url-filters
title: WA SET URL FILTERS
slug: /commands/wa-set-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET URL FILTERS.Syntax-->**WA SET URL FILTERS** ( {* ;} *objeto* ; *arrFiltros* ; *arrAutorizRechazar* )<!-- END REF-->
<!--REF #_command_.WA SET URL FILTERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrFiltros | Text array | &#8594;  | Array de filtros |
| arrAutorizRechazar | Boolean array | &#8594;  | Array autorizar- rechazar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA SET URL FILTERS.Summary-->El comando WA SET URL FILTERS permite colocar uno o más filtros para el área Web designada por los parámetros *\** y *objeto*.<!-- END REF-->

Antes de cargar toda página solicitada, 4D consulta la lista de filtros con el fin de verificar si el URL objetivo está permitido. La evaluación del URL está basada en los contenidos de los arrays *arrFiltros* y *arrAutorizRechazar*. 

Si el URL solicitado no está autorizado, no se carga y se genera el evento de formulario On URL Filtering.

Los arrays *arrFiltros* y *arrAutorizRechazar* deben estar sincronizados.   
• Cada elemento del array *arrFiltros* debe contener un URL a filtrar. Puede utilizar *\** como comodín para reemplazar uno o más caracteres.  
• Cada elemento correspondiente en el array *arrAutorizRechazar* debe contener un booleano indicando si el URL debe ser autorizado ([True](true.md "True")) o rechazado ([False](false.md "False")). 

En caso de contradicción a nivel de los parámetros (autorización y rechazo de un mismo URL), se tendrá en cuenta la última configuración. 

Para desactivar el filtro de los URLs, llame el comando y pase arrays vacíos o pase, respectivamente, los valores "*\**" y [True](true.md "True") en los últimos elementos de los arrays *arrFiltros* y *arrAutorizRechazar*.

Una vez ejecutado el comando, los filtros se vuelven propiedad del área Web. Si los arrays *arrFiltros* y *arrAutorizRechazar* son borrados o reinicializados, los filtros permanecen activos siempre que el comando no haya sido ejecutado nuevamente. Para conocer los filtros activos para un área, debe utilizar el comando [WA GET URL FILTERS](wa-get-url-filters.md). 

**Importante:** el filtro de los URLs efectuado por este comando sólo aplica a la variable "URL" primaria de la página, bien sea del usuario, código javascript o código 4D, excepto para el comando [WA OPEN URL](wa-open-url.md) y las URLs que comienzan con "javascript:".

#### Ejemplo 1 

Usted quiere negar el acceso a todos los sitios web .org, .net y .fr:

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*.org")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.net")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.fr")
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Ejemplo 2 

Usted quiere negar el acceso a todos los sitios Web excepto los sitios rusos (.ru):

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
```

```4d
 APPEND TO ARRAY($filtros;"*") //Seleccionar todo
 APPEND TO ARRAY($PermitirRechazar;False) //Negar todo
 APPEND TO ARRAY($filtros;"www.*.ru") //Seleccionar *.ru
 APPEND TO ARRAY($PermitirRechazar;True) //Permitir
```

```4d
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ejemplo 3 

Usted quiere permitir el acceso únicamente a los sitios Web 4D (.com, .fr, .es, etc.):

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
```

```4d
 APPEND TO ARRAY($filtros;"*") //Selecionar todo
 APPEND TO ARRAY($PermitirRechazar;False) //Rechazar todo
 APPEND TO ARRAY($filtros;"www.4D.*") //Seleccionar 4d.fr, 4d.com...
 APPEND TO ARRAY($PermitirRechazar;True) //Permitir
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ejemplo 4 

Usted quiere autorizar el acceso local a la documentación únicamente (ubicada en la carpeta C://doc):

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
```

```4d
 APPEND TO ARRAY($filtros;"*") //Seleccionar todo
 APPEND TO ARRAY($PermitirRechazar;False) //Negar todo
 APPEND TO ARRAY($filtros;"file://C:/doc/*")
  //Seleccionar la ruta al archivo:// autorizado
 APPEND TO ARRAY($PermitirRechazar;True) //Autorizar
```

```4d
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ejemplo 5 

Usted quiere autorizar todos los sitios excepto uno, por ejemplo el sitio Elcaro:

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
```

```4d
 APPEND TO ARRAY($filtros;"*")
 APPEND TO ARRAY($PermitirRechazar;True) //Permitir todos
 APPEND TO ARRAY($filtros;"*elcaro*") //Negar todo el contenido del elcaro
 APPEND TO ARRAY($PermitirRechazar;False)
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
```

#### Ejemplo 6 

Usted quiere negar el acceso a direcciones IP específicas:

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($PermitirRechazar;0)
```

```4d
 APPEND TO ARRAY($filtros;"*") //Seleccionar todo
 APPEND TO ARRAY($PermitirRechazar;True) //Permitir todo
 APPEND TO ARRAY($filtros;86.83.*")  //Seleccionar las IP que comienzan por 86.83.
 APPEND TO ARRAY($PermitirRechazar;False) //Negar
 APPEND TO ARRAY($filtros;86.1*")  //Seleccionar las IP que comienzan por 86.1 (86.10, 86.135 etc.)
 APPEND TO ARRAY($PermitirRechazar;False) //Negar
```

```4d
 WA SET URL FILTERS(MiWArea;$filtros;$PermitirRechazar)
  //(Note que la dirección IP de un dominio puede variar).
```

#### Ver también 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  