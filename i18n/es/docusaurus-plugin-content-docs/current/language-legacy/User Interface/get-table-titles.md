---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *titTablas* : Text array ; *numTablas* : Integer array )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| titTablas | Text array | &#8592; | Nombres actuales de las tablas |
| numTablas | Integer array | &#8592; | Números de las tablas |
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

<!--REF #_command_.GET TABLE TITLES.Summary-->El comando GET TABLE TITLES llena los arrays *titTablas* y *numTablas* con los nombres y números de las tablas de la base definidas en la ventana de estructura o vía el comando [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES").<!-- END REF--> El contenido de estos dos arrays está sincronizado. 

Si el comando [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES") se llama durante la sesión, GET TABLE TITLES sólo devuelve los nombres “modificados” y los números de las tablas definidos utilizando este comando.  
  
De lo contrario, GET TABLE TITLES devuelve los nombres de las tablas de la base definidos en la ventana de estructura. 

En ambos casos, el comando no devuelve las tablas invisibles. 

## Ver también 

[GET FIELD TITLES](../commands/get-field-titles)  
[SET TABLE TITLES](../commands/set-table-titles)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 803 |
| Hilo seguro | no |


