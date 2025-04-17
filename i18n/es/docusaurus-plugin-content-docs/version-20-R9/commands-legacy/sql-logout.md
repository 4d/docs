---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL LOGOUT.Summary-->El comando SQL LOGOUT cierra la conexión con una fuente ODBC abierta en el proceso actual (si aplica).<!-- END REF--> Si no hay conexión ODBC abierta, el comando no hace nada.

#### Variables y conjuntos del sistema 

Si la conexión se cierra correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0\. Puede interceptar este error con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[SQL LOGIN](sql-login.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 872 |
| Hilo seguro | &cross; |
| Modifica variables | OK, error |


