---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
slug: /commands/object-set-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( {* ;} *objeto* ; *valorMinimo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| valorMinimo | Date, Time, Number | &#8594;  | Valor mínimo para el objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->El comando **OBJECT SET MINIMUM VALUE** modifica el valor mínimo del objeto o de los objetos designado(s) por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
La propiedad "valorMinimo" se puede aplicar a datos de tipo número, fecha u hora. Para más información, consulte *Valores máximos y mínimos* en el manual de *Diseño*.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
En *valorMinimo*, pase el nuevo valor mínimo a asignar al objeto para el proceso actual. Este valor debe coincidir con el tipo de objeto, de lo contrario se muestra el mensaje error 18 "Los tipos de campo son incompatibles".

#### Ver también 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1242 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


