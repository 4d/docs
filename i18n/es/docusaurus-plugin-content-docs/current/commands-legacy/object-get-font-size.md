---
id: object-get-font-size
title: OBJECT Get font size
slug: /commands/object-get-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font size.Syntax-->**OBJECT Get font size** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font size.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| Resultado | Integer | &#8592; | Tamaño de la fuente en puntos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get font size.Summary-->El comando OBJECT Get font size devuelve el tamaño (en puntos) de la fuente utilizada por el objeto de formulario designado por *objeto*.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que el parámetro objeto es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena.

#### Ver también 

[OBJECT SET FONT SIZE](object-set-font-size.md)  