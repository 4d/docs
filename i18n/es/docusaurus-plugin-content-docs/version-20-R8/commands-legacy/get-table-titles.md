---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *titTablas* ; *numTablas* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| titTablas | Text array | &#8592; | Nombres actuales de las tablas |
| numTablas | Integer array | &#8592; | Números de las tablas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET TABLE TITLES.Summary-->El comando GET TABLE TITLES llena los arrays *titTablas* y *numTablas* con los nombres y números de las tablas de la base definidas en la ventana de estructura o vía el comando [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES").<!-- END REF--> El contenido de estos dos arrays está sincronizado. 

Si el comando [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES") se llama durante la sesión, GET TABLE TITLES sólo devuelve los nombres “modificados” y los números de las tablas definidos utilizando este comando.  
  
De lo contrario, GET TABLE TITLES devuelve los nombres de las tablas de la base definidos en la ventana de estructura. 

En ambos casos, el comando no devuelve las tablas invisibles. 

#### Ver también 

[GET FIELD TITLES](get-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 803 |
| Hilo seguro | &cross; |


