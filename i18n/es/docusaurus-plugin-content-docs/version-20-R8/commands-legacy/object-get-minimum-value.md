---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *objeto* ; *valorMin* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| valorMin | Date, Time, Number | &#8592; | Valor mínimo actual del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->El comando **OBJECT GET MINIMUM VALUE** devuelve, en la variable *valorMin*, el valor mínimo actual del objeto o de los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF-->

La propiedad "Valor mínimo" puede definirse utilizando la Lista de propiedades en modo Diseño, o utilizando el comando [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

#### Ver también 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1243 |
| Hilo seguro | &cross; |


