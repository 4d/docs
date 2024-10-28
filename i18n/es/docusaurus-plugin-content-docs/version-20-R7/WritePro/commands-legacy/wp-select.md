---
id: wp-select
title: WP SELECT
slug: /WritePro/commands/wp-select
displayed_sidebar: docs
---

<!--REF #_command_.WP SELECT.Syntax-->**WP SELECT** ( {{* ;} *areaWP*;} {*targetObj*} {; *rangoInicio* ; *rangoFinal*} )<!-- END REF-->
<!--REF #_command_.WP SELECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, areaWP es un nombre de objeto de formulario (cadena). Si se omite, areaWP es un campo o una variable objeto (documento). |
| areaWP | Text, Object | &#8594;  | Nombre del objeto de formulario (si se especifica *) o campo o variable objeto 4D Write Pro (si se omite *) |
| targetObj | Object | &#8594;  | Nombre del objeto formulario (si * se especifica) o variable objeto 4D Write Pro o campo (si * se omite) |
| rangoInicio | Integer | &#8594;  | Posición inicial del rango texto |
| rangoFinal | Integer | &#8594;  | Posición final del rango texto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP SELECT.Summary-->El comando **WP SELECT** crea una nueva selección de texto en el área 4D Write Pro *wpArea*, basado en el *rangoObj* o un nuevo rango definido por *rangoInicio* y *rangoFinal*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es un campo objeto o variable 4D Write Pro. Si no se pasa un área 4D Write Pro en el parámetro *wpArea*, el comando no hace nada.

**Nota**: este comando sólo puede utilizarse si *wpArea* está asociada con un objeto de formulario (es decir, se muestra en el formulario/página actual).

Para definir la selección, puede pasar un rango objeto existente en *rangoObj*, o pase un par de límites *rangoInicio* / *rangoFinal*:

Las siguientes sintaxis son soportadas:

* *WP SELECT({\* ;} wpArea ; targetObj)*  
donde *targetObj* puede ser:  
   * un rango, o  
   * un elemento (tabla / fila / párrafo / imagen anclada o en línea / caja de texto / cuerpo / encabezado / pie / sección / sub-sección) o  
   * un documento 4D Write Pro (sólo el elemento cuerpo utilizado).
* *WP SELECT({\* ;} wpArea ;* **rangoInicio ; rangoFinal)*
* *WP SELECT( targetObj {;* **rangoInicio ; rangoFinal} )*  
donde *targetObj* puede ser:  
   * un rango, o  
   * una referencia de elemento (tabla / fila / párrafo / imagen anclada o en línea / cuerpo / encabezado / pie / sección / sub-sección)  
donde *rangoInicio* y *rangoFinal* son permitidos únicamente para los siguientes elementos: cuerpo / encabezado / pie / sección / sub-sección.

En *rangoInicio* y *rangoFinal* pase los valores correspondientes a la posición de los primeros y últimos caracteres a seleccionar en el área. Puede pasar wk start text en *rangoInicio* para definir el comienzo del área y wk end text en *rangoFinal* para definir el final del área. Tenga en cuenta que un documento 4D Write Pro no sólo contiene texto visible sino también las etiquetas de formato incluidas en el rango.

#### Ejemplo 

El siguiente código:

```4d
 $range:=WP Text range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range)
```

... tendrá el mismo resultado que:

```4d
 WP SELECT(*;"WParea";wk start text;12)
```

#### Ver también 

[WP Text range](wp-text-range.md)  