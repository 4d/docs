---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( *ptrTabla* : Pointer ; *numCamp* : Integer ) : Boolean<br/>**Is field number valid** ( *numTabla* : Integer ; *numCamp* : Integer ) : Boolean<!-- END REF--> 
<!--REF #_command_.Is field number valid.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla &#124; ptrTabla | Entero largo, Puntero | &#8594; | Número de tabla o Puntero a una tabla |
| numCamp | Integer | &#8594; | Número de campo |
| Resultado | Boolean | &#8592; | True = el campo existe en la tabla False = el campo no existe en la tabla |
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

<!--REF #_command_.Is field number valid.Summary-->El comando Is field number valid devuelve True si el campo cuyo número se pasa en el parámetro *numCamp* existe en la tabla cuyo número o puntero se pasa en el parámetro *numTabla* o *ptrTabla*.<!-- END REF--> Si el campo no existe, el comando devuelve False. Recuerde que el comando devuelve False si la tabla que contiene el campo se encuentra en la Papelera del Explorador. 

Este comando permite detectar las eventuales eliminaciones de campos, que crean rupturas en la secuencia de números de los campos.

## Ver también 

[Last table number](../commands/last-table-number)  
[Is table number valid](../commands/is-table-number-valid)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1000 |
| Hilo seguro | yes |


