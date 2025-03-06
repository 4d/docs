---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre de la fuente de datos que está siendo utilizada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL Get current data source.Summary-->El comando *Get current data source* devuelve el nombre de la fuente de datos actual de la aplicación.<!-- END REF--> La fuente de datos actual recibe las búsquedas SQL ejecutadas dentro de las estructuras [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL"). 

Cuando la fuente de datos actual es la base 4D local, el comando devuelve la cadena “;DB4D\_SQL\_LOCAL;”, que corresponde al valor de la constante SQL\_INTERNAL (tema "*SQL*").

Este comando permite verificar la fuente de datos actual, generalmente antes de ejecutar una búsqueda SQL.

#### Ver también 

[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL GET DATA SOURCE LIST](sql-get-data-source-list.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 990 |
| Hilo seguro | &cross; |


