---
id: object-get-enterable
title: OBJECT Get enterable
slug: /commands/object-get-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enterable.Syntax-->**OBJECT Get enterable** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enterable.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| Resultado | Boolean | &#8592; | True = objeto(s) editable(s) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get enterable.Summary-->El comando OBJECT Get enterable devuelve True si el objeto o grupo de objetos designado por *objeto* tiene el atributo **editable**; de lo contrario, devuelve False.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que el parámetro objeto es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena.

#### Ver también 

[OBJECT SET ENTERABLE](object-set-enterable.md)  