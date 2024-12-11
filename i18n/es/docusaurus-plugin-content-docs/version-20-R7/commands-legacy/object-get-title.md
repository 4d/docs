---
id: object-get-title
title: OBJECT Get title
slug: /commands/object-get-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get title.Syntax-->**OBJECT Get title** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get title.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o campo o variable texto (si se omite *) |
| Resultado | Text | &#8592; | Título del botón |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get title.Summary-->El comando OBJECT Get title devuelve el título (etiqueta) del objeto de formulario designado por *objeto* .<!-- END REF--> 

**OBJECT Get title** puede utilizarse con todo tipo de objetos simples que contengan una etiqueta:

* botones,
* casillas de selección
* botones de radio
* textos estáticos
* áreas de grupo.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena. 

#### Ver también 

[OBJECT SET TITLE](object-set-title.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1068 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


