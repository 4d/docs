---
id: sql-load-record
title: SQL LOAD RECORD
slug: /commands/sql-load-record
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOAD RECORD.Syntax-->**SQL LOAD RECORD** {( *numReg* )}<!-- END REF-->
<!--REF #_command_.SQL LOAD RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numReg | Integer | &#8594;  | Número de registros a cargar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SQL LOAD RECORD.Summary-->El comando SQL LOAD RECORD recupera en 4D uno o más registros de la fuente de datos abierta en la conexión actual.<!-- END REF-->

El parámetro opcional *numReg* se utiliza para definir el número de registros a recuperar:

* Si omite este parámetro, el comando recuperará el registro actual de la fuente de datos. Este principio corresponde a la recuperación de datos en un bucle donde se recibe un registro a la vez.
* Si pasa un valor entero en *numReg*, el comando recupera *numReg* registros.
* Si pasa la constante SQL All Records  (valor -1), el comando recuperará todos los registros de la tabla.

**Nota:** estos dos últimos parámetros sólo tienen sentido si los datos recuperados están asociados con arrays o campos 4D. 

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1\. De lo contrario, devuelve 0.

#### Ver también 

[SQL CANCEL LOAD](sql-cancel-load.md)  
[SQL EXECUTE](sql-execute.md)  