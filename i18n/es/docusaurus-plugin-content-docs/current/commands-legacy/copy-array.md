---
id: copy-array
title: COPY ARRAY
slug: /commands/copy-array
displayed_sidebar: docs
---

<!--REF #_command_.COPY ARRAY.Syntax-->**COPY ARRAY** ( *fuente* ; *destino* )<!-- END REF-->
<!--REF #_command_.COPY ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Array | &#8594;  | Array a copiar |
| destino | Array | &#8592; | Array de destino |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY ARRAY.Summary-->El comando COPY ARRAY crea o remplaza el array *destino* con el mismo contenido, tamaño y tipo del array *fuente*.<!-- END REF-->en el caso de los arrays numéricos de diferentes tipos, se mantiene el tipo del array *destino*.

Los arrays *fuente* y *destino* pueden ser locales, proceso o interproceso. El alcance del array no tiene importancia en el momento de copiar arrays.

**Notas:**

* En modo compilado, el array *destino* debe ser del mismo tipo que el array *fuente*. Thus, it is recommended to always use arrays of the same type to have similar behavior in interpreted and compiled modes.
* Al copiar arrays de objetos, sólo se duplican las referencias de los objetos que las contienen y no los objetos. Esto significa que cualquier modificación realizada en un objeto de un array se aplicará a todas las instancias existentes del objeto en los arrays copiados. Si necesita duplicar objetos, debe utilizar el comando [OB Copy](ob-copy.md).

#### Ejemplo 

El siguiente ejemplo llena el array C. Luego crea un nuevo array, llamado D, del mismo tamaño de C y con el mismo contenido:

```4d
 ALL RECORDS([Personas]) // Seleccionar todos los registros en Personas
 SELECTION TO ARRAY([Personas]Empresa;C) // Mover los datos del campo empresa al array C
 COPY ARRAY(C;D) // Copiar el array C al array D
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 226 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


