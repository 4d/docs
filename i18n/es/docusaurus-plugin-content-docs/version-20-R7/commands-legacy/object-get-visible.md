---
id: object-get-visible
title: OBJECT Get visible
slug: /commands/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable o campo (si se omite *) |
| Resultado | Boolean | &#8592; | True = objeto(s) visible(s), de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get visible.Summary-->El comando OBJECT Get visible devuelve True si el objeto o grupo de objetos designado por *objeto* tiene el atributo visible y de lo contrario False.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro objeto es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena. 

#### Ver también 

[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1075 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


