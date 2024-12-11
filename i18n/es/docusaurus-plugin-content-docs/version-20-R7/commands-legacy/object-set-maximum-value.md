---
id: object-set-maximum-value
title: OBJECT SET MAXIMUM VALUE
slug: /commands/object-set-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Syntax-->**OBJECT SET MAXIMUM VALUE** ( {* ;} *objeto* ; *valorMax* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si especifica, objeto es un nombre de objeto(cadena)<br/>Si se omite, objeto es un campo o variable |
| objeto | any | &#8594;  | Nombre del objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| valorMax | Date, Time, Number | &#8594;  | Valor máximo para el objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Summary-->El comando **OBJECT SET MAXIMUM VALUE** modifica el valor máximo del objeto o de los objetos designado(s) por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
La propiedad "Valor máximo" se puede aplicar a datos de tipo número, fecha u hora. Para más información, consulte *Valores máximos y mínimos* en el manual de *Diseño*.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
En *valorMax*, pase el nuevo valor máximo que desea asignar al objeto para el proceso actual. Este valor debe coincidir con el tipo de objeto, de lo contrario se devuelve el error 18 "Tipos incompatibles".

#### Ver también 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1244 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


