---
id: boolean-array-from-set
title: BOOLEAN ARRAY FROM SET
slug: /commands/boolean-array-from-set
displayed_sidebar: docs
---

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Syntax-->**BOOLEAN ARRAY FROM SET** ( *arrBool* {; *conjunto*} )<!-- END REF-->
<!--REF #_command_.BOOLEAN ARRAY FROM SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrBool | Boolean array | &#8592; | Array para indicar si un registro está en un conjunto o no |
| conjunto | Text | &#8594;  | Nombre del conjunto o UserSet si se omite este parámetro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Summary-->El comando BOOLEAN ARRAY FROM SET llena un array de booleanos indicando si cada registro en la tabla está o no en *conjunto*.<!-- END REF--> 

Los elementos en el array se ordenan en función del orden de creación de los registros en la tabla (números de registro absolutos). Si N es el número de registros en la tabla, el elemento 0 del array corresponde al registro número 0, el elemento 1 del array corresponde al registro número 1, etc. 

Cada elemento del array es:

* Verdadero si el registro correspondiente pertenece al conjunto.
* Falso si el registro correspondiente no pertenece al conjunto.

**Advertencia:** el número total de elementos en el array *arrBool* no es significativo. Por razones estructurales, este número puede ser diferente del número de registros realmente presentes en la tabla. Los posibles elementos extras son definidos como [False](false.md "False").

Si no pasa el parámetro *conjunto*, el comando utilizará UserSet en el proceso actual.

#### Ver también 

[CREATE SET FROM ARRAY](create-set-from-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 646 |
| Hilo seguro | &check; |


