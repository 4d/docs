---
id: create-set-from-array
title: CREATE SET FROM ARRAY
slug: /commands/create-set-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET FROM ARRAY.Syntax-->**CREATE SET FROM ARRAY** ( *tabla* ; *arrayReg* {; *nomConjunto*} )<!-- END REF-->
<!--REF #_command_.CREATE SET FROM ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del conjunto |
| arrayReg | Integer, Boolean array | &#8594;  | Array de número de registros o Array de booleanos (True = el registro está en el conjunto, False = el registro no está en el conjunto) |
| nomConjunto | Text | &#8594;  | Nombre del conjunto a crear o Aplicar el comando a Userset si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE SET FROM ARRAY.Summary-->El comando CREATE SET FROM ARRAY crea *nomCon* a partir de: 

* Un array de número de registros absolutos *arrayReg* de la tabla *tabla*,
* o un array de booleanos *arrayReg*.<!-- END REF--> En este caso, los valores del array indican si cada registro en la tabla pertenece ([True](true.md "True")) o no ([False](false.md "False")) a *nomCon*.

Cuando utilice este comando y pasa un array entero largo en *arrayReg*, todos los números en el array representan la lista de números de registros que está en *nomCon*. Si un número es inválido (por ejemplo, si un registro no ha sido creado), se genera el error -10503.

Cuando utilice este comando y pase un array booleano en *arrayReg*, el elemento N del array indica si el registro "N" está ([True](true.md "True")) o no ([False](false.md "False")) en *nomCon*. En principio, el número de elementos del array debe ser igual al número de registros en la tabla. Si el array es más pequeño que el número de registros, sólo los registros definidos por el array estarán en el conjunto.

**Nota:** con un array de booleanos, el comando utiliza los elementos 0 a N-1.

Si no pasa el parámetro *nomCon* o si pasa una cadena vacía, el comando se aplica al conjunto sistema Userset.

#### Gestión de errores 

En un array de enteros largos, si un número de registro no es válido (registro no creado), se genera el error -10503.

#### Ver también 

[BOOLEAN ARRAY FROM SET](boolean-array-from-set.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  