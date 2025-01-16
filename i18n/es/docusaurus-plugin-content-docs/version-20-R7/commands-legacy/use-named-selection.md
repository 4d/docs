---
id: use-named-selection
title: USE NAMED SELECTION
slug: /commands/use-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.USE NAMED SELECTION.Syntax-->**USE NAMED SELECTION** ( *nombre* )<!-- END REF-->
<!--REF #_command_.USE NAMED SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre de la selección temporal a utilizar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.USE NAMED SELECTION.Summary-->USE NAMED SELECTION utiliza el nombre de la selección temporal como selección actual para la tabla a la cual pertenece.<!-- END REF-->

Cuando crea una selección temporal, el registro actual es “recordado” por la selección temporal. USE NAMED SELECTION recupera la posición de este registro y lo vuelve el nuevo registro actual; este comando carga el registro actual. Si el registro actual fue modificado después de la creación de *temp*, el registro debe guardarse antes de ejecutar USE NAMED SELECTION, para evitar perder la información modificada.

* Si [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION") se utilizó para crear *temp*, la selección temporal *temp* se copia a la selección actual de la tabla a la cual pertenece *temp*. La selección temporal *temp* existe en memoria hasta que se borra. Utilice el comando [CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION") para borrar la selección temporal y liberar la memoria utilizada por *temp*.
* Si [CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION") fue utilizado para crear *temp*, *temp* se utiliza como selección actual de la tabla y *temp* no existe más en memoria.

Recuerde que una selección temporal es una representación de una selección de registros en el momento que se crea la selección temporal. Si los registros que la selección temporal representa son modificados, la selección temporal podría ser obsoleta. Por lo tanto, una selección temporal representa un grupo de registros que no cambian con frecuencia. Diferentes cosas pueden invalidar una selección temporal: la modificación o eliminación de un registro de la selección temporal, o la modificación de los criterios de creación de la selección temporal.

#### Ver también 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 332 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||


