---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *numTabla* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla | Integer | &#8594; | Número de tabla |
| Resultado | Boolean | &#8592; | True = la tabla existe en la base, False = la tabla no existe en la base |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Is table number valid.Summary-->El comando Is table number valid devuelve True si la tabla cuyo número se pasa en el parámetro *numTabla* existe en la base, de lo contrario False.<!-- END REF--> Recuerde que el comando devuelve False si la tabla está en la Papelera del Explorador. 

Este comando permite detectar las eventuales eliminaciones de tablas, que crean rupturas en la secuencia de números de las tablas.

## Ver también 

[Last table number](../commands/last-table-number)  
[Is field number valid](../commands/is-field-number-valid)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 999 |
| Hilo seguro | yes |


