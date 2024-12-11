---
id: sql-export-selection
title: SQL EXPORT SELECTION
slug: /commands/sql-export-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT SELECTION.Syntax-->**SQL EXPORT SELECTION** ( *tabla* ; *rutaCarpeta* {; *numArchivos* {; *tamLimiteArchivos* {; *tamLimiteCampos*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual exportar la selección |
| rutaCarpeta | Text | &#8594;  | Ruta de acceso de la carpeta de exportación o "" para mostrar una caja de diálogo de selección de carpeta |
| numArchivos | Integer | &#8594;  | Número máximo de archivos por carpeta |
| tamLimiteArchivos | Integer | &#8594;  | Tamaño máximo del archivo Export.sql (en KB) |
| tamLimiteCampos | Integer | &#8594;  | Límite de tamaño debajo del cual el contenido de un campo Texto, BLOB o imagen se integrará al archivo principal (en bytes) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL EXPORT SELECTION.Summary-->El comando SQL EXPORT SELECTION exporta al formato SQL los registros de la selección actual de la tabla 4D designada por el parámetro *Tabla*.<!-- END REF-->   

Este comando es casi idéntico al comando [SQL EXPORT DATABASE](sql-export-database.md). El archivo generado puede ser utilizado directamente por el comando \[#cmd id="1089"/\] con el fin de importar datos en otra base 4D. La única diferencia entre estos dos comandos es que SQL EXPORT SELECTION sólo exporta la selección actual de *Tabla* mientras [SQL EXPORT DATABASE](sql-export-database.md) exporta la totalidad de datos de la base. Igualmente, a diferencia del comando [SQL EXPORT DATABASE](sql-export-database.md), este comando no funciona con las bases SQL externas. Sólo puede utilizarse con la base principal

Consulte la descripción del comando [SQL EXPORT DATABASE](sql-export-database.md) para una descripción detallada del funcionamiento y parámetros de estos comandos.

Si la selección actual está vacía, el comando no hace nada. Note que en este caso, la carpeta de destino no se vacía. 

Si la exportación se lleva a cabo correctamente, la variable *OK* toma el valor 1\. De lo contrario, toma el valor 0\. 

##### 

**Nota:** este comando no soporta campos de tipo Objeto.

#### Ver también 

[SQL EXPORT DATABASE](sql-export-database.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1064 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


