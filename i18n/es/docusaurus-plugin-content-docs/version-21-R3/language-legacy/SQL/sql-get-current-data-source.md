---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre de la fuente de datos que está siendo utilizada |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|19 R5|Renombrar|
|11 SQL|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SQL Get current data source.Summary-->El comando *Get current data source* devuelve el nombre de la fuente de datos actual de la aplicación.<!-- END REF--> La fuente de datos actual recibe las búsquedas SQL ejecutadas dentro de las estructuras [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL"). 

Cuando la fuente de datos actual es la base 4D local, el comando devuelve la cadena “;DB4D\_SQL\_LOCAL;”, que corresponde al valor de la constante SQL\_INTERNAL (tema "*SQL*").

Este comando permite verificar la fuente de datos actual, generalmente antes de ejecutar una búsqueda SQL.

## Ver también 

[Begin SQL](../commands/begin-sql)  
[End SQL](../commands/end-sql)  
[SQL GET DATA SOURCE LIST](../commands/sql-get-data-source-list)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 990 |
| Hilo seguro | no |


