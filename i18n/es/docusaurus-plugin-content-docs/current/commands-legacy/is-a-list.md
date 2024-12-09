---
id: is-a-list
title: Is a list
slug: /commands/is-a-list
displayed_sidebar: docs
---

<!--REF #_command_.Is a list.Syntax-->**Is a list** ( *lista* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a list.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Referencia de la lista a probar |
| Resultado | Boolean | &#8592; | TRUE si la lista es una lista jerárquica FALSE si la lista no es una lista jerárquica |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Is a list.Summary-->El comando Is a list devuelve TRUE si el valor pasado en *lista* es una referencia válida a una lista jerárquica.<!-- END REF--> De lo contrario, devuelve FALSE.

#### Ejemplo 

Ver el ejemplo del comando [CLEAR LIST](clear-list.md "CLEAR LIST").

