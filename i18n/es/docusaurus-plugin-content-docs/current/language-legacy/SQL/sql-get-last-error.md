---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* : Integer ; *errText* : Text ; *errODBC* : Text ; *errSQLServer* : Integer )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| errCode | Integer | &#8592; | Código del error |
| errText | Text | &#8592; | Texto del error |
| errODBC | Text | &#8592; | Código del error ODBC |
| errSQLServer | Integer | &#8592; | Código del error nativo servidor SQL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->El comando SQL GET LAST ERROR devuelve la información relacionada con el último error encontrado durante la ejecución de un comando ODBC.<!-- END REF--> El error puede venir de la aplicación 4D, la red, la fuente ODBC, etc. 

Este comando generalmente debe llamarse en el contexto de un método de gestión de errores instalado utilizando el comando [ON ERR CALL](../commands/on-err-call).

* El parámetro *errCode* devuelve el código del error.
* El parámetro *errText* devuelve el texto del error.

Los dos últimos parámetros sólo se llenan cuando el error viene de la fuente ODBC; de lo contrario, se devuelven vacíos.

* El parámetro *errODBC* devuelve el código del error ODBC (estado SQL).
* El parámetro *errSQLServer* devuelve el código del error nativo servidor SQL.

## Ver también 

[Last errors](../commands/last-errors)   
[ON ERR CALL](../commands/on-err-call)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 825 |
| Hilo seguro | no |



