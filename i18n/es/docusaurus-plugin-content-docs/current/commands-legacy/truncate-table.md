---
id: truncate-table
title: TRUNCATE TABLE
slug: /commands/truncate-table
displayed_sidebar: docs
---

<!--REF #_command_.TRUNCATE TABLE.Syntax-->**TRUNCATE TABLE** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.TRUNCATE TABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual se borrarán todos los registros o tabla por defecto si se omite este parámetro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.TRUNCATE TABLE.Summary-->El comando TRUNCATE TABLE borra rápidamente todos los registros de tabla.<!-- END REF--> Si tabla ya está vacía, TRUNCATE TABLE no hace nada. Después de llamar el comando, no hay una selección actual ni un registro actual. 

El efecto de este comando es similar al de una secuencia [ALL RECORDS](all-records.md "ALL RECORDS") / [DELETE SELECTION](delete-selection.md "DELETE SELECTION"); sin embargo, su funcionamiento difiere en los siguientes puntos:

* No se llama el trigger
* La integridad referencial de los datos no es controlada.
* Ninguna transacción debe estar en curso en el proceso que ejecuta TRUNCATE TABLE. Si este es el caso, el comando no hace nada y la variable sistema OK toma el valor 0
* Si uno o más registros están bloqueados por otro proceso, el comando falla: se genera un error y la variable sistema OK toma el valor 0\. El conjunto sistema LockedSet no se crea.
* Si *tabla* ya está vacía, TRUNCATE TABLE no hace nada y la variable OK toma el valor 1.
* Si *tabla está en modo sólo lectura, TRUNCATE TABLE* no hace nada y la variable OK toma el valor 0.
* La variable OK toma el valor 0 ó 1 dependiendo de si el comando falló o fue exitoso.
* La operación se graba en el archivo de historial si lo hay.

El comando TRUNCATE TABLE debe por lo tanto utilizarse con precaución porque es muy efectivo en algunos casos, por ejemplo, para borrar rápidamente datos temporales.

**Nota:** el concepto y funcionamiento de este comando es similar al del comando SQL TRUNCATE (TABLA).

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[DELETE SELECTION](delete-selection.md)  