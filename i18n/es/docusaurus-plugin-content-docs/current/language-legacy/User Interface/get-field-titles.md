---
id: get-field-titles
title: GET FIELD TITLES
slug: /commands/get-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *tabla* : Table ; *titulosCampos* : Text array ; *numCampos* : Integer array )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla de la cual quiere conocer los nombres de los campos |
| titulosCampos | Text array | &#8592; | Nombres actuales de los campos |
| numCampos | Integer array | &#8592; | Números de los campos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2003|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.GET FIELD TITLES.Summary-->El comando GET FIELD TITLES llena los arrays *titulosCampos* y *numCampos* con los nombres y los números de los campos de la *tabla*.<!-- END REF--> Los contenidos de estos dos arrays están sincronizados. 

Si el comando [SET FIELD TITLES](set-field-titles.md "SET FIELD TITLES") se llama durante la sesión, GET FIELD TITLES retorna únicamente los nombres “modificados” y los números de los campos definidos utilizando este comando. 

De lo contrario, GET FIELD TITLES devuelve los nombres de los campos de la base definidos en la ventana de Estructura. 

En ambos casos, el comando no devuelve campos invisibles. 

## Ver también 

[GET TABLE TITLES](../commands/get-table-titles)  
[SET FIELD TITLES](../commands/set-field-titles)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 804 |
| Hilo seguro | no |


