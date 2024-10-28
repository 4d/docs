---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *tabla* ; *regArray* {; *temp*} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual crear la selección |
| regArray | Integer, Boolean array | &#8594;  | Array de números de registros, o Array de booleanos (True = el registro está en la selección, False = el registro no está en la selección) |
| temp | Text | &#8594;  | Nombre de la selección temporal a crear, o Aplicar el comando a la selección actual si el parámetro se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->El comando **CREATE SELECTION FROM ARRAY** crea la selección temporal *temp* a partir de:

* un array de números de registros absolutos *regArray* de *tabla*,
* o de un array de booleanos.<!-- END REF--> En este caso, los valores del array indican la pertenencia (**True**) o no (**False**) de cada registro de *tabla* a la selección *temp*.

**Atención:** una selección temporal se crea y carga en la memoria. Por lo tanto, asegúrese de que tenga memoria suficiente antes de ejecutar este comando.

Si no pasa *temp* o si pasa una cadena vacía, el comando será aplicado a la selección actual, la cual será entonces actualizada.

Cuando usted utiliza un array de enteros largos con este comando, todos los números del array representan la lista de números de los registros en *temp*. Si un número es incorrecto (registro no creado), se genera el error -10503.

**Nota:** debe asegurarse de que el array no contenga líneas que tengan el mismo valor, de lo contrario la selección resultante será incorrecta.

Cuando utiliza un array booleano con este comando, el elemento X del array indica si el registro número X es (**True**) o no (**False**) en *temp*. El número de elementos en *regArray* debe ser igual al número de registros en *tabla*. Si el array es más pequeño que el número de registros, sólo los registros definidos por el array pueden hacer parte de la selección.

**Nota:** con un array de booleanos, el comando utiliza elementos de los números 0 al X-1.

**Atención** **:** recuerde que un número de registro puede ser reutilizado si el registro es eliminado y se crea otro registro (ver *Acerca de números de registros*).

#### Gestión de errores 

Si un número de registro no es válido (registro no creado), se genera el error -10503\. Puede interceptar este error con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CREATE SET FROM ARRAY](create-set-from-array.md)  
[LONGINT ARRAY FROM SELECTION](longint-array-from-selection.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[USE NAMED SELECTION](use-named-selection.md)  