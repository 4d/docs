---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* ; *errText* ; *errODBC* ; *errSQLServer* )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| errCode | Integer | &#8592; | Código del error |
| errText | Text | &#8592; | Texto del error |
| errODBC | Text | &#8592; | Código del error ODBC |
| errSQLServer | Integer | &#8592; | Código del error nativo servidor SQL |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->El comando SQL GET LAST ERROR devuelve la información relacionada con el último error encontrado durante la ejecución de un comando ODBC.<!-- END REF--> El error puede venir de la aplicación 4D, la red, la fuente ODBC, etc. 

Este comando generalmente debe llamarse en el contexto de un método de gestión de errores instalado utilizando el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

* El parámetro *errCode* devuelve el código del error.
* El parámetro *errText* devuelve el texto del error.

Los dos últimos parámetros sólo se llenan cuando el error viene de la fuente ODBC; de lo contrario, se devuelven vacíos.

* El parámetro *errODBC* devuelve el código del error ODBC (estado SQL).
* El parámetro *errSQLServer* devuelve el código del error nativo servidor SQL.

#### Ver también 

[Last errors](last-errors.md)   
[ON ERR CALL](on-err-call.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 825 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


