---
id: wp-text-range
title: WP Text range
slug: /WritePro/commands/wp-text-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Text range.Syntax-->**WP Text range** ( *objRango* ; *rangoInicio* ; *rangoFin* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Text range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o referencia del elemento o documento 4D Write Pro |
| rangoInicio | Integer | &#8594;  | Punto inicial del rango de texto |
| rangoFin | Integer | &#8594;  | Punto final del rango de texto |
| Resultado | Object | &#8592; | Rango de objeto |

<!-- END REF-->

#### Compatibilidad 

<!--REF #_command_.WP Text range.Summary-->**WP Text range** recibió el nombre **WP Get range** en versiones anteriores de 4D Write Pro.<!-- END REF--> Ha sido renombrado para mayor claridad.

#### Descripción 

El comando **WP Text range** devuelve un nuevo de rango de selección (objRange) que contiene los caracteres ubicados entre *rangoInicio* y *rangoFin* en el área 4D Write Pro *wpArea*.

Un **objeto rango de texto 4D Write Pro** se puede utilizar para manejar los atributos de una parte del documento (especialmente con los comandos [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) y [WP SET ATTRIBUTES](../commands/wp-set-attributes.md)). Para más información, consulte el párrafo *Comandos de gestión de rangos*.

Puede pasar en *objRango*:

* un rango, o
* un elemento (tabla/ fila / párrafo / imagen en línea/ cuerpo / encabezado / pie / sección / subsección), o
* documento 4D Write Pro

Si no se pasa ningún objeto válido en el parámetro *objRango*, se devuelve un rangeObj vacío.

En *rangoInicio* y *rangoFin*, pase los valores correspondientes a la posición de los primeros y últimos caracteres a seleccionar en el documento. Puede pasar wk start text en *rangoInicio* para definir el comienzo del documento y wk end text en *rangoFin* para definir el final del documento. Tenga en cuenta que un documento 4D Write Pro no sólo contiene texto visible, sino también las etiquetas de formato que se incluyen en el rango.

**Nota:** Si pasó una referencia de elemento de tabla, fila, párrafo, imagen en línea, cuerpo, encabezado, pie, sección o subsección en *objRango*, *rangoInicio* y *rangoFin* serán relativos al índice inicial y final del rango del elemento. Por ejemplo, si se pasa un encabezado, wk start text designa el carácter de inicio del encabezado y wk end text el carácter de finalización del encabezado; si se pasa una referencia de elemento de tabla, el comando devolverá el rango de texto relativo a la tabla referenciada por *objRango*; si se pasa una sección *rangoInicio* y *rangoFin* son relativos al cuerpo del documento (área padre de un rango creado de una sección). Ver ejemplo 2.

#### Ejemplo 1 

Usted desea seleccionar un rango de 12 caracteres comenzando desde el principio del campo 4D Write Pro. El campo se muestra en un objeto de formulario:

![](../../assets/en/WritePro/commands/pict2644268.en.png)

Si ejecuta:

```4d
 $range2:=WP Get range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range2)
```

...el resultado es:

![](../../assets/en/WritePro/commands/pict2644270.en.png)

#### Ejemplo 2 

Quiere crear un rango de una sección:

```4d
 var $wpRange : Object
 $wpRange:=WP Text range(wpSection;1;11) //devuelve un rango hecho de los primeros 10 caracteres de la sección
  //si sección inicia en 100 en el documento:
  //$wpRange.start = 100
  //$wpRange.end = 111
```

#### Ver también 

[WP Bookmark range](wp-bookmark-range.md)  
[WP Get body](wp-get-body.md)  
[WP Get header](wp-get-header.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP SELECT](wp-select.md)  
[WP Selection range](wp-selection-range.md)  
[WP Table range](wp-table-range.md)  