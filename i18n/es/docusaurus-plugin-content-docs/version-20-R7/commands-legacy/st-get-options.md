---
id: st-get-options
title: ST GET OPTIONS
slug: /commands/st-get-options
displayed_sidebar: docs
---

<!--REF #_command_.ST GET OPTIONS.Syntax-->**ST GET OPTIONS** ( {* ;} *objeto* ; *opcion* ; *valor* {; *opcion2* ; *valor2* ; ... ; *opcionN* ; *valorN*} )<!-- END REF-->
<!--REF #_command_.ST GET OPTIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| opcion | Integer | &#8594;  | Opción a leer |
| valor | Integer | &#8592; | Valor actual de la opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST GET OPTIONS.Summary-->El comando **ST GET OPTIONS** obtiene el valor actual de una o varias opciones de funcionamiento del campo o de la variable de texto con estilo designada por el parámetro *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve la información del objeto que se está editando, y si el objeto no tiene el foco, el comando devuelve la información de la fuente de datos del objeto (variable o campo).  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecución, el comando devuelve la información de la variable o del campo.

Pase el código de la opción a leer en el parámetro *opcion*. El comando devuelve en *valor* el actual de la opción. Para ambos parámetros, puede utilizar las siguientes constantes, que se encuentran en el tema "*Texto multiestilo*":

| Constante                   | Tipo         | Valor | Comentario                                                                              |
| --------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------- |
| ST Expressions display mode | Entero largo | 1     | El parámetro *valor* puede contener ST Values o ST References<br/><br/> |
| ST References               | Entero largo | 1     | Muestra las cadenas fuente de las expresiones                                           |
| ST Values                   | Entero largo | 0     | Muestra los valores calculados de las expresiones                                       |

#### Ver también 

[ST SET OPTIONS](st-set-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1290 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


